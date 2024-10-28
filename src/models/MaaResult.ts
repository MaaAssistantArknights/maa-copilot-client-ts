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
 * @interface MaaResult
 */
export interface MaaResult {
    /**
     * 
     * @type {number}
     * @memberof MaaResult
     */
    statusCode: number;
    /**
     * 
     * @type {string}
     * @memberof MaaResult
     */
    message?: string;
    /**
     * 
     * @type {object}
     * @memberof MaaResult
     */
    data?: object;
}

/**
 * Check if a given object implements the MaaResult interface.
 */
export function instanceOfMaaResult(value: object): value is MaaResult {
    if (!('statusCode' in value) || value['statusCode'] === undefined) return false;
    return true;
}

export function MaaResultFromJSON(json: any): MaaResult {
    return MaaResultFromJSONTyped(json, false);
}

export function MaaResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): MaaResult {
    if (json == null) {
        return json;
    }
    return {
        
        'statusCode': json['status_code'],
        'message': json['message'] == null ? undefined : json['message'],
        'data': json['data'] == null ? undefined : json['data'],
    };
}

  export function MaaResultToJSON(json: any): MaaResult {
      return MaaResultToJSONTyped(json, false);
  }

  export function MaaResultToJSONTyped(value?: MaaResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status_code': value['statusCode'],
        'message': value['message'],
        'data': value['data'],
    };
}

