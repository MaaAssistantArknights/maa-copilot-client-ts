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
import type { CopilotSetRes } from './CopilotSetRes';
import {
    CopilotSetResFromJSON,
    CopilotSetResFromJSONTyped,
    CopilotSetResToJSON,
} from './CopilotSetRes';

/**
 * 
 * @export
 * @interface MaaResultCopilotSetRes
 */
export interface MaaResultCopilotSetRes {
    /**
     * 
     * @type {number}
     * @memberof MaaResultCopilotSetRes
     */
    statusCode: number;
    /**
     * 
     * @type {string}
     * @memberof MaaResultCopilotSetRes
     */
    message?: string;
    /**
     * 
     * @type {CopilotSetRes}
     * @memberof MaaResultCopilotSetRes
     */
    data?: CopilotSetRes;
}

/**
 * Check if a given object implements the MaaResultCopilotSetRes interface.
 */
export function instanceOfMaaResultCopilotSetRes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "statusCode" in value;

    return isInstance;
}

export function MaaResultCopilotSetResFromJSON(json: any): MaaResultCopilotSetRes {
    return MaaResultCopilotSetResFromJSONTyped(json, false);
}

export function MaaResultCopilotSetResFromJSONTyped(json: any, ignoreDiscriminator: boolean): MaaResultCopilotSetRes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'statusCode': json['status_code'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : CopilotSetResFromJSON(json['data']),
    };
}

export function MaaResultCopilotSetResToJSON(value?: MaaResultCopilotSetRes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status_code': value.statusCode,
        'message': value.message,
        'data': CopilotSetResToJSON(value.data),
    };
}

