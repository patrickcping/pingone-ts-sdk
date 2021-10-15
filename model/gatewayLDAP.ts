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
import { Gateway } from './gateway';
import { GatewayCredential } from './gatewayCredential';
import { GatewayLDAPAllOf } from './gatewayLDAPAllOf';
import { GatewayLDAPAllOfUserTypes } from './gatewayLDAPAllOfUserTypes';
import { GatewaySupportedVersions } from './gatewaySupportedVersions';
import { ObjectEnvironment } from './objectEnvironment';

export class GatewayLDAP {
    /**
    * A string that specifies the instance ID of the gateway. The gateway instance ID is created by the gateway when it starts up.
    */
    'id'?: string;
    'environment'?: ObjectEnvironment;
    'credentials'?: Array<GatewayCredential>;
    /**
    * A string that specifies the resource name, which must be provided and must be unique within an environment. Valid characters are any Unicode letter, mark, numeric character, forward slash, dot, apostrophe, underscore, space, or hyphen.
    */
    'name': string;
    /**
    * (Optional) A string that specifies the description of the resource.
    */
    'description'?: string;
    /**
    * A string that specifies the type of gateway resource. Options are LDAP and PING_FEDERATE. This is a required property.
    */
    'type': GatewayLDAP.TypeEnum;
    /**
    * A boolean that specifies whether the gateway is enabled. This is a required property.
    */
    'enabled'?: boolean;
    'supportedVersions'?: GatewaySupportedVersions;
    /**
    * A string that specifies the distinguished name information to bind to the LDAP database (for example, uid=pingone,dc=example,dc=com).
    */
    'bindDN': string;
    /**
    * A string that specifies the bind password for the LDAP database. This is a required property.
    */
    'bindPassword': string;
    /**
    * (Optional) A string that specifies the connection security type. Options are None, TLS, and StartTLS. The default value is None.
    */
    'connectionSecurity'?: GatewayLDAP.ConnectionSecurityEnum;
    /**
    * An array of strings that specifies the LDAP server host name and port number (for example, [\"ds1.example.com:389\", \"ds2.example.com:389\"]).
    */
    'serversHostAndPort'?: Array<string>;
    /**
    * (Optional) An array of the userTypes properties for the users to be provisioned in PingOne. userTypes specifies which user properties in PingOne correspond to the user properties in an external LDAP directory. You can use an LDAP browser to view the user properties in the external LDAP directory.
    */
    'userTypes': Array<GatewayLDAPAllOfUserTypes>;
    /**
    * (Optional) A boolean that specifies whether or not to trust all SSL certificates (defaults to true). If this value is false, TLS certificates are not validated. When the value is set to true, only certificates that are signed by the default JVM CAs, or the CA certs that the customer has uploaded to the certificate service are trusted.
    */
    'validateTlsCertificates'?: boolean;
    /**
    * A string that specifies the LDAP vendor. Options are PingDirectory, Microsoft Active Directory, Oracle Directory Server Enterprise Edition, Oracle Unified Directory, CA Directory, OpenDJ Directory, IBM (Tivoli) Security Directory Server, and LDAP v3 compliant Directory Server.
    */
    'vendor': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "credentials",
            "baseName": "credentials",
            "type": "Array<GatewayCredential>"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "GatewayLDAP.TypeEnum"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "supportedVersions",
            "baseName": "supportedVersions",
            "type": "GatewaySupportedVersions"
        },
        {
            "name": "bindDN",
            "baseName": "bindDN",
            "type": "string"
        },
        {
            "name": "bindPassword",
            "baseName": "bindPassword",
            "type": "string"
        },
        {
            "name": "connectionSecurity",
            "baseName": "connectionSecurity",
            "type": "GatewayLDAP.ConnectionSecurityEnum"
        },
        {
            "name": "serversHostAndPort",
            "baseName": "serversHostAndPort",
            "type": "Array<string>"
        },
        {
            "name": "userTypes",
            "baseName": "userTypes",
            "type": "Array<GatewayLDAPAllOfUserTypes>"
        },
        {
            "name": "validateTlsCertificates",
            "baseName": "validateTlsCertificates",
            "type": "boolean"
        },
        {
            "name": "vendor",
            "baseName": "vendor",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GatewayLDAP.attributeTypeMap;
    }
}

export namespace GatewayLDAP {
    export enum TypeEnum {
        Ldap = <any> 'LDAP',
        PingFederate = <any> 'PING_FEDERATE'
    }
    export enum ConnectionSecurityEnum {
        None = <any> 'None',
        Tls = <any> 'TLS',
        StartTls = <any> 'StartTLS'
    }
}
