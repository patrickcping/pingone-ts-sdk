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
import { Environment } from './environment';
import { Population } from './population';

export class EntityArrayEmbedded {
    'environments'?: Array<Environment>;
    'populations'?: Array<Population>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "environments",
            "baseName": "environments",
            "type": "Array<Environment>"
        },
        {
            "name": "populations",
            "baseName": "populations",
            "type": "Array<Population>"
        }    ];

    static getAttributeTypeMap() {
        return EntityArrayEmbedded.attributeTypeMap;
    }
}

