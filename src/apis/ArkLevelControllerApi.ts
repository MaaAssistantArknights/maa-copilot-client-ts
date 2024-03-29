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


import * as runtime from '../runtime';
import type {
  MaaResultListArkLevelInfo,
} from '../models/index';
import {
    MaaResultListArkLevelInfoFromJSON,
    MaaResultListArkLevelInfoToJSON,
} from '../models/index';

/**
 * 
 */
export class ArkLevelControllerApi extends runtime.BaseAPI {

    /**
     * 获取关卡数据
     */
    async getLevelsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MaaResultListArkLevelInfo>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/arknights/level`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MaaResultListArkLevelInfoFromJSON(jsonValue));
    }

    /**
     * 获取关卡数据
     */
    async getLevels(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MaaResultListArkLevelInfo> {
        const response = await this.getLevelsRaw(initOverrides);
        return await response.value();
    }

}
