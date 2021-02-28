import axios, { AxiosError } from 'axios';
import { ClientCredentials } from 'simple-oauth2';
import commands from './commands';

if(process.argv.length < 5)
{
    console.log('ts-node index.ts guildId clientId clientSecret');
    process.exit(0);
}

(async function() {
    const guildId = process.argv[2];
    const clientId = process.argv[3];
    const clientSecret = process.argv[4];

    var client = new ClientCredentials({
        client: {
            id: clientId,
            secret: clientSecret
        },
        auth: {
            tokenHost: 'https://discord.com/',
            tokenPath: 'api/oauth2/token'
        }
    });

    const tokenResponse = await client.getToken({
        scope: ['applications.commands.update']
    });

    console.log('Got token, calling discord API');

    try {
        for(const c of commands) {
            await axios.post(`https://discord.com/api/v8/applications/${clientId}/guilds/${guildId}/commands`, c, {
                headers: {
                    'Authorization': 'Bearer ' + tokenResponse.token.access_token
                }
            });
        }
    } catch (err) {
        if(axios.isAxiosError(err)) {
            const axiosErr = err as AxiosError<any>;
            if (axiosErr.response) {
                console.log('error', axiosErr.response.status, axiosErr.response.data);
            }
        }
    }
})();