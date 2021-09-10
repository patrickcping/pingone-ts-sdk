/**
 * PingOne Platform API - Management
 * A bare-bones collection for the PingOne API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { ApplicationMobileIntegrityDetectionCacheDuration } from './applicationMobileIntegrityDetectionCacheDuration';

export class ApplicationMobileIntegrityDetection {
    /**
    * A string that specifies whether device integrity detection takes place on mobile devices, for the application\'s enrollment and authentication events ENABLED, DISABLED
    */
    'mode'?: ApplicationMobileIntegrityDetection.ModeEnum;
    'cacheDuration'?: ApplicationMobileIntegrityDetectionCacheDuration;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "mode",
            "baseName": "mode",
            "type": "ApplicationMobileIntegrityDetection.ModeEnum"
        },
        {
            "name": "cacheDuration",
            "baseName": "cacheDuration",
            "type": "ApplicationMobileIntegrityDetectionCacheDuration"
        }    ];

    static getAttributeTypeMap() {
        return ApplicationMobileIntegrityDetection.attributeTypeMap;
    }
}

export namespace ApplicationMobileIntegrityDetection {
    export enum ModeEnum {
        Enabled = <any> 'ENABLED',
        Disabled = <any> 'DISABLED'
    }
}