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

import { mapValues } from '../runtime';
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
export function instanceOfCommentsToppingDTO(value: object): value is CommentsToppingDTO {
    if (!('commentId' in value) || value['commentId'] === undefined) return false;
    if (!('topping' in value) || value['topping'] === undefined) return false;
    return true;
}

export function CommentsToppingDTOFromJSON(json: any): CommentsToppingDTO {
    return CommentsToppingDTOFromJSONTyped(json, false);
}

export function CommentsToppingDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommentsToppingDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'commentId': json['comment_id'],
        'topping': json['topping'],
    };
}

  export function CommentsToppingDTOToJSON(json: any): CommentsToppingDTO {
      return CommentsToppingDTOToJSONTyped(json, false);
  }

  export function CommentsToppingDTOToJSONTyped(value?: CommentsToppingDTO | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'comment_id': value['commentId'],
        'topping': value['topping'],
    };
}

