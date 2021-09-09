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

export class Population {
    /**
    * The time the resource was created.
    */
    'createdAt'?: string;
    /**
    * A string that specifies the description of the population.
    */
    'description'?: string;
    /**
    * A string that specifies the resource’s unique identifier.
    */
    'id'?: string;
    /**
    * A string that specifies the population name, which must be provided and must be unique within an environment.
    */
    'name'?: string;
    /**
    * The time the resource was last updated.
    */
    'updatedAt'?: string;
    /**
    * The number of users that belong to the population
    */
    'userCount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "string"
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
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "string"
        },
        {
            "name": "userCount",
            "baseName": "userCount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Population.attributeTypeMap;
    }
}

