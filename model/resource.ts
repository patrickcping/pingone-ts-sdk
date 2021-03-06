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
import { ObjectEnvironment } from './objectEnvironment';
import { ResourceResource } from './resourceResource';

export class Resource {
    /**
    * An integer that specifies the number of seconds that the access token is valid. If a value is not specified, the default is 3600. The minimum value is 300 seconds (5 minutes); the maximum value is 2592000 seconds (30 days).
    */
    'accessTokenValiditySeconds'?: number;
    /**
    * A string that specifies a URL without a fragment or \"@ObjectName\" and must not contain \"pingone\" or \"pingidentity\" (for example, https://api.myresource.com). If a URL is not specified, the resource name is used.
    */
    'audience'?: string;
    /**
    * The time the resource was created.
    */
    'createdAt'?: string;
    /**
    * A string that specifies the description of the resource.
    */
    'description'?: string;
    'environment'?: ObjectEnvironment;
    'resource'?: ResourceResource;
    /**
    * A string that specifies the resource’s unique identifier.
    */
    'id'?: string;
    /**
    * A string that specifies the resource name, which must be provided and must be unique within an environment.
    */
    'name': string;
    /**
    * A string that specifies the type of resource. Options are OPENID_CONNECT, PING_ONE_API, and CUSTOM. Only the CUSTOM resource type can be created. OPENID_CONNECT specifies the built-in platform resource for OpenID Connect. PING_ONE_API specifies the built-in platform resource for PingOne.
    */
    'type'?: Resource.TypeEnum;
    /**
    * The time the resource was last updated.
    */
    'updatedAt'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accessTokenValiditySeconds",
            "baseName": "accessTokenValiditySeconds",
            "type": "number"
        },
        {
            "name": "audience",
            "baseName": "audience",
            "type": "string"
        },
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
            "name": "environment",
            "baseName": "environment",
            "type": "ObjectEnvironment"
        },
        {
            "name": "resource",
            "baseName": "resource",
            "type": "ResourceResource"
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
            "name": "type",
            "baseName": "type",
            "type": "Resource.TypeEnum"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Resource.attributeTypeMap;
    }
}

export namespace Resource {
    export enum TypeEnum {
        OpenidConnect = <any> 'OPENID_CONNECT',
        PingOneApi = <any> 'PING_ONE_API',
        Custom = <any> 'CUSTOM'
    }
}
