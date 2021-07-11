import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as nacl from 'tweetnacl';
import { ApplicationCommandInteractionDataOption, Interaction } from './InteractionModels';
import { InteractionResponse, InteractionCallbackType } from './InteractionResponseModels';
import predefinedMessages from './messages';

const PUBLIC_KEY = process.env.DISCORD_PUBLIC_KEY;

if (PUBLIC_KEY === undefined) {
    throw new Error('DISCORD_PUBLIC_KEY environment variable not set');
}

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const signature = req.headers['x-signature-ed25519'];
    const timestamp = req.headers['x-signature-timestamp'];
    
    const isVerified = signature && timestamp && nacl.sign.detached.verify(
        Buffer.from(timestamp + req.rawBody),
        Buffer.from(signature, 'hex'),
        Buffer.from(PUBLIC_KEY, 'hex')
    );

    if(!isVerified) {
        context.log.verbose('invalid request signature', req.rawBody, signature, timestamp);
        context.res = {
            status: 401,
            body: 'invalid request signature'
        };
        return;
    }

    context.log.verbose(req.rawBody);
    const body = req.body as Interaction;

    let response: InteractionResponse;

    if (body.type === 1) {
        response = {
            type: InteractionCallbackType.Pong
        };
    } else if (body.type === 2) {
        let options = new Map<string, ApplicationCommandInteractionDataOption>(body.data.options.map(o => [o.name, o]));
        let mentionUserId: string | undefined = options.get('user')?.value;
        let message = predefinedMessages[body.data.name]?.[options.get('replytype')?.value ?? ''];

        if (message === undefined) {
            message = 'Unsupported command';
            mentionUserId = undefined;
        }

        response = {
            type: InteractionCallbackType.ChannelMessageWithSource,
            data: mentionUserId ? {
                content: "<@"+ mentionUserId + "> " + message,
                allowed_mentions: { users: [mentionUserId] }
            }: {
                content: message,
                allowed_mentions: { parse: [] }
            }
        }

        context.log.warn('replying with', JSON.stringify(response));
        context.log.warn('token', body.token);
    } else {
        context.res = {
            status: 400,
            headers: {
                'Content-Type': 'application/json'
            },
            body: { message: 'Unsupported body type '+ (body as any).type }
        }
        return;
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        headers: {
            'Content-Type': 'application/json'
        },
        body: response
    };

};

export default httpTrigger;