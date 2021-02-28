// Typescript definitions for the Discord data model : https://discord.com/developers/docs/interactions/slash-commands#data-models-and-types

export type Interaction = ApplicationCommandInteraction | PingInteraction;

export interface PingInteraction {
    /**
     * id of the interaction
     */
    id: string,

    /**
     * the type of interaction
     */
    type: 1,

    /**
     * a continuation token for responding to the interaction
     */
    token: string,

    /**
     * read-only property, always 1
     */
    version: 1
}

export interface ApplicationCommandInteraction {
    /**
     * id of the interaction
     */
    id: string,

    /**
     * the type of interaction
     */
    type: 2,

    /**
     * the command data payload
     */
    data: ApplicationCommandInteractionData,

    /**
     * the guild it was sent from
     */
    guild_id?: string,

    /**
     * the guild it was sent from.
     */
    channel_id?: string,
    
    /**
     * guild member data for the invoking user, including permissions
     * Irrelevant for our use case, so typed "unknown"
     */
    member?: unknown,

    /**
     * user object for the invoking user, if invoked in a DM
     * Irrelevant for our use case, so typed "unknown"
     */
    user?: unknown,

    /**
     * a continuation token for responding to the interaction
     */
    token: string,

    /**
     * read-only property, always 1
     */
    version: 1
}

export interface ApplicationCommandInteractionData {
    /**
     * the ID of the invoked command
     */
    id: string,

    /**
     * the name of the invoked command
     */
    name: string,

    /**
     * the params + values from the user
     */
    options: ApplicationCommandInteractionDataOption[],
}

export interface ApplicationCommandInteractionDataOption {
    /**
     * the name of the parameter
     */
    name: string;

    /**
     * the value of the pair
     */
    value?: string;// TODO: not sure about the typing here

    /**
     * present if this option is a group or subcommand
     */
    options: ApplicationCommandInteractionDataOption[],
}