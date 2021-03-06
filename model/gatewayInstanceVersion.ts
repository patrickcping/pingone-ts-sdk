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

/**
* An object containing the version of the gateway running for the instance.
*/
export class GatewayInstanceVersion {
    /**
    * A string that specifies the version number of the gateway running for the instance. This is a required property.
    */
    'versionNumber'?: string;
    /**
    * An enumeration that specifies one of the following values: AT_LATEST: The gateway instance\'s version is at or after the supported version marked latest. UPGRADE_AVAILABLE: The gateway instance\'s version is at the supported version that is marked recommended but there is a later supported version marked recommended. UPGRADE_RECOMMENDED: The gateway instance\'s version is at a known version but the version is not marked as recommended or latest. The version has greater than 30 days support. UPGRADE_REQUIRED: The gateway instance\'s version is at a known version but the version is not marked as recommended or latest. The version has support ending within the next month. NOT_SUPPORTED: The gateway instance\'s version is not known or supported.
    */
    'updateStatus'?: GatewayInstanceVersion.UpdateStatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "versionNumber",
            "baseName": "versionNumber",
            "type": "string"
        },
        {
            "name": "updateStatus",
            "baseName": "updateStatus",
            "type": "GatewayInstanceVersion.UpdateStatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return GatewayInstanceVersion.attributeTypeMap;
    }
}

export namespace GatewayInstanceVersion {
    export enum UpdateStatusEnum {
        AtLatest = <any> 'AT_LATEST',
        UpgradeAvailable = <any> 'UPGRADE_AVAILABLE',
        UpgradeRecommended = <any> 'UPGRADE_RECOMMENDED',
        UpgradeRequired = <any> 'UPGRADE_REQUIRED',
        NotSupported = <any> 'NOT_SUPPORTED'
    }
}
