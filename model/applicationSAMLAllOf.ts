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
import { ApplicationSAMLAllOfIdpSigningtype } from './applicationSAMLAllOfIdpSigningtype';
import { ApplicationSAMLAllOfSpVerification } from './applicationSAMLAllOfSpVerification';

export class ApplicationSAMLAllOf {
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
    'sloBinding'?: ApplicationSAMLAllOf.SloBindingEnum;
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
            "type": "ApplicationSAMLAllOf.SloBindingEnum"
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
        return ApplicationSAMLAllOf.attributeTypeMap;
    }
}

export namespace ApplicationSAMLAllOf {
    export enum SloBindingEnum {
        Redirect = <any> 'HTTP_REDIRECT',
        Post = <any> 'HTTP_POST'
    }
}
