/* tslint:disable */
/* eslint-disable */
/**
 * ZOOT Plus Backend API
 * ZOOT Plus Backend API
 *
 * The version of the OpenAPI document: v2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { CopilotPageInfo } from './CopilotPageInfo';
import {
    CopilotPageInfoFromJSON,
    CopilotPageInfoFromJSONTyped,
    CopilotPageInfoToJSON,
    CopilotPageInfoToJSONTyped,
} from './CopilotPageInfo';

/**
 * 
 * @export
 * @interface MaaResultCopilotPageInfo
 */
export interface MaaResultCopilotPageInfo {
    /**
     * 
     * @type {number}
     * @memberof MaaResultCopilotPageInfo
     */
    statusCode: number;
    /**
     * 
     * @type {string}
     * @memberof MaaResultCopilotPageInfo
     */
    message?: string;
    /**
     * 
     * @type {CopilotPageInfo}
     * @memberof MaaResultCopilotPageInfo
     */
    data?: CopilotPageInfo;
}

/**
 * Check if a given object implements the MaaResultCopilotPageInfo interface.
 */
export function instanceOfMaaResultCopilotPageInfo(value: object): value is MaaResultCopilotPageInfo {
    if (!('statusCode' in value) || value['statusCode'] === undefined) return false;
    return true;
}

export function MaaResultCopilotPageInfoFromJSON(json: any): MaaResultCopilotPageInfo {
    return MaaResultCopilotPageInfoFromJSONTyped(json, false);
}

export function MaaResultCopilotPageInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MaaResultCopilotPageInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'statusCode': json['status_code'],
        'message': json['message'] == null ? undefined : json['message'],
        'data': json['data'] == null ? undefined : CopilotPageInfoFromJSON(json['data']),
    };
}

export function MaaResultCopilotPageInfoToJSON(json: any): MaaResultCopilotPageInfo {
    return MaaResultCopilotPageInfoToJSONTyped(json, false);
}

export function MaaResultCopilotPageInfoToJSONTyped(value?: MaaResultCopilotPageInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status_code': value['statusCode'],
        'message': value['message'],
        'data': CopilotPageInfoToJSON(value['data']),
    };
}

