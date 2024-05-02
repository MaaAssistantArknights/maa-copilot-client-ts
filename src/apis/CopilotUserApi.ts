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
  LoginDTO,
  MaaResultMaaLoginRsp,
  MaaResultMaaUserInfo,
  MaaResultUnit,
  PasswordResetDTO,
  PasswordResetVCodeDTO,
  PasswordUpdateDTO,
  RefreshReq,
  RegisterDTO,
  SendRegistrationTokenDTO,
  UserInfoUpdateDTO,
} from '../models/index';
import {
    LoginDTOFromJSON,
    LoginDTOToJSON,
    MaaResultMaaLoginRspFromJSON,
    MaaResultMaaLoginRspToJSON,
    MaaResultMaaUserInfoFromJSON,
    MaaResultMaaUserInfoToJSON,
    MaaResultUnitFromJSON,
    MaaResultUnitToJSON,
    PasswordResetDTOFromJSON,
    PasswordResetDTOToJSON,
    PasswordResetVCodeDTOFromJSON,
    PasswordResetVCodeDTOToJSON,
    PasswordUpdateDTOFromJSON,
    PasswordUpdateDTOToJSON,
    RefreshReqFromJSON,
    RefreshReqToJSON,
    RegisterDTOFromJSON,
    RegisterDTOToJSON,
    SendRegistrationTokenDTOFromJSON,
    SendRegistrationTokenDTOToJSON,
    UserInfoUpdateDTOFromJSON,
    UserInfoUpdateDTOToJSON,
} from '../models/index';

export interface GetUserInfoRequest {
    userId: string;
}

export interface LoginRequest {
    loginDTO: LoginDTO;
}

export interface PasswordResetRequest {
    passwordResetDTO: PasswordResetDTO;
}

export interface PasswordResetRequestRequest {
    passwordResetVCodeDTO: PasswordResetVCodeDTO;
}

export interface RefreshRequest {
    refreshReq: RefreshReq;
}

export interface RegisterRequest {
    registerDTO: RegisterDTO;
}

export interface SendRegistrationTokenRequest {
    sendRegistrationTokenDTO: SendRegistrationTokenDTO;
}

export interface UpdateInfoRequest {
    userInfoUpdateDTO: UserInfoUpdateDTO;
}

export interface UpdatePasswordRequest {
    passwordUpdateDTO: PasswordUpdateDTO;
}

/**
 * 
 */
export class CopilotUserApi extends runtime.BaseAPI {

    /**
     * 查询用户信息
     * 查询用户信息
     */
    async getUserInfoRaw(requestParameters: GetUserInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MaaResultMaaUserInfo>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling getUserInfo.');
        }

        const queryParameters: any = {};

        if (requestParameters.userId !== undefined) {
            queryParameters['userId'] = requestParameters.userId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/info`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MaaResultMaaUserInfoFromJSON(jsonValue));
    }

    /**
     * 查询用户信息
     * 查询用户信息
     */
    async getUserInfo(requestParameters: GetUserInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MaaResultMaaUserInfo> {
        const response = await this.getUserInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 用户登录
     * 用户登录
     */
    async loginRaw(requestParameters: LoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MaaResultMaaLoginRsp>> {
        if (requestParameters.loginDTO === null || requestParameters.loginDTO === undefined) {
            throw new runtime.RequiredError('loginDTO','Required parameter requestParameters.loginDTO was null or undefined when calling login.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user/login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LoginDTOToJSON(requestParameters.loginDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MaaResultMaaLoginRspFromJSON(jsonValue));
    }

    /**
     * 用户登录
     * 用户登录
     */
    async login(requestParameters: LoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MaaResultMaaLoginRsp> {
        const response = await this.loginRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 邮箱重设密码
     * 重置密码
     */
    async passwordResetRaw(requestParameters: PasswordResetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MaaResultUnit>> {
        if (requestParameters.passwordResetDTO === null || requestParameters.passwordResetDTO === undefined) {
            throw new runtime.RequiredError('passwordResetDTO','Required parameter requestParameters.passwordResetDTO was null or undefined when calling passwordReset.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user/password/reset`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PasswordResetDTOToJSON(requestParameters.passwordResetDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MaaResultUnitFromJSON(jsonValue));
    }

