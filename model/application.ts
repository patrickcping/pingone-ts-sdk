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
import { ApplicationAccessControl } from './applicationAccessControl';
import { ApplicationIcon } from './applicationIcon';
import { ObjectEnvironment } from './objectEnvironment';

export class Application {
    'accessControl'?: ApplicationAccessControl;
    /**
    * A boolean that specifies whether the permissions service should assign default roles to the application. This property is set only on the POST request. The property is ignored when included in a PUT request.
    */
    'assignActorRoles'?: boolean;
    /**
    * The time the resource was created.
    */
    'createdAt'?: string;
    /**
    * A string that specifies the description of the application.
    */
    'description'?: string;
    /**
    * A string that specifies the current enabled state of the application. Options are ENABLED or DISABLED.
    */
    'enabled': boolean;
    'environment'?: ObjectEnvironment;
    'icon'?: ApplicationIcon;
    /**
    * A string that specifies the application ID.
    */
    'id'?: string;
    /**
    * A string that specifies the custom login page URL for the application. If you set the loginPageUrl property for applications in an environment that sets a custom domain, the URL should include the top-level domain and at least one additional domain level. Warning To avoid issues with third-party cookies in some browsers, a custom domain must be used, giving your PingOne environment the same parent domain as your authentication application. For more information about custom domains, see Custom domains.
    */
    'loginPageUrl'?: string;
    /**
    * A string that specifies the name of the application. This is a required property.
    */
    'name': string;
    /**
    * A string that specifies the protocol for the Application. Options are OPENID_CONNECT and SAML.
    */
    'protocol': Application.ProtocolEnum;
    /**
    * An array that specifies the list of labels associated with the application. Options are PING_FED_CONNECTION_INTEGRATION.
    */
    'tags'?: Array<Application.TagsEnum>;
    /**
    * A string that specifies the type associated with the application. This is a required property. Options are WEB_APP, NATIVE_APP, SINGLE_PAGE_APP, and WORKER.
    */
    'type': Application.TypeEnum;
    /**
    * The time the resource was last updated.
    */
    'updatedAt'?: string;
    /**
    * A boolean that specifies whether the request query parameter JWT is allowed to be unsigned. If false or null (default), an unsigned request object is not allowed.
    */
    'supportUnsignedRequestObject'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accessControl",
            "baseName": "accessControl",
            "type": "ApplicationAccessControl"
        },
        {
            "name": "assignActorRoles",
            "baseName": "assignActorRoles",
            "type": "boolean"
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
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "environment",
            "baseName": "environment",
            "type": "ObjectEnvironment"
        },
        {
            "name": "icon",
            "baseName": "icon",
            "type": "ApplicationIcon"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "loginPageUrl",
            "baseName": "loginPageUrl",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "protocol",
            "baseName": "protocol",
            "type": "Application.ProtocolEnum"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<Application.TagsEnum>"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "Application.TypeEnum"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "string"
        },
        {
            "name": "supportUnsignedRequestObject",
            "baseName": "supportUnsignedRequestObject",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return Application.attributeTypeMap;
    }
}

export namespace Application {
    export enum ProtocolEnum {
        OpenidConnect = <any> 'OPENID_CONNECT',
        Saml = <any> 'SAML'
    }
    export enum TagsEnum {
        PingFedConnectionIntegration = <any> 'PING_FED_CONNECTION_INTEGRATION'
    }
    export enum TypeEnum {
        WebApp = <any> 'WEB_APP',
        NativeApp = <any> 'NATIVE_APP',
        SinglePageApp = <any> 'SINGLE_PAGE_APP',
        Worker = <any> 'WORKER',
        Service = <any> 'SERVICE',
        CustomApp = <any> 'CUSTOM_APP'
    }
}
