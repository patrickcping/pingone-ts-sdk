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

export class RiskEvaluationEventFlow {
    /**
    * A string that specifies the flow type for the event. The only option (and default) is AUTHENTICATION.
    */
    'type'?: RiskEvaluationEventFlow.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "RiskEvaluationEventFlow.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return RiskEvaluationEventFlow.attributeTypeMap;
    }
}

export namespace RiskEvaluationEventFlow {
    export enum TypeEnum {
        Authentication = <any> 'AUTHENTICATION'
    }
}
