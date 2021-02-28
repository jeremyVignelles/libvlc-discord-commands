import { ApplicationCommandOptionType, CreateApplicationCommand } from "./ApplicationCommandModels";
import predefinedMessages from '../DiscordWebhook/messages';

const commands: CreateApplicationCommand[] = [];
for (const commandKey of Object.keys(predefinedMessages)) {
    commands.push({
        name: commandKey,
        description: commandKey + ' predefined replies',
        options: [
            {
                type: ApplicationCommandOptionType.STRING,
                name: 'replytype',
                description: 'The type of reply to provide',
                required: true,
                choices: Object.keys(predefinedMessages[commandKey]).map(messageKey => ({ name: messageKey, value: messageKey }))
            },
            {
                type: ApplicationCommandOptionType.USER,
                name: 'user',
                description: 'The user to ping',
                required: false
            }
        ]
    })
}

export default commands;