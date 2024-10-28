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
 * @interface ArkLevelInfo
 */
export interface ArkLevelInfo {
    /**
     * 
     * @type {string}
     * @memberof ArkLevelInfo
     */
    levelId: string;
    /**
     * 
     * @type {string}
     * @memberof ArkLevelInfo
     */
    stageId: string;
    /**
     * 
     * @type {string}
     * @memberof ArkLevelInfo
     */
    catOne: string;
    /**
     * 
     * @type {string}
     * @memberof ArkLevelInfo
     */
    catTwo: string;
    /**
     * 
     * @type {string}
     * @memberof ArkLevelInfo
     */
    catThree: string;
    /**
     * 
     * @type {string}
     * @memberof ArkLevelInfo
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof ArkLevelInfo
     */
    width: number;
    /**
     * 
     * @type {number}
     * @memberof ArkLevelInfo
     */
    height: number;
}

/**
 * Check if a given object implements the ArkLevelInfo interface.
 */
export function instanceOfArkLevelInfo(value: object): value is ArkLevelInfo {
    if (!('levelId' in value) || value['levelId'] === undefined) return false;
    if (!('stageId' in value) || value['stageId'] === undefined) return false;
    if (!('catOne' in value) || value['catOne'] === undefined) return false;
    if (!('catTwo' in value) || value['catTwo'] === undefined) return false;
    if (!('catThree' in value) || value['catThree'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('width' in value) || value['width'] === undefined) return false;
    if (!('height' in value) || value['height'] === undefined) return false;
    return true;
}

export function ArkLevelInfoFromJSON(json: any): ArkLevelInfo {
    return ArkLevelInfoFromJSONTyped(json, false);
}

export function ArkLevelInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArkLevelInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'levelId': json['level_id'],
        'stageId': json['stage_id'],
        'catOne': json['cat_one'],
        'catTwo': json['cat_two'],
        'catThree': json['cat_three'],
        'name': json['name'],
        'width': json['width'],
        'height': json['height'],
    };
}

  export function ArkLevelInfoToJSON(json: any): ArkLevelInfo {
      return ArkLevelInfoToJSONTyped(json, false);
  }

  export function ArkLevelInfoToJSONTyped(value?: ArkLevelInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'level_id': value['levelId'],
        'stage_id': value['stageId'],
        'cat_one': value['catOne'],
        'cat_two': value['catTwo'],
        'cat_three': value['catThree'],
        'name': value['name'],
        'width': value['width'],
        'height': value['height'],
    };
}

