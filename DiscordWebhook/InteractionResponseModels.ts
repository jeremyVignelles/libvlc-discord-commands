// Typescript definitions for the Discord data model : https://discord.com/developers/docs/interactions/slash-commands#data-models-and-types

import { AllowedMentions } from "./AllowedMentionsModels";

export enum InteractionResponseType {
    /**
     * ACK a Ping
     */
    Pong = 1,

    /**
     * ACK a command without sending a message, eating the user's input
     */
    Acknowledge = 2,

    /**
     * respond with a message, eating the user's input
     */
    ChannelMessage = 3,

    /**
     * respond with a message, showing the user's input
     */
    ChannelMessageWithSource = 4,

    /**
     * ACK a command without sending a message, showing the user's input
     */
    AcknowledgeWithSource = 5
}

export interface InteractionResponse {
    /**
     * the type of response
     */
    type: InteractionResponseType,

    /**
     * an optional response message
     */
    data?: InteractionApplicationCommandCallbackData,
}

export interface InteractionApplicationCommandCallbackData {
    /**
     * is the response TTS
     */
    tts?: boolean,

    /**
     * message content
     */
    content: string,

    /**
     * supports up to 10 embeds
     * Irrelevant for our use case, so typed "unknown"
     */
    embeds?: unknown[],

    /**
     * allowed mentions object
     */
    allowed_mentions?: AllowedMentions
}