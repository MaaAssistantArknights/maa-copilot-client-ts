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
import type { CommentsAreaInfo } from './CommentsAreaInfo';
import {
    CommentsAreaInfoFromJSON,
    CommentsAreaInfoFromJSONTyped,
    CommentsAreaInfoToJSON,
} from './CommentsAreaInfo';

/**
 * 
 * @export
 * @interface MaaResultCommentsAreaInfo
 */
export interface MaaResultCommentsAreaInfo {
    /**
     * 
     * @type {number}
     * @memberof MaaResultCommentsAreaInfo
     */
    statusCode: number;
    /**
     * 
     * @type {string}
     * @memberof MaaResultCommentsAreaInfo
     */
    message?: string;
    /**
     * 
     * @type {CommentsAreaInfo}
     * @memberof MaaResultCommentsAreaInfo
     */
    data?: CommentsAreaInfo;
}

/**
 * Check if a given object implements the MaaResultCommentsAreaInfo interface.
 */
export function instanceOfMaaResultCommentsAreaInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "statusCode" in value;

    return isInstance;
}

export function MaaResultCommentsAreaInfoFromJSON(json: any): MaaResultCommentsAreaInfo {
    return MaaResultCommentsAreaInfoFromJSONTyped(json, false);
}

export function MaaResultCommentsAreaInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MaaResultCommentsAreaInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'statusCode': json['status_code'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : CommentsAreaInfoFromJSON(json['data']),
    };
}

export function MaaResultCommentsAreaInfoToJSON(value?: MaaResultCommentsAreaInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status_code': value.statusCode,
        'message': value.message,
        'data': CommentsAreaInfoToJSON(value.data),
    };
}

