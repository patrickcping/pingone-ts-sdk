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
import { ApplicationAccessControlGroup } from './applicationAccessControlGroup';
import { ApplicationAccessControlRole } from './applicationAccessControlRole';

export class ApplicationAccessControl {
    'role'?: ApplicationAccessControlRole;
    'group'?: ApplicationAccessControlGroup;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "role",
            "baseName": "role",
            "type": "ApplicationAccessControlRole"
        },
        {
            "name": "group",
            "baseName": "group",
            "type": "ApplicationAccessControlGroup"
        }    ];

    static getAttributeTypeMap() {
        return ApplicationAccessControl.attributeTypeMap;
    }
}
