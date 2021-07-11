// https://discord.com/developers/docs/interactions/slash-commands#applicationcommand

export interface CreateApplicationCommand {
    /**
     * 1-32 character name matching ^[\w-]{1,32}$
     */
    name: string;

    /**
     * 1-100 character description
     */
    description: string;

    /**
     * the parameters for the command
     */
    options?: ApplicationCommandOption[];

    /**
     * whether the command is enabled by default when the app is added to a guild (default: true)
     */
    default_permission?: boolean;
}

export interface ApplicationCommandOption {
    /**
     * value of ApplicationCommandOptionType
     */
    type: ApplicationCommandOptionType;

    /**
     * 1-32 character name matching ^[\w-]{1,32}$
     */
    name: string

    /**
     * 1-100 character description
     */
    description: string;

    /**
     * if the parameter is required or optional--default false
     */
    required?: boolean;

    /**
     * choices for string and int types for the user to pick from
     */
    choices?: ApplicationCommandOptionChoice[];

    /**
     * if the option is a subcommand or subcommand group type, this nested options will be the parameters
     */
    options?: ApplicationCommandOption[];
}

export enum ApplicationCommandOptionType {
    SUB_COMMAND = 1,
    SUB_COMMAND_GROUP = 2,
    STRING = 3,
    INTEGER = 4,
    BOOLEAN = 5,
    USER = 6,
    CHANNEL = 7,
    ROLE = 8
}

export interface ApplicationCommandOptionChoice {
    /**
     * 1-100 character choice name
     */
    name: string;

    /**
     * value of the choice
     */
    value: string | number;
}