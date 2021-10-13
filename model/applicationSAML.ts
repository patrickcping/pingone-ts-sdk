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
import { Application } from './application';
import { ApplicationAccessControl } from './applicationAccessControl';
import { ApplicationIcon } from './applicationIcon';
import { ApplicationSAMLAllOf } from './applicationSAMLAllOf';
import { ApplicationSAMLAllOfIdpSigningtype } from './applicationSAMLAllOfIdpSigningtype';
import { ApplicationSAMLAllOfSpVerification } from './applicationSAMLAllOfSpVerification';
import { ObjectEnvironment } from './objectEnvironment';

export class ApplicationSAML {
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
    'enabled'?: boolean;
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
    'name'?: string;
    /**
    * A string that specifies the protocol for the Application. Options are OPENID_CONNECT and SAML.
    */
    'protocol'?: ApplicationSAML.ProtocolEnum;
    /**
    * An array that specifies the list of labels associated with the application. Options are PING_FED_CONNECTION_INTEGRATION.
    */
    'tags'?: Array<ApplicationSAML.TagsEnum>;
    /**
    * A string that specifies the type associated with the application. This is a required property. Options are WEB_APP, NATIVE_APP, SINGLE_PAGE_APP, and WORKER.
    */
    'type'?: ApplicationSAML.TypeEnum;
    /**
    * The time the resource was last updated.
    */
    'updatedAt'?: string;
    /**
    * A boolean that specifies whether the request query parameter JWT is allowed to be unsigned. If false or null (default), an unsigned request object is not allowed.
    */
    'supportUnsignedRequestObject'?: boolean;
    /**
    * A string that specifies the Assertion Consumer Service URLs. The first URL in the list is used as default (there must be at least one URL). This is a required property.
    */
    'acsUrls'?: Array<string>;
    /**
    * An integer that specifies the assertion validity duration in seconds. This is a required property.
    */
    'assertionDuration'?: number;
    /**
    * A boolean that specifies whether the SAML assertion itself should be signed. The default value is true.
    */
    'assertionSigned'?: boolean;
    'idpSigningtype'?: ApplicationSAMLAllOfIdpSigningtype;
    /**
    * A string that specifies the format of the Subject NameID attibute in the SAML assertion
    */
    'nameIdFormat'?: string;
    /**
    * A boolean that specifies whether the SAML assertion response itself should be signed. The default value is False.
    */
    'responseSigned'?: boolean;
    /**
    * A string that specifies the binding protocol to be used for the logout response. Options are HTTP_REDIRECT or HTTP_POST. The default is HTTP_POST; existing configurations with no data default to HTTP_POST. This is an optional property.
    */
    'sloBinding'?: ApplicationSAML.SloBindingEnum;
    /**
    * A string that specifies the logout endpoint URL. This is an optional property. However, if a sloEndpoint logout endpoint URL is not defined, logout actions result in an error.
    */
    'sloEndpoint'?: string;
    /**
    * A string that specifies the endpoint URL to submit the logout response. If a value is not provided, the sloEndpoint property value is used to submit SLO response.
    */
    'sloResponseEndpoint'?: string;
    /**
    * A string that specifies the service provider entity ID used to lookup the application. This is a required property and is unique within the environment.
    */
    'spEntityId'?: string;
    'spVerification'?: ApplicationSAMLAllOfSpVerification;

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
            "type": "ApplicationSAML.ProtocolEnum"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<ApplicationSAML.TagsEnum>"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ApplicationSAML.TypeEnum"
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
        },
        {
            "name": "acsUrls",
            "baseName": "acsUrls",
            "type": "Array<string>"
        },
        {
            "name": "assertionDuration",
            "baseName": "assertionDuration",
            "type": "number"
        },
        {
            "name": "assertionSigned",
            "baseName": "assertionSigned",
            "type": "boolean"
        },
        {
            "name": "idpSigningtype",
            "baseName": "idpSigningtype",
            "type": "ApplicationSAMLAllOfIdpSigningtype"
        },
        {
            "name": "nameIdFormat",
            "baseName": "nameIdFormat",
            "type": "string"
        },
        {
            "name": "responseSigned",
            "baseName": "responseSigned",
            "type": "boolean"
        },
        {
            "name": "sloBinding",
            "baseName": "sloBinding",
            "type": "ApplicationSAML.SloBindingEnum"
        },
        {
            "name": "sloEndpoint",
            "baseName": "sloEndpoint",
            "type": "string"
        },
        {
            "name": "sloResponseEndpoint",
            "baseName": "sloResponseEndpoint",
            "type": "string"
        },
        {
            "name": "spEntityId",
            "baseName": "spEntityId",
            "type": "string"
        },
        {
            "name": "spVerification",
            "baseName": "spVerification",
            "type": "ApplicationSAMLAllOfSpVerification"
        }    ];

    static getAttributeTypeMap() {
        return ApplicationSAML.attributeTypeMap;
    }
}

export namespace ApplicationSAML {
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
    export enum SloBindingEnum {
        Redirect = <any> 'HTTP_REDIRECT',
        Post = <any> 'HTTP_POST'
    }
}
