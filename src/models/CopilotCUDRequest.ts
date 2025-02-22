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
 * @interface CopilotCUDRequest
 */
export interface CopilotCUDRequest {
    /**
     * 
     * @type {string}
     * @memberof CopilotCUDRequest
     */
    content?: string;
    /**
     * 
     * @type {number}
     * @memberof CopilotCUDRequest
     */
    id?: number;
}

/**
 * Check if a given object implements the CopilotCUDRequest interface.
 */
export function instanceOfCopilotCUDRequest(value: object): value is CopilotCUDRequest {
    return true;
}

export function CopilotCUDRequestFromJSON(json: any): CopilotCUDRequest {
    return CopilotCUDRequestFromJSONTyped(json, false);
}

export function CopilotCUDRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopilotCUDRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'content': json['content'] == null ? undefined : json['content'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function CopilotCUDRequestToJSON(json: any): CopilotCUDRequest {
    return CopilotCUDRequestToJSONTyped(json, false);
}

export function CopilotCUDRequestToJSONTyped(value?: CopilotCUDRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'content': value['content'],
        'id': value['id'],
    };
}

