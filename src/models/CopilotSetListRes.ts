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
 * @interface CopilotSetListRes
 */
export interface CopilotSetListRes {
    /**
     * 
     * @type {number}
     * @memberof CopilotSetListRes
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof CopilotSetListRes
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CopilotSetListRes
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof CopilotSetListRes
     */
    creatorId: string;
    /**
     * 
     * @type {string}
     * @memberof CopilotSetListRes
     */
    creator: string;
    /**
     * 
     * @type {Date}
     * @memberof CopilotSetListRes
     */
    createTime: Date;
    /**
     * 
     * @type {Date}
     * @memberof CopilotSetListRes
     */
    updateTime: Date;
}

/**
 * Check if a given object implements the CopilotSetListRes interface.
 */
export function instanceOfCopilotSetListRes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "creatorId" in value;
    isInstance = isInstance && "creator" in value;
    isInstance = isInstance && "createTime" in value;
    isInstance = isInstance && "updateTime" in value;

    return isInstance;
}

export function CopilotSetListResFromJSON(json: any): CopilotSetListRes {
    return CopilotSetListResFromJSONTyped(json, false);
}

export function CopilotSetListResFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopilotSetListRes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'],
        'creatorId': json['creator_id'],
        'creator': json['creator'],
        'createTime': (new Date(json['create_time'])),
        'updateTime': (new Date(json['update_time'])),
    };
}

export function CopilotSetListResToJSON(value?: CopilotSetListRes | null): any {
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
        'creator_id': value.creatorId,
        'creator': value.creator,
        'create_time': (value.createTime.toISOString()),
        'update_time': (value.updateTime.toISOString()),
    };
}

