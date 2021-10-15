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
* An array that lists the LDAP gateway versions associated with this gateway resource. This information is returned on a GET {{apiPath}}/environments/{{envID}}/gateways request, and it is used to trigger alerts if the gateway tries to connect with an unsupported version (or a version that is not the latest or recommended version).
*/
export class GatewaySupportedVersions {
    /**
    * A string that specifies the gateway version number.
    */
    'version'?: string;
    /**
    * A string that identifies the gateway image path.
    */
    'image'?: string;
    /**
    * A boolean that specifies whether this is the recommended LDAP gateway version.
    */
    'recommended'?: boolean;
    /**
    * A boolean that specifies whether this is the latest LDAP gateway version.
    */
    'latest'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "version",
            "baseName": "version",
            "type": "string"
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string"
        },
        {
            "name": "recommended",
            "baseName": "recommended",
            "type": "boolean"
        },
        {
            "name": "latest",
            "baseName": "latest",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return GatewaySupportedVersions.attributeTypeMap;
    }
}

