# LibVLC Discord slash commands

This discord slash commands integration allows to send predefined messages on the libvlc discord server.

This was made using Azure functions in node.js (typescript) for the server code, and node.js + typescript for the registration code.

1. Create a Discord APP
2. Create an azure function
3. Set the DISCORD_PUBLIC_KEY environment variable in the azure function
4. Deploy the DiscordWebhook function on Azure
5. In the Discord app portal, in the "Interactions Endpoint URL" field, put your Azure function URL and save
6. In the OAuth2 tab, check "application.commands" and copy the generated URL in your browser, add the app to your guild.
7. Go to the _registration folder locally, and run `npm run start <guildId> <clientId> <clientSecret>`
8. Your commands should be up and running.


## Commands

The commands list can be found [here](DiscordWebhook/messages.ts)