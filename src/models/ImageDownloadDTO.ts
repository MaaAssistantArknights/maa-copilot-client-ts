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
 * @interface ImageDownloadDTO
 */
export interface ImageDownloadDTO {
    /**
     * 
     * @type {string}
     * @memberof ImageDownloadDTO
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof ImageDownloadDTO
     */
    classification?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ImageDownloadDTO
     */
    version?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ImageDownloadDTO
     */
    label?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ImageDownloadDTO
     */
    _delete: boolean;
}

/**
 * Check if a given object implements the ImageDownloadDTO interface.
 */
export function instanceOfImageDownloadDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "_delete" in value;

    return isInstance;
}

export function ImageDownloadDTOFromJSON(json: any): ImageDownloadDTO {
    return ImageDownloadDTOFromJSONTyped(json, false);
}

export function ImageDownloadDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageDownloadDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'classification': !exists(json, 'classification') ? undefined : json['classification'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        '_delete': json['delete'],
    };
}

export function ImageDownloadDTOToJSON(value?: ImageDownloadDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'classification': value.classification,
        'version': value.version,
        'label': value.label,
        'delete': value._delete,
    };
}

