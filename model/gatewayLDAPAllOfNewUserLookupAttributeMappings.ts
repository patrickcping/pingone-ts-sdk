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

export class GatewayLDAPAllOfNewUserLookupAttributeMappings {
    /**
    * The PingOne username attribute. See Users properties for the complete list of PingOne user attributes.
    */
    'name': string;
    /**
    * A placeholder reference to the corresponding external LDAP attribute for name.
    */
    'value': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GatewayLDAPAllOfNewUserLookupAttributeMappings.attributeTypeMap;
    }
}

