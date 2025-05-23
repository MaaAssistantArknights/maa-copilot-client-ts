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
import type { ArkLevelInfo } from './ArkLevelInfo';
import {
    ArkLevelInfoFromJSON,
    ArkLevelInfoFromJSONTyped,
    ArkLevelInfoToJSON,
    ArkLevelInfoToJSONTyped,
} from './ArkLevelInfo';

/**
 * 
 * @export
 * @interface MaaResultListArkLevelInfo
 */
export interface MaaResultListArkLevelInfo {
    /**
     * 
     * @type {number}
     * @memberof MaaResultListArkLevelInfo
     */
    statusCode: number;
    /**
     * 
     * @type {string}
     * @memberof MaaResultListArkLevelInfo
     */
    message?: string;
    /**
     * 
     * @type {Array<ArkLevelInfo>}
     * @memberof MaaResultListArkLevelInfo
     */
    data?: Array<ArkLevelInfo>;
}

/**
 * Check if a given object implements the MaaResultListArkLevelInfo interface.
 */
export function instanceOfMaaResultListArkLevelInfo(value: object): value is MaaResultListArkLevelInfo {
    if (!('statusCode' in value) || value['statusCode'] === undefined) return false;
    return true;
}

export function MaaResultListArkLevelInfoFromJSON(json: any): MaaResultListArkLevelInfo {
    return MaaResultListArkLevelInfoFromJSONTyped(json, false);
}

export function MaaResultListArkLevelInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MaaResultListArkLevelInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'statusCode': json['status_code'],
        'message': json['message'] == null ? undefined : json['message'],
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(ArkLevelInfoFromJSON)),
    };
}

export function MaaResultListArkLevelInfoToJSON(json: any): MaaResultListArkLevelInfo {
    return MaaResultListArkLevelInfoToJSONTyped(json, false);
}

export function MaaResultListArkLevelInfoToJSONTyped(value?: MaaResultListArkLevelInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status_code': value['statusCode'],
        'message': value['message'],
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(ArkLevelInfoToJSON)),
    };
}

