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

export class ApplicationOIDCAllOfMobileIntegrityDetectionCacheDuration {
    /**
    * An integer that specifies the number of minutes or hours that specify the duration between successful integrity detection calls. Every attestation request entails a certain time tradeoff. You can choose to cache successful integrity detection calls for a predefined duration, between a minimum of 1 minute and a maximum of 48 hours. If mobile.integrityDetection.mode is ENABLED, the cache duration must be set.
    */
    'amount'?: number;
    /**
    * A string that specifies the time units of the mobile.integrityDetection.cacheDuration.amount :MINUTES, HOURS
    */
    'units'?: ApplicationOIDCAllOfMobileIntegrityDetectionCacheDuration.UnitsEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "units",
            "baseName": "units",
            "type": "ApplicationOIDCAllOfMobileIntegrityDetectionCacheDuration.UnitsEnum"
        }    ];

    static getAttributeTypeMap() {
        return ApplicationOIDCAllOfMobileIntegrityDetectionCacheDuration.attributeTypeMap;
    }
}

export namespace ApplicationOIDCAllOfMobileIntegrityDetectionCacheDuration {
    export enum UnitsEnum {
        Minutes = <any> 'MINUTES',
        Hours = <any> 'HOURS'
    }
}
