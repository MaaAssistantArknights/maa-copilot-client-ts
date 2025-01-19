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
import type { CopilotSetStatus } from './CopilotSetStatus';
import {
    CopilotSetStatusFromJSON,
    CopilotSetStatusFromJSONTyped,
    CopilotSetStatusToJSON,
    CopilotSetStatusToJSONTyped,
} from './CopilotSetStatus';

/**
 * 
 * @export
 * @interface CopilotSetRes
 */
export interface CopilotSetRes {
    /**
     * 
     * @type {number}
     * @memberof CopilotSetRes
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof CopilotSetRes
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CopilotSetRes
     */
    description: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof CopilotSetRes
     */
    copilotIds: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof CopilotSetRes
     */
    creatorId: string;
    /**
     * 
     * @type {string}
     * @memberof CopilotSetRes
     */
    creator: string;
    /**
     * 
     * @type {Date}
     * @memberof CopilotSetRes
     */
    createTime: Date;
    /**
     * 
     * @type {Date}
     * @memberof CopilotSetRes
     */
    updateTime: Date;
    /**
     * 
     * @type {CopilotSetStatus}
     * @memberof CopilotSetRes
     */
    status: CopilotSetStatus;
}



/**
 * Check if a given object implements the CopilotSetRes interface.
 */
export function instanceOfCopilotSetRes(value: object): value is CopilotSetRes {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('copilotIds' in value) || value['copilotIds'] === undefined) return false;
    if (!('creatorId' in value) || value['creatorId'] === undefined) return false;
    if (!('creator' in value) || value['creator'] === undefined) return false;
    if (!('createTime' in value) || value['createTime'] === undefined) return false;
    if (!('updateTime' in value) || value['updateTime'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function CopilotSetResFromJSON(json: any): CopilotSetRes {
    return CopilotSetResFromJSONTyped(json, false);
}

export function CopilotSetResFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopilotSetRes {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'],
        'copilotIds': json['copilot_ids'],
        'creatorId': json['creator_id'],
        'creator': json['creator'],
        'createTime': (new Date(json['create_time'])),
        'updateTime': (new Date(json['update_time'])),
        'status': CopilotSetStatusFromJSON(json['status']),
    };
}

export function CopilotSetResToJSON(json: any): CopilotSetRes {
    return CopilotSetResToJSONTyped(json, false);
}

export function CopilotSetResToJSONTyped(value?: CopilotSetRes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'description': value['description'],
        'copilot_ids': value['copilotIds'],
        'creator_id': value['creatorId'],
        'creator': value['creator'],
        'create_time': ((value['createTime']).toISOString()),
        'update_time': ((value['updateTime']).toISOString()),
        'status': CopilotSetStatusToJSON(value['status']),
    };
}

