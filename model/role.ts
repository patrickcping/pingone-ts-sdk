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
import { RolePermissions } from './rolePermissions';

export class Role {
    /**
    * A string that specifies the scope to which the role applies.
    */
    'applicableTo'?: Array<string>;
    /**
    * A string that specifies the description of the role.
    */
    'description'?: string;
    /**
    * A string that specifies the ID of the role.
    */
    'id'?: string;
    /**
    * The name of the role
    */
    'name'?: string;
    /**
    * A string that specifies the set of permissions assigned to the role.
    */
    'permissions'?: Array<RolePermissions>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "applicableTo",
            "baseName": "applicableTo",
            "type": "Array<string>"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "permissions",
            "baseName": "permissions",
            "type": "Array<RolePermissions>"
        }    ];

    static getAttributeTypeMap() {
        return Role.attributeTypeMap;
    }
}

