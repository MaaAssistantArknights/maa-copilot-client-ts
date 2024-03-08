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
 * @interface CopilotSetQuery
 */
export interface CopilotSetQuery {
    /**
     * 
     * @type {number}
     * @memberof CopilotSetQuery
     */
    page: number;
    /**
     * 
     * @type {number}
     * @memberof CopilotSetQuery
     */
    limit: number;
    /**
     * 
     * @type {string}
     * @memberof CopilotSetQuery
     */
    keyword?: string;
}

/**
 * Check if a given object implements the CopilotSetQuery interface.
 */
export function instanceOfCopilotSetQuery(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "page" in value;
    isInstance = isInstance && "limit" in value;

    return isInstance;
}

export function CopilotSetQueryFromJSON(json: any): CopilotSetQuery {
    return CopilotSetQueryFromJSONTyped(json, false);
}

export function CopilotSetQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopilotSetQuery {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'page': json['page'],
        'limit': json['limit'],
        'keyword': !exists(json, 'keyword') ? undefined : json['keyword'],
    };
}

export function CopilotSetQueryToJSON(value?: CopilotSetQuery | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'page': value.page,
        'limit': value.limit,
        'keyword': value.keyword,
    };
}
