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
import { GatewayInstanceCredential } from './gatewayInstanceCredential';
import { GatewayInstanceGateway } from './gatewayInstanceGateway';
import { GatewayInstanceVersion } from './gatewayInstanceVersion';
import { ObjectEnvironment } from './objectEnvironment';

export class GatewayInstance {
    /**
    * A boolean that specifies whether or not the gateway instance has one or more connections. This is a required property.
    */
    'connected'?: boolean;
    /**
    * A string that specifies the instance ID of the gateway. The gateway instance ID is created by the gateway when it starts up.
    */
    'id'?: string;
    'environment'?: ObjectEnvironment;
    'gateway'?: GatewayInstanceGateway;
    'credential'?: GatewayInstanceCredential;
    /**
    * An array of strings that lists the messages that are maintained by the gateway instance.
    */
    'currentErrors'?: Array<string>;
    /**
    * An enumeration that specifies whether or not the gateway is in a healthy state. Options are HEALTHY, DEGRADED, UNHEALTHY. This is a required property.
    */
    'healthStatus'?: GatewayInstance.HealthStatusEnum;
    /**
    * A string that specifies the hostname of the container running in the customer’s infrastructure. This is a required property.
    */
    'hostname'?: string;
    /**
    * A timestamp that specifies when gateway was initialized (when the first connect to PingOne was made).
    */
    'initializedAt'?: string;
    /**
    * A timestamp that specifies the last reported timestamp, heartbeat, or other message.
    */
    'lastReportedAt'?: string;
    'version'?: GatewayInstanceVersion;
    /**
    * An integer that specifies the gateway instance\'s busy percentage. When this percentage is high, then more instances should be added.
    */
    'busyPercentage'?: number;
    /**
    * A number that specifies the recent throughput of the gateway instance.
    */
    'operationsPerSecond'?: number;
    /**
    * A number that specifies the processing time of the gateway instance in milliseconds.
    */
    'responseTimeMillis'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "connected",
            "baseName": "connected",
            "type": "boolean"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "environment",
            "baseName": "environment",
            "type": "ObjectEnvironment"
        },
        {
            "name": "gateway",
            "baseName": "gateway",
            "type": "GatewayInstanceGateway"
        },
        {
            "name": "credential",
            "baseName": "credential",
            "type": "GatewayInstanceCredential"
        },
        {
            "name": "currentErrors",
            "baseName": "currentErrors",
            "type": "Array<string>"
        },
        {
            "name": "healthStatus",
            "baseName": "healthStatus",
            "type": "GatewayInstance.HealthStatusEnum"
        },
        {
            "name": "hostname",
            "baseName": "hostname",
            "type": "string"
        },
        {
            "name": "initializedAt",
            "baseName": "initializedAt",
            "type": "string"
        },
        {
            "name": "lastReportedAt",
            "baseName": "lastReportedAt",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "GatewayInstanceVersion"
        },
        {
            "name": "busyPercentage",
            "baseName": "busyPercentage",
            "type": "number"
        },
        {
            "name": "operationsPerSecond",
            "baseName": "operationsPerSecond",
            "type": "number"
        },
        {
            "name": "responseTimeMillis",
            "baseName": "responseTimeMillis",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return GatewayInstance.attributeTypeMap;
    }
}

export namespace GatewayInstance {
    export enum HealthStatusEnum {
        Healthy = <any> 'HEALTHY',
        Degraded = <any> 'DEGRADED',
        Unhealthy = <any> 'UNHEALTHY'
    }
}
