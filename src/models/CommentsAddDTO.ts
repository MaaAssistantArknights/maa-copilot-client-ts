/* tslint:disable */
/* eslint-disable */
/**
 * MAA Copilot Center API
 * MAA Copilot Backend Center
 *
 * The version of the OpenAPI document: v1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CommentsAddDTO
 */
export interface CommentsAddDTO {
    /**
     * 评论内容
     * @type {string}
     * @memberof CommentsAddDTO
     */
    message: string;
    /**
     * 
     * @type {number}
     * @memberof CommentsAddDTO
     */
    copilotId: number;
    /**
     * 
     * @type {string}
     * @memberof CommentsAddDTO
     */
    fromCommentId?: string;
    /**
     * 是否接收通知
     * @type {boolean}
     * @memberof CommentsAddDTO
     */
    notification: boolean;
}

/**
 * Check if a given object implements the CommentsAddDTO interface.
 */
export function instanceOfCommentsAddDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "message" in value;
    isInstance = isInstance && "copilotId" in value;
    isInstance = isInstance && "notification" in value;

    return isInstance;
}

export function CommentsAddDTOFromJSON(json: any): CommentsAddDTO {
    return CommentsAddDTOFromJSONTyped(json, false);
}

export function CommentsAddDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommentsAddDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': json['message'],
        'copilotId': json['copilot_id'],
        'fromCommentId': !exists(json, 'from_comment_id') ? undefined : json['from_comment_id'],
        'notification': json['notification'],
    };
}

export function CommentsAddDTOToJSON(value?: CommentsAddDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
        'copilot_id': value.copilotId,
        'from_comment_id': value.fromCommentId,
        'notification': value.notification,
    };
}
