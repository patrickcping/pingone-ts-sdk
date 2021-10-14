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

export class ApplicationAccessControlGroup {
    /**
    * A string that specifies the group type required to access the application. Options are ANY_GROUP (the actor must belong to at least one group listed in the accessControl.group.groups property) and ALL_GROUPS (the actor must belong to all groups listed in the accessControl.group.groups property).
    */
    'type': string;
    /**
    * A set that specifies the group IDs for the groups the actor must belong to for access to the application.
    */
    'groups': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "groups",
            "baseName": "groups",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return ApplicationAccessControlGroup.attributeTypeMap;
    }
}

