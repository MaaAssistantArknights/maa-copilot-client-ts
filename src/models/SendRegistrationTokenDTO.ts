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
 * @interface SendRegistrationTokenDTO
 */
export interface SendRegistrationTokenDTO {
    /**
     * 
     * @type {string}
     * @memberof SendRegistrationTokenDTO
     */
    email: string;
}

/**
 * Check if a given object implements the SendRegistrationTokenDTO interface.
 */
export function instanceOfSendRegistrationTokenDTO(value: object): value is SendRegistrationTokenDTO {
    if (!('email' in value) || value['email'] === undefined) return false;
    return true;
}

export function SendRegistrationTokenDTOFromJSON(json: any): SendRegistrationTokenDTO {
    return SendRegistrationTokenDTOFromJSONTyped(json, false);
}

export function SendRegistrationTokenDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SendRegistrationTokenDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'],
    };
}

  export function SendRegistrationTokenDTOToJSON(json: any): SendRegistrationTokenDTO {
      return SendRegistrationTokenDTOToJSONTyped(json, false);
  }

  export function SendRegistrationTokenDTOToJSONTyped(value?: SendRegistrationTokenDTO | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'email': value['email'],
    };
}

