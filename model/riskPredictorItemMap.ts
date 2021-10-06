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
import { RiskPredictorItemMapBetween } from './riskPredictorItemMapBetween';

export class RiskPredictorItemMap {
    'contains'?: string;
    /**
    * List of CIDRs to include
    */
    'ipRange'?: Array<string>;
    'between'?: RiskPredictorItemMapBetween;
    /**
    * An array that specifies the list of entities that represent the risk conditions.
    */
    'list'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "contains",
            "baseName": "contains",
            "type": "string"
        },
        {
            "name": "ipRange",
            "baseName": "ipRange",
            "type": "Array<string>"
        },
        {
            "name": "between",
            "baseName": "between",
            "type": "RiskPredictorItemMapBetween"
        },
        {
            "name": "list",
            "baseName": "list",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return RiskPredictorItemMap.attributeTypeMap;
    }
}

