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
  CopilotCUDRequest,
  CopilotRatingReq,
  MaaResultCopilotInfo,
  MaaResultCopilotPageInfo,
  MaaResultLong,
  MaaResultString,
  MaaResultUnit,
} from '../models/index';
import {
    CopilotCUDRequestFromJSON,
    CopilotCUDRequestToJSON,
    CopilotRatingReqFromJSON,
    CopilotRatingReqToJSON,
    MaaResultCopilotInfoFromJSON,
    MaaResultCopilotInfoToJSON,
    MaaResultCopilotPageInfoFromJSON,
    MaaResultCopilotPageInfoToJSON,
    MaaResultLongFromJSON,
    MaaResultLongToJSON,
    MaaResultStringFromJSON,
    MaaResultStringToJSON,
    MaaResultUnitFromJSON,
    MaaResultUnitToJSON,
} from '../models/index';

export interface BanCommentsRequest {
    copilotId: number;
    status: BanCommentsStatusEnum;
}

export interface DeleteCopilotRequest {
    copilotCUDRequest: CopilotCUDRequest;
}

export interface GetCopilotByIdRequest {
    id: number;
}

export interface ModifyStatusRequest {
    id: number;
    status: boolean;
}

export interface QueriesCopilotRequest {
    page?: number;
    limit?: number;
    levelKeyword?: string;
    operator?: string;
    content?: string;
    document?: string;
    uploaderId?: string;
    desc?: boolean;
    orderBy?: string;
    language?: string;
    copilotIds?: Array<number>;
}

export interface RatesCopilotOperationRequest {
    copilotRatingReq: CopilotRatingReq;
}

export interface UpdateCopilotRequest {
    copilotCUDRequest: CopilotCUDRequest;
}

export interface UploadCopilotRequest {
    copilotCUDRequest: CopilotCUDRequest;
}

/**
 * 
 */
export class CopilotControllerApi extends runtime.BaseAPI {

