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
export function instanceOfCommentsRatingDTO(value: object): value is CommentsRatingDTO {
    if (!('commentId' in value) || value['commentId'] === undefined) return false;
    if (!('rating' in value) || value['rating'] === undefined) return false;
    return true;
}

export function CommentsRatingDTOFromJSON(json: any): CommentsRatingDTO {
    return CommentsRatingDTOFromJSONTyped(json, false);
}

export function CommentsRatingDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommentsRatingDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'commentId': json['comment_id'],
        'rating': json['rating'],
    };
}

export function CommentsRatingDTOToJSON(json: any): CommentsRatingDTO {
    return CommentsRatingDTOToJSONTyped(json, false);
}

export function CommentsRatingDTOToJSONTyped(value?: CommentsRatingDTO | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'comment_id': value['commentId'],
        'rating': value['rating'],
    };
}

