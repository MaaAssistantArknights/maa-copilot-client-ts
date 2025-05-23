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
import type { CopilotInfo } from './CopilotInfo';
import {
    CopilotInfoFromJSON,
    CopilotInfoFromJSONTyped,
    CopilotInfoToJSON,
    CopilotInfoToJSONTyped,
} from './CopilotInfo';

/**
 * 
 * @export
 * @interface MaaResultCopilotInfo
 */
export interface MaaResultCopilotInfo {
    /**
     * 
     * @type {number}
     * @memberof MaaResultCopilotInfo
     */
    statusCode: number;
    /**
     * 
     * @type {string}
     * @memberof MaaResultCopilotInfo
     */
    message?: string;
    /**
     * 
     * @type {CopilotInfo}
     * @memberof MaaResultCopilotInfo
     */
    data?: CopilotInfo;
}

/**
 * Check if a given object implements the MaaResultCopilotInfo interface.
 */
export function instanceOfMaaResultCopilotInfo(value: object): value is MaaResultCopilotInfo {
    if (!('statusCode' in value) || value['statusCode'] === undefined) return false;
    return true;
}

export function MaaResultCopilotInfoFromJSON(json: any): MaaResultCopilotInfo {
    return MaaResultCopilotInfoFromJSONTyped(json, false);
}

export function MaaResultCopilotInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MaaResultCopilotInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'statusCode': json['status_code'],
        'message': json['message'] == null ? undefined : json['message'],
        'data': json['data'] == null ? undefined : CopilotInfoFromJSON(json['data']),
    };
}

export function MaaResultCopilotInfoToJSON(json: any): MaaResultCopilotInfo {
    return MaaResultCopilotInfoToJSONTyped(json, false);
}

export function MaaResultCopilotInfoToJSONTyped(value?: MaaResultCopilotInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status_code': value['statusCode'],
        'message': value['message'],
        'data': CopilotInfoToJSON(value['data']),
    };
}