    /**
     * 禁用评论区/开启评论区
     */
    async banCommentsRaw(requestParameters: BanCommentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MaaResultString>> {
        if (requestParameters['copilotId'] == null) {
            throw new runtime.RequiredError(
                'copilotId',
                'Required parameter "copilotId" was null or undefined when calling banComments().'
            );
        }

        if (requestParameters['status'] == null) {
            throw new runtime.RequiredError(
                'status',
                'Required parameter "status" was null or undefined when calling banComments().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['copilotId'] != null) {
            queryParameters['copilotId'] = requestParameters['copilotId'];
        }

        if (requestParameters['status'] != null) {
            queryParameters['status'] = requestParameters['status'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Jwt", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/copilot/ban`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MaaResultStringFromJSON(jsonValue));
    }

    /**
     * 禁用评论区/开启评论区
     */
    async banComments(requestParameters: BanCommentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MaaResultString> {
        const response = await this.banCommentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 删除作业
     */
    async deleteCopilotRaw(requestParameters: DeleteCopilotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MaaResultUnit>> {
        if (requestParameters['copilotCUDRequest'] == null) {
            throw new runtime.RequiredError(
                'copilotCUDRequest',
                'Required parameter "copilotCUDRequest" was null or undefined when calling deleteCopilot().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Jwt", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/copilot/delete`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CopilotCUDRequestToJSON(requestParameters['copilotCUDRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MaaResultUnitFromJSON(jsonValue));
    }

    /**
     * 删除作业
     */
    async deleteCopilot(requestParameters: DeleteCopilotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MaaResultUnit> {
        const response = await this.deleteCopilotRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 获取作业
     */
    async getCopilotByIdRaw(requestParameters: GetCopilotByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MaaResultCopilotInfo>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getCopilotById().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/copilot/get/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MaaResultCopilotInfoFromJSON(jsonValue));
    }

    /**
     * 获取作业
     */
    async getCopilotById(requestParameters: GetCopilotByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MaaResultCopilotInfo> {
        const response = await this.getCopilotByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 修改通知状态
     */
    async modifyStatusRaw(requestParameters: ModifyStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MaaResultString>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling modifyStatus().'
            );
        }

        if (requestParameters['status'] == null) {
            throw new runtime.RequiredError(
                'status',
                'Required parameter "status" was null or undefined when calling modifyStatus().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['id'] != null) {
            queryParameters['id'] = requestParameters['id'];
        }

        if (requestParameters['status'] != null) {
            queryParameters['status'] = requestParameters['status'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Jwt", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/copilot/status`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MaaResultStringFromJSON(jsonValue));
    }

    /**
     * 修改通知状态
     */
    async modifyStatus(requestParameters: ModifyStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MaaResultString> {
        const response = await this.modifyStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 分页查询作业，提供登录凭据时查询用户自己的作业
     */
    async queriesCopilotRaw(requestParameters: QueriesCopilotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MaaResultCopilotPageInfo>> {
        const queryParameters: any = {};

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['levelKeyword'] != null) {
            queryParameters['levelKeyword'] = requestParameters['levelKeyword'];
        }

        if (requestParameters['operator'] != null) {
            queryParameters['operator'] = requestParameters['operator'];
        }

        if (requestParameters['content'] != null) {
            queryParameters['content'] = requestParameters['content'];
        }

        if (requestParameters['document'] != null) {
            queryParameters['document'] = requestParameters['document'];
        }

        if (requestParameters['uploaderId'] != null) {
            queryParameters['uploaderId'] = requestParameters['uploaderId'];
        }

        if (requestParameters['desc'] != null) {
            queryParameters['desc'] = requestParameters['desc'];
        }

        if (requestParameters['orderBy'] != null) {
            queryParameters['orderBy'] = requestParameters['orderBy'];
        }

        if (requestParameters['language'] != null) {
            queryParameters['language'] = requestParameters['language'];
        }

        if (requestParameters['copilotIds'] != null) {
            queryParameters['copilotIds'] = requestParameters['copilotIds'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/copilot/query`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MaaResultCopilotPageInfoFromJSON(jsonValue));
    }

    /**
     * 分页查询作业，提供登录凭据时查询用户自己的作业
     */
    async queriesCopilot(requestParameters: QueriesCopilotRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MaaResultCopilotPageInfo> {
        const response = await this.queriesCopilotRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 为作业评分
     */
    async ratesCopilotOperationRaw(requestParameters: RatesCopilotOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MaaResultString>> {
        if (requestParameters['copilotRatingReq'] == null) {
            throw new runtime.RequiredError(
                'copilotRatingReq',
                'Required parameter "copilotRatingReq" was null or undefined when calling ratesCopilotOperation().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/copilot/rating`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CopilotRatingReqToJSON(requestParameters['copilotRatingReq']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MaaResultStringFromJSON(jsonValue));
    }

    /**
     * 为作业评分
     */
    async ratesCopilotOperation(requestParameters: RatesCopilotOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MaaResultString> {
        const response = await this.ratesCopilotOperationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 更新作业
     */
    async updateCopilotRaw(requestParameters: UpdateCopilotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MaaResultUnit>> {
        if (requestParameters['copilotCUDRequest'] == null) {
            throw new runtime.RequiredError(
                'copilotCUDRequest',
                'Required parameter "copilotCUDRequest" was null or undefined when calling updateCopilot().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Jwt", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/copilot/update`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CopilotCUDRequestToJSON(requestParameters['copilotCUDRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MaaResultUnitFromJSON(jsonValue));
    }

    /**
     * 更新作业
     */
    async updateCopilot(requestParameters: UpdateCopilotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MaaResultUnit> {
        const response = await this.updateCopilotRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 上传作业
     */
    async uploadCopilotRaw(requestParameters: UploadCopilotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MaaResultLong>> {
        if (requestParameters['copilotCUDRequest'] == null) {
            throw new runtime.RequiredError(
                'copilotCUDRequest',
                'Required parameter "copilotCUDRequest" was null or undefined when calling uploadCopilot().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Jwt", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/copilot/upload`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CopilotCUDRequestToJSON(requestParameters['copilotCUDRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MaaResultLongFromJSON(jsonValue));
    }

    /**
     * 上传作业
     */
    async uploadCopilot(requestParameters: UploadCopilotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MaaResultLong> {
        const response = await this.uploadCopilotRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const BanCommentsStatusEnum = {
    Enabled: 'ENABLED',
    Disabled: 'DISABLED'
} as const;
export type BanCommentsStatusEnum = typeof BanCommentsStatusEnum[keyof typeof BanCommentsStatusEnum];
