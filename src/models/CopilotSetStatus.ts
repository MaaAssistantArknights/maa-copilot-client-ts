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


/**
 * 
 * @export
 */
export const CopilotSetStatus = {
    Private: 'PRIVATE',
    Public: 'PUBLIC'
} as const;
export type CopilotSetStatus = typeof CopilotSetStatus[keyof typeof CopilotSetStatus];


export function CopilotSetStatusFromJSON(json: any): CopilotSetStatus {
    return CopilotSetStatusFromJSONTyped(json, false);
}

export function CopilotSetStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopilotSetStatus {
    return json as CopilotSetStatus;
}

export function CopilotSetStatusToJSON(value?: CopilotSetStatus | null): any {
    return value as any;
}
