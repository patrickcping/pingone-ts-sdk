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
import { ApplicationOIDCAllOfMobile } from './applicationOIDCAllOfMobile';

export class ApplicationOIDCAllOf {
    'mobile'?: ApplicationOIDCAllOfMobile;
    /**
    * A string that specifies the bundle associated with the application, for push notifications in native apps. The value of the bundleId property is unique per environment, and once defined, is immutable.
    */
    'bundleId'?: string;
    /**
    * A string that specifies the package name associated with the application, for push notifications in native apps. The value of the mobile.packageName property is unique per environment, and once defined, is immutable.
    */
    'packageName'?: string;
    /**
    * A string that specifies the grant type for the authorization request. This is a required property. Options are AUTHORIZATION_CODE, IMPLICIT, REFRESH_TOKEN, CLIENT_CREDENTIALS.
    */
    'grantTypes': Array<ApplicationOIDCAllOf.GrantTypesEnum>;
    /**
    * A string that specifies the custom home page URL for the application.
    */
    'homePageUrl'?: string;
    /**
    * A string that specifies how PKCE request parameters are handled on the authorize request. Options are OPTIONAL PKCE code_challenge is optional and any code challenge method is acceptable. REQUIRED PKCE code_challenge is required and any code challenge method is acceptable. S256_REQUIRED PKCE code_challege is required and the code_challenge_method must be S256.
    */
    'pkceEnforcement'?: ApplicationOIDCAllOf.PkceEnforcementEnum;
    /**
    * A string that specifies the URLs that the browser can be redirected to after logout.
    */
    'postLogoutRedirectUris'?: Array<string>;
    /**
    * A string that specifies the callback URI for the authentication response.
    */
    'redirectUris'?: Array<string>;
    /**
    * An integer that specifies the lifetime in seconds of the refresh token. If a value is not provided, the default value is 2592000, or 30 days. Valid values are between 60 and 2147483647. If the refreshTokenRollingDuration property is specified for the application, then this property must be less than or equal to the value of refreshTokenRollingDuration. After this property is set, the value cannot be nullified. This value is used to generate the value for the exp claim when minting a new refresh token.
    */
    'refreshTokenDuration'?: number;
    /**
    * An integer that specifies the number of seconds a refresh token can be exchanged before re-authentication is required. If a value is not provided, the refresh token is valid forever. Valid values are between 60 and 2147483647. After this property is set, the value cannot be nullified. This value is used to generate the value for the exp claim when minting a new refresh token.
    */
    'refreshTokenRollingDuration'?: number;
    /**
    * A string that specifies the code or token type returned by an authorization request. Options are TOKEN, ID_TOKEN, and CODE. Note that CODE cannot be used in an authorization request with TOKEN or ID_TOKEN because PingOne does not currently support OIDC hybrid flows.
    */
    'responseTypes'?: Array<ApplicationOIDCAllOf.ResponseTypesEnum>;
    /**
    * A string that specifies the client authentication methods supported by the token endpoint. This is a required property. Options are NONE, CLIENT_SECRET_BASIC, and CLIENT_SECRET_POST.
    */
    'tokenEndpointAuthMethod': ApplicationOIDCAllOf.TokenEndpointAuthMethodEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "mobile",
            "baseName": "mobile",
            "type": "ApplicationOIDCAllOfMobile"
        },
        {
            "name": "bundleId",
            "baseName": "bundleId",
            "type": "string"
        },
        {
            "name": "packageName",
            "baseName": "packageName",
            "type": "string"
        },
        {
            "name": "grantTypes",
            "baseName": "grantTypes",
            "type": "Array<ApplicationOIDCAllOf.GrantTypesEnum>"
        },
        {
            "name": "homePageUrl",
            "baseName": "homePageUrl",
            "type": "string"
        },
        {
            "name": "pkceEnforcement",
            "baseName": "pkceEnforcement",
            "type": "ApplicationOIDCAllOf.PkceEnforcementEnum"
        },
        {
            "name": "postLogoutRedirectUris",
            "baseName": "postLogoutRedirectUris",
            "type": "Array<string>"
        },
        {
            "name": "redirectUris",
            "baseName": "redirectUris",
            "type": "Array<string>"
        },
        {
            "name": "refreshTokenDuration",
            "baseName": "refreshTokenDuration",
            "type": "number"
        },
        {
            "name": "refreshTokenRollingDuration",
            "baseName": "refreshTokenRollingDuration",
            "type": "number"
        },
        {
            "name": "responseTypes",
            "baseName": "responseTypes",
            "type": "Array<ApplicationOIDCAllOf.ResponseTypesEnum>"
        },
        {
            "name": "tokenEndpointAuthMethod",
            "baseName": "tokenEndpointAuthMethod",
            "type": "ApplicationOIDCAllOf.TokenEndpointAuthMethodEnum"
        }    ];

    static getAttributeTypeMap() {
        return ApplicationOIDCAllOf.attributeTypeMap;
    }
}

export namespace ApplicationOIDCAllOf {
    export enum GrantTypesEnum {
        AuthorizationCode = <any> 'AUTHORIZATION_CODE',
        Implicit = <any> 'IMPLICIT',
        RefreshToken = <any> 'REFRESH_TOKEN',
        ClientCredentials = <any> 'CLIENT_CREDENTIALS'
    }
    export enum PkceEnforcementEnum {
        Optional = <any> 'OPTIONAL',
        Required = <any> 'REQUIRED',
        S256Required = <any> 'S256_REQUIRED'
    }
    export enum ResponseTypesEnum {
        Token = <any> 'TOKEN',
        IdToken = <any> 'ID_TOKEN',
        Code = <any> 'CODE'
    }
    export enum TokenEndpointAuthMethodEnum {
        None = <any> 'NONE',
        ClientSecretBasic = <any> 'CLIENT_SECRET_BASIC',
        ClientSecretPost = <any> 'CLIENT_SECRET_POST'
    }
}
