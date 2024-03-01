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
  ImageDownloadDTO,
  MaaResultString,
  MaaResultUnit,
  MaaResultUploadAbility,
  UploadAbility,
} from '../models/index';
import {
    ImageDownloadDTOFromJSON,
    ImageDownloadDTOToJSON,
    MaaResultStringFromJSON,
    MaaResultStringToJSON,
    MaaResultUnitFromJSON,
    MaaResultUnitToJSON,
    MaaResultUploadAbilityFromJSON,
    MaaResultUploadAbilityToJSON,
    UploadAbilityFromJSON,
    UploadAbilityToJSON,
} from '../models/index';

export interface DisableRequest {
    body: boolean;
}

export interface DownloadFileRequest {
    imageDownloadDTO: ImageDownloadDTO;
}

export interface DownloadSpecifiedDateFileRequest {
    beLocated: string;
    _delete: boolean;
    date?: string;
}

export interface EnableRequest {
    body: boolean;
}

export interface SetUploadAbilityRequest {
    uploadAbility: UploadAbility;
}

export interface UploadFileRequest {
    file: Blob;
    type: string;
    version: string;
    classification?: string;
    label?: string;
}

/**
 * 
 */
export class FileControllerApi extends runtime.BaseAPI {

    /**
     * 关闭uploadfile接口
     */
    async disableRaw(requestParameters: DisableRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MaaResultString>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling disable.');
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
            path: `/file/disable`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MaaResultStringFromJSON(jsonValue));
    }

    /**
     * 关闭uploadfile接口
     */
    async disable(requestParameters: DisableRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MaaResultString> {
        const response = await this.disableRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 下载文件
     */
    async downloadFileRaw(requestParameters: DownloadFileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blob>> {
        if (requestParameters.imageDownloadDTO === null || requestParameters.imageDownloadDTO === undefined) {
            throw new runtime.RequiredError('imageDownloadDTO','Required parameter requestParameters.imageDownloadDTO was null or undefined when calling downloadFile.');
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
            path: `/file/download`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ImageDownloadDTOToJSON(requestParameters.imageDownloadDTO),
        }, initOverrides);

        return new runtime.BlobApiResponse(response);
    }

    /**
     * 下载文件
     */
    async downloadFile(requestParameters: DownloadFileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blob> {
        const response = await this.downloadFileRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 下载文件
     */
    async downloadSpecifiedDateFileRaw(requestParameters: DownloadSpecifiedDateFileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blob>> {
        if (requestParameters.beLocated === null || requestParameters.beLocated === undefined) {
            throw new runtime.RequiredError('beLocated','Required parameter requestParameters.beLocated was null or undefined when calling downloadSpecifiedDateFile.');
        }

        if (requestParameters._delete === null || requestParameters._delete === undefined) {
            throw new runtime.RequiredError('_delete','Required parameter requestParameters._delete was null or undefined when calling downloadSpecifiedDateFile.');
        }

        const queryParameters: any = {};

        if (requestParameters.date !== undefined) {
            queryParameters['date'] = requestParameters.date;
        }

        if (requestParameters.beLocated !== undefined) {
            queryParameters['beLocated'] = requestParameters.beLocated;
        }

        if (requestParameters._delete !== undefined) {
            queryParameters['delete'] = requestParameters._delete;
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
            path: `/file/download`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.BlobApiResponse(response);
    }

    /**
     * 下载文件
     */
    async downloadSpecifiedDateFile(requestParameters: DownloadSpecifiedDateFileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blob> {
        const response = await this.downloadSpecifiedDateFileRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 开启uploadfile接口
     */
    async enableRaw(requestParameters: EnableRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MaaResultString>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling enable.');
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
            path: `/file/enable`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MaaResultStringFromJSON(jsonValue));
    }

    /**
     * 开启uploadfile接口
     */
    async enable(requestParameters: EnableRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MaaResultString> {
        const response = await this.enableRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 获取上传文件功能状态
     */
    async getUploadAbilityRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MaaResultUploadAbility>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Jwt", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/file/upload_ability`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MaaResultUploadAbilityFromJSON(jsonValue));
    }

    /**
     * 获取上传文件功能状态
     */
    async getUploadAbility(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MaaResultUploadAbility> {
        const response = await this.getUploadAbilityRaw(initOverrides);
        return await response.value();
    }

    /**
     * 设置上传文件功能状态
     */
    async setUploadAbilityRaw(requestParameters: SetUploadAbilityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MaaResultUnit>> {
        if (requestParameters.uploadAbility === null || requestParameters.uploadAbility === undefined) {
            throw new runtime.RequiredError('uploadAbility','Required parameter requestParameters.uploadAbility was null or undefined when calling setUploadAbility.');
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
            path: `/file/upload_ability`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UploadAbilityToJSON(requestParameters.uploadAbility),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MaaResultUnitFromJSON(jsonValue));
    }

    /**
     * 设置上传文件功能状态
     */
    async setUploadAbility(requestParameters: SetUploadAbilityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MaaResultUnit> {
        const response = await this.setUploadAbilityRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 支持匿名
     * 支持匿名
     */
    async uploadFileRaw(requestParameters: UploadFileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MaaResultString>> {
        if (requestParameters.file === null || requestParameters.file === undefined) {
            throw new runtime.RequiredError('file','Required parameter requestParameters.file was null or undefined when calling uploadFile.');
        }

        if (requestParameters.type === null || requestParameters.type === undefined) {
            throw new runtime.RequiredError('type','Required parameter requestParameters.type was null or undefined when calling uploadFile.');
        }

        if (requestParameters.version === null || requestParameters.version === undefined) {
            throw new runtime.RequiredError('version','Required parameter requestParameters.version was null or undefined when calling uploadFile.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.file !== undefined) {
            formParams.append('file', requestParameters.file as any);
        }

        if (requestParameters.type !== undefined) {
            formParams.append('type', requestParameters.type as any);
        }

        if (requestParameters.version !== undefined) {
            formParams.append('version', requestParameters.version as any);
        }

        if (requestParameters.classification !== undefined) {
            formParams.append('classification', requestParameters.classification as any);
        }

        if (requestParameters.label !== undefined) {
            formParams.append('label', requestParameters.label as any);
        }

        const response = await this.request({
            path: `/file/upload`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MaaResultStringFromJSON(jsonValue));
    }

    /**
     * 支持匿名
     * 支持匿名
     */
    async uploadFile(requestParameters: UploadFileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MaaResultString> {
        const response = await this.uploadFileRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
