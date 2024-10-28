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
     * @type {CopilotSetStatus}
     * @memberof CopilotSetListRes
     */
    status: CopilotSetStatus;
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
    /**
     * 
     * @type {Array<number>}
     * @memberof CopilotSetListRes
     */
    copilotIds: Array<number>;
}



/**
 * Check if a given object implements the CopilotSetListRes interface.
 */
export function instanceOfCopilotSetListRes(value: object): value is CopilotSetListRes {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('creatorId' in value) || value['creatorId'] === undefined) return false;
    if (!('creator' in value) || value['creator'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('createTime' in value) || value['createTime'] === undefined) return false;
    if (!('updateTime' in value) || value['updateTime'] === undefined) return false;
    if (!('copilotIds' in value) || value['copilotIds'] === undefined) return false;
    return true;
}

export function CopilotSetListResFromJSON(json: any): CopilotSetListRes {
    return CopilotSetListResFromJSONTyped(json, false);
}

export function CopilotSetListResFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopilotSetListRes {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'],
        'creatorId': json['creator_id'],
        'creator': json['creator'],
        'status': CopilotSetStatusFromJSON(json['status']),
        'createTime': (new Date(json['create_time'])),
        'updateTime': (new Date(json['update_time'])),
        'copilotIds': json['copilot_ids'],
    };
}

  export function CopilotSetListResToJSON(json: any): CopilotSetListRes {
      return CopilotSetListResToJSONTyped(json, false);
  }

  export function CopilotSetListResToJSONTyped(value?: CopilotSetListRes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'description': value['description'],
        'creator_id': value['creatorId'],
        'creator': value['creator'],
        'status': CopilotSetStatusToJSON(value['status']),
        'create_time': ((value['createTime']).toISOString()),
        'update_time': ((value['updateTime']).toISOString()),
        'copilot_ids': value['copilotIds'],
    };
}