    /**
     * 邮箱重设密码
     * 重置密码
     */
    async passwordReset(requestParameters: PasswordResetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MaaResultUnit> {
        const response = await this.passwordResetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 验证码重置密码功能：  发送验证码用于重置
     * 发送用于重置密码的验证码
     */
    async passwordResetRequestRaw(requestParameters: PasswordResetRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MaaResultUnit>> {
        if (requestParameters.passwordResetVCodeDTO === null || requestParameters.passwordResetVCodeDTO === undefined) {
            throw new runtime.RequiredError('passwordResetVCodeDTO','Required parameter requestParameters.passwordResetVCodeDTO was null or undefined when calling passwordResetRequest.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user/password/reset_request`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PasswordResetVCodeDTOToJSON(requestParameters.passwordResetVCodeDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MaaResultUnitFromJSON(jsonValue));
    }

    /**
     * 验证码重置密码功能：  发送验证码用于重置
     * 发送用于重置密码的验证码
     */
    async passwordResetRequest(requestParameters: PasswordResetRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MaaResultUnit> {
        const response = await this.passwordResetRequestRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 刷新token
     * 刷新token
     */
    async refreshRaw(requestParameters: RefreshRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MaaResultMaaLoginRsp>> {
        if (requestParameters.refreshReq === null || requestParameters.refreshReq === undefined) {
            throw new runtime.RequiredError('refreshReq','Required parameter requestParameters.refreshReq was null or undefined when calling refresh.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user/refresh`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RefreshReqToJSON(requestParameters.refreshReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MaaResultMaaLoginRspFromJSON(jsonValue));
    }

    /**
     * 刷新token
     * 刷新token
     */
    async refresh(requestParameters: RefreshRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MaaResultMaaLoginRsp> {
        const response = await this.refreshRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 用户注册
     * 用户注册
     */
    async registerRaw(requestParameters: RegisterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MaaResultMaaUserInfo>> {
        if (requestParameters.registerDTO === null || requestParameters.registerDTO === undefined) {
            throw new runtime.RequiredError('registerDTO','Required parameter requestParameters.registerDTO was null or undefined when calling register.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user/register`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RegisterDTOToJSON(requestParameters.registerDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MaaResultMaaUserInfoFromJSON(jsonValue));
    }

    /**
     * 用户注册
     * 用户注册
     */
    async register(requestParameters: RegisterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MaaResultMaaUserInfo> {
        const response = await this.registerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 获得注册时的验证码
     * 注册时发送验证码
     */
    async sendRegistrationTokenRaw(requestParameters: SendRegistrationTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MaaResultUnit>> {
        if (requestParameters.sendRegistrationTokenDTO === null || requestParameters.sendRegistrationTokenDTO === undefined) {
            throw new runtime.RequiredError('sendRegistrationTokenDTO','Required parameter requestParameters.sendRegistrationTokenDTO was null or undefined when calling sendRegistrationToken.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user/sendRegistrationToken`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SendRegistrationTokenDTOToJSON(requestParameters.sendRegistrationTokenDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MaaResultUnitFromJSON(jsonValue));
    }

    /**
     * 获得注册时的验证码
     * 注册时发送验证码
     */
    async sendRegistrationToken(requestParameters: SendRegistrationTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MaaResultUnit> {
        const response = await this.sendRegistrationTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 更新用户详细信息
     * 更新用户详细信息
     */
    async updateInfoRaw(requestParameters: UpdateInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MaaResultUnit>> {
        if (requestParameters.userInfoUpdateDTO === null || requestParameters.userInfoUpdateDTO === undefined) {
            throw new runtime.RequiredError('userInfoUpdateDTO','Required parameter requestParameters.userInfoUpdateDTO was null or undefined when calling updateInfo.');
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
            path: `/user/update/info`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserInfoUpdateDTOToJSON(requestParameters.userInfoUpdateDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MaaResultUnitFromJSON(jsonValue));
    }

    /**
     * 更新用户详细信息
     * 更新用户详细信息
     */
    async updateInfo(requestParameters: UpdateInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MaaResultUnit> {
        const response = await this.updateInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 根据原密码
     * 修改当前用户密码
     */
    async updatePasswordRaw(requestParameters: UpdatePasswordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MaaResultUnit>> {
        if (requestParameters.passwordUpdateDTO === null || requestParameters.passwordUpdateDTO === undefined) {
            throw new runtime.RequiredError('passwordUpdateDTO','Required parameter requestParameters.passwordUpdateDTO was null or undefined when calling updatePassword.');
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
            path: `/user/update/password`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PasswordUpdateDTOToJSON(requestParameters.passwordUpdateDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MaaResultUnitFromJSON(jsonValue));
    }

    /**
     * 根据原密码
     * 修改当前用户密码
     */
    async updatePassword(requestParameters: UpdatePasswordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MaaResultUnit> {
        const response = await this.updatePasswordRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
