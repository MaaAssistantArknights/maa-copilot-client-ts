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
import type { CommentsInfo } from './CommentsInfo';
import {
    CommentsInfoFromJSON,
    CommentsInfoFromJSONTyped,
    CommentsInfoToJSON,
} from './CommentsInfo';

/**
 * 
 * @export
 * @interface CommentsAreaInfo
 */
export interface CommentsAreaInfo {
    /**
     * 
     * @type {boolean}
     * @memberof CommentsAreaInfo
     */
    hasNext: boolean;
    /**
     * 
     * @type {number}
     * @memberof CommentsAreaInfo
     */
    page: number;
    /**
     * 
     * @type {number}
     * @memberof CommentsAreaInfo
     */
    total: number;
    /**
     * 
     * @type {Array<CommentsInfo>}
     * @memberof CommentsAreaInfo
     */
    data: Array<CommentsInfo>;
}

/**
 * Check if a given object implements the CommentsAreaInfo interface.
 */
export function instanceOfCommentsAreaInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "hasNext" in value;
    isInstance = isInstance && "page" in value;
    isInstance = isInstance && "total" in value;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function CommentsAreaInfoFromJSON(json: any): CommentsAreaInfo {
    return CommentsAreaInfoFromJSONTyped(json, false);
}

export function CommentsAreaInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommentsAreaInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasNext': json['has_next'],
        'page': json['page'],
        'total': json['total'],
        'data': ((json['data'] as Array<any>).map(CommentsInfoFromJSON)),
    };
}

export function CommentsAreaInfoToJSON(value?: CommentsAreaInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'has_next': value.hasNext,
        'page': value.page,
        'total': value.total,
        'data': ((value.data as Array<any>).map(CommentsInfoToJSON)),
    };
}

