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
 * @interface CommentsRatingDTO
 */
export interface CommentsRatingDTO {
    /**
     * 
     * @type {string}
     * @memberof CommentsRatingDTO
     */
    commentId: string;
    /**
     * 
     * @type {string}
     * @memberof CommentsRatingDTO
     */
    rating: string;
}

/**
 * Check if a given object implements the CommentsRatingDTO interface.
 */
export function instanceOfCommentsRatingDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "commentId" in value;
    isInstance = isInstance && "rating" in value;

    return isInstance;
}

export function CommentsRatingDTOFromJSON(json: any): CommentsRatingDTO {
    return CommentsRatingDTOFromJSONTyped(json, false);
}

export function CommentsRatingDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommentsRatingDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'commentId': json['comment_id'],
        'rating': json['rating'],
    };
}

export function CommentsRatingDTOToJSON(value?: CommentsRatingDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'comment_id': value.commentId,
        'rating': value.rating,
    };
}

