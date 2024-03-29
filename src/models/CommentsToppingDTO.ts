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
 * @interface CommentsToppingDTO
 */
export interface CommentsToppingDTO {
    /**
     * 
     * @type {string}
     * @memberof CommentsToppingDTO
     */
    commentId: string;
    /**
     * 
     * @type {boolean}
     * @memberof CommentsToppingDTO
     */
    topping: boolean;
}

/**
 * Check if a given object implements the CommentsToppingDTO interface.
 */
export function instanceOfCommentsToppingDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "commentId" in value;
    isInstance = isInstance && "topping" in value;

    return isInstance;
}

export function CommentsToppingDTOFromJSON(json: any): CommentsToppingDTO {
    return CommentsToppingDTOFromJSONTyped(json, false);
}

export function CommentsToppingDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommentsToppingDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'commentId': json['comment_id'],
        'topping': json['topping'],
    };
}

export function CommentsToppingDTOToJSON(value?: CommentsToppingDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'comment_id': value.commentId,
        'topping': value.topping,
    };
}

