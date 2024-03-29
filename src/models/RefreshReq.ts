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
/**
 * 
 * @export
 * @interface RefreshReq
 */
export interface RefreshReq {
    /**
     * 
     * @type {string}
     * @memberof RefreshReq
     */
    refreshToken: string;
}

/**
 * Check if a given object implements the RefreshReq interface.
 */
export function instanceOfRefreshReq(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "refreshToken" in value;

    return isInstance;
}

export function RefreshReqFromJSON(json: any): RefreshReq {
    return RefreshReqFromJSONTyped(json, false);
}

export function RefreshReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): RefreshReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'refreshToken': json['refresh_token'],
    };
}

export function RefreshReqToJSON(value?: RefreshReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'refresh_token': value.refreshToken,
    };
}

