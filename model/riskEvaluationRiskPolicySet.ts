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

export class RiskEvaluationRiskPolicySet {
    /**
    * A string that specifies the risk policy set resource\'s unique identifier. If the risk policy set ID and name are both specified, the policy set specified by the riskPolicySet.id is used. If the risk policy set ID and name are not specified, the environment\'s default risk policy set is used.
    */
    'id'?: string;
    /**
    * A string that specifies the risk policy set name associated with this risk evaluation resource. If the risk policy set ID and name are both specified, the policy set specified by the riskPolicySet.id is used. If the risk policy set name and ID are not specified, the environment\'s default risk policy set is used.
    */
    'name'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RiskEvaluationRiskPolicySet.attributeTypeMap;
    }
}

