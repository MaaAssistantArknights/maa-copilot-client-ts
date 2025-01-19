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
 * @interface CopilotInfo
 */
export interface CopilotInfo {
    /**
     * 
     * @type {number}
     * @memberof CopilotInfo
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof CopilotInfo
     */
    uploadTime: Date;
    /**
     * 
     * @type {string}
     * @memberof CopilotInfo
     */
    uploaderId: string;
    /**
     * 
     * @type {string}
     * @memberof CopilotInfo
     */
    uploader: string;
    /**
     * 
     * @type {number}
     * @memberof CopilotInfo
     */
    views: number;
    /**
     * 
     * @type {number}
     * @memberof CopilotInfo
     */
    hotScore: number;
    /**
     * 
     * @type {boolean}
     * @memberof CopilotInfo
     */
    available: boolean;
    /**
     * 
     * @type {number}
     * @memberof CopilotInfo
     */
    ratingLevel: number;
    /**
     * 
     * @type {boolean}
     * @memberof CopilotInfo
     */
    notEnoughRating: boolean;
    /**
     * 
     * @type {number}
     * @memberof CopilotInfo
     */
    ratingRatio: number;
    /**
     * 
     * @type {number}
     * @memberof CopilotInfo
     */
    ratingType: number;
    /**
     * 
     * @type {number}
     * @memberof CopilotInfo
     */
    commentsCount: number;
    /**
     * 
     * @type {string}
     * @memberof CopilotInfo
     */
    content: string;
    /**
     * 
     * @type {number}
     * @memberof CopilotInfo
     */
    like: number;
    /**
     * 
     * @type {number}
     * @memberof CopilotInfo
     */
    dislike: number;
}

/**
 * Check if a given object implements the CopilotInfo interface.
 */
export function instanceOfCopilotInfo(value: object): value is CopilotInfo {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('uploadTime' in value) || value['uploadTime'] === undefined) return false;
    if (!('uploaderId' in value) || value['uploaderId'] === undefined) return false;
    if (!('uploader' in value) || value['uploader'] === undefined) return false;
    if (!('views' in value) || value['views'] === undefined) return false;
    if (!('hotScore' in value) || value['hotScore'] === undefined) return false;
    if (!('available' in value) || value['available'] === undefined) return false;
    if (!('ratingLevel' in value) || value['ratingLevel'] === undefined) return false;
    if (!('notEnoughRating' in value) || value['notEnoughRating'] === undefined) return false;
    if (!('ratingRatio' in value) || value['ratingRatio'] === undefined) return false;
    if (!('ratingType' in value) || value['ratingType'] === undefined) return false;
    if (!('commentsCount' in value) || value['commentsCount'] === undefined) return false;
    if (!('content' in value) || value['content'] === undefined) return false;
    if (!('like' in value) || value['like'] === undefined) return false;
    if (!('dislike' in value) || value['dislike'] === undefined) return false;
    return true;
}

export function CopilotInfoFromJSON(json: any): CopilotInfo {
    return CopilotInfoFromJSONTyped(json, false);
}

export function CopilotInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopilotInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'uploadTime': (new Date(json['upload_time'])),
        'uploaderId': json['uploader_id'],
        'uploader': json['uploader'],
        'views': json['views'],
        'hotScore': json['hot_score'],
        'available': json['available'],
        'ratingLevel': json['rating_level'],
        'notEnoughRating': json['not_enough_rating'],
        'ratingRatio': json['rating_ratio'],
        'ratingType': json['rating_type'],
        'commentsCount': json['comments_count'],
        'content': json['content'],
        'like': json['like'],
        'dislike': json['dislike'],
    };
}

export function CopilotInfoToJSON(json: any): CopilotInfo {
    return CopilotInfoToJSONTyped(json, false);
}

export function CopilotInfoToJSONTyped(value?: CopilotInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'upload_time': ((value['uploadTime']).toISOString()),
        'uploader_id': value['uploaderId'],
        'uploader': value['uploader'],
        'views': value['views'],
        'hot_score': value['hotScore'],
        'available': value['available'],
        'rating_level': value['ratingLevel'],
        'not_enough_rating': value['notEnoughRating'],
        'rating_ratio': value['ratingRatio'],
        'rating_type': value['ratingType'],
        'comments_count': value['commentsCount'],
        'content': value['content'],
        'like': value['like'],
        'dislike': value['dislike'],
    };
}

