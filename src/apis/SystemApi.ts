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
  MaaResult,
  MaaResultMaaSystemInfo,
} from '../models/index';
import {
    MaaResultFromJSON,
    MaaResultToJSON,
    MaaResultMaaSystemInfoFromJSON,
    MaaResultMaaSystemInfoToJSON,
} from '../models/index';

/**
 * 
 */
export class SystemApi extends runtime.BaseAPI {

    /**
     * Gets the current version of the server.
     * Gets the current version of the server.
     */
    async getSystemVersionRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MaaResultMaaSystemInfo>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/version`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MaaResultMaaSystemInfoFromJSON(jsonValue));
    }

    /**
     * Gets the current version of the server.
     * Gets the current version of the server.
     */
    async getSystemVersion(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MaaResultMaaSystemInfo> {
        const response = await this.getSystemVersionRaw(initOverrides);
        return await response.value();
    }

    /**
     * Tests if the server is ready.
     * Tests if the server is ready.
     */
    async testRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MaaResult>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MaaResultFromJSON(jsonValue));
    }

    /**
     * Tests if the server is ready.
     * Tests if the server is ready.
     */
    async test(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MaaResult> {
        const response = await this.testRaw(initOverrides);
        return await response.value();
    }

}
