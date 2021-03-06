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
import { GatewayLDAPAllOfNewUserLookup } from './gatewayLDAPAllOfNewUserLookup';

export class GatewayLDAPAllOfUserTypes {
    /**
    * (Optional) Defaults to false if this property isn\'t specified in the request. If false, the user cannot change the password in the remote LDAP directory. In this case, operations for forgotten passwords or resetting of passwords are not available to a user referencing this gateway.
    */
    'allowPasswordChanges'?: boolean;
    /**
    * (Optional) The UUID of the user type. This correlates to the password.external.gateway.userType.id User property.
    */
    'id'?: string;
    'newUserLookup': GatewayLDAPAllOfNewUserLookup;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allowPasswordChanges",
            "baseName": "allowPasswordChanges",
            "type": "boolean"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "newUserLookup",
            "baseName": "newUserLookup",
            "type": "GatewayLDAPAllOfNewUserLookup"
        }    ];

    static getAttributeTypeMap() {
        return GatewayLDAPAllOfUserTypes.attributeTypeMap;
    }
}

