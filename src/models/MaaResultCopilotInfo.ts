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
import type { CopilotInfo } from './CopilotInfo';
import {
    CopilotInfoFromJSON,
    CopilotInfoFromJSONTyped,
    CopilotInfoToJSON,
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
export function instanceOfMaaResultCopilotInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "statusCode" in value;

    return isInstance;
}

export function MaaResultCopilotInfoFromJSON(json: any): MaaResultCopilotInfo {
    return MaaResultCopilotInfoFromJSONTyped(json, false);
}

export function MaaResultCopilotInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MaaResultCopilotInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'statusCode': json['status_code'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : CopilotInfoFromJSON(json['data']),
    };
}

export function MaaResultCopilotInfoToJSON(value?: MaaResultCopilotInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status_code': value.statusCode,
        'message': value.message,
        'data': CopilotInfoToJSON(value.data),
    };
}

