// Typescript definitions for the Discord data model : https://discord.com/developers/docs/interactions/slash-commands#data-models-and-types

import { AllowedMentions } from "./AllowedMentionsModels";

export enum InteractionCallbackType {
    /**
     * ACK a Ping
     */
    Pong = 1,

    /**
     * respond to an interaction with a message
     */
    ChannelMessageWithSource = 4,

    /**
     * ACK an interaction and edit a response later, the user sees a loading state
     */
     DeferredChannelMessageWithSource = 5
}

export interface InteractionResponse {
    /**
     * the type of response
     */
    type: InteractionCallbackType,

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
    content?: string,

    /**
     * supports up to 10 embeds
     * Irrelevant for our use case, so typed "unknown"
     */
    embeds?: unknown[],

    /**
     * allowed mentions object
     */
    allowed_mentions?: AllowedMentions,

    /**
     * set to 64 to make your response ephemeral
     */
    flags?: number,
}