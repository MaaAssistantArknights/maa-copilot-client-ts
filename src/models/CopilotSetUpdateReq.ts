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
import type { CopilotSetStatus } from './CopilotSetStatus';
import {
    CopilotSetStatusFromJSON,
    CopilotSetStatusFromJSONTyped,
    CopilotSetStatusToJSON,
} from './CopilotSetStatus';

/**
 * 
 * @export
 * @interface CopilotSetUpdateReq
 */
export interface CopilotSetUpdateReq {
    /**
     * 
     * @type {number}
     * @memberof CopilotSetUpdateReq
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof CopilotSetUpdateReq
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CopilotSetUpdateReq
     */
    description: string;
    /**
     * 
     * @type {CopilotSetStatus}
     * @memberof CopilotSetUpdateReq
     */
    status: CopilotSetStatus;
}

/**
 * Check if a given object implements the CopilotSetUpdateReq interface.
 */
export function instanceOfCopilotSetUpdateReq(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "status" in value;

    return isInstance;
}

export function CopilotSetUpdateReqFromJSON(json: any): CopilotSetUpdateReq {
    return CopilotSetUpdateReqFromJSONTyped(json, false);
}

export function CopilotSetUpdateReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopilotSetUpdateReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'],
        'status': CopilotSetStatusFromJSON(json['status']),
    };
}

export function CopilotSetUpdateReqToJSON(value?: CopilotSetUpdateReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'description': value.description,
        'status': CopilotSetStatusToJSON(value.status),
    };
}

