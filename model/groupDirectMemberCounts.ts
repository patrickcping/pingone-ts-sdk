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
* An object containing a users (int) property. This property lists the number of users explicitly added to the group with POST /environments/{envID}/users/{userID}/memberOfGroups. Since these members were explicitly added to the group, they can be removed from the group with DELETE /environments/{envID}/users/{userID}/memberOfGroups/{groupID}.
*/
export class GroupDirectMemberCounts {
    /**
    * Number of users with direct membership
    */
    'users'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "users",
            "baseName": "users",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return GroupDirectMemberCounts.attributeTypeMap;
    }
}

