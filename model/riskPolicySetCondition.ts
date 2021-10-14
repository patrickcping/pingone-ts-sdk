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
import { RiskPolicySetConditionAggregatedWeights } from './riskPolicySetConditionAggregatedWeights';
import { RiskPolicySetConditionBetween } from './riskPolicySetConditionBetween';

/**
* The condition logic that determines when a policy is evaluated to true and when it is evaluated to false.
*/
export class RiskPolicySetCondition {
    'value'?: string;
    'equals'?: string | boolean;
    'aggregatedWeights'?: Array<RiskPolicySetConditionAggregatedWeights>;
    'between'?: RiskPolicySetConditionBetween;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "equals",
            "baseName": "equals",
            "type": "string | boolean"
        },
        {
            "name": "aggregatedWeights",
            "baseName": "aggregatedWeights",
            "type": "Array<RiskPolicySetConditionAggregatedWeights>"
        },
        {
            "name": "between",
            "baseName": "between",
            "type": "RiskPolicySetConditionBetween"
        }    ];

    static getAttributeTypeMap() {
        return RiskPolicySetCondition.attributeTypeMap;
    }
}

