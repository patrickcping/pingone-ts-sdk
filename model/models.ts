import localVarRequest from 'request';

export * from './billOfMaterials';
export * from './billOfMaterialsBookmarks';
export * from './billOfMaterialsProducts';
export * from './entityArray';
export * from './entityArrayEmbedded';
export * from './environment';
export * from './environmentLicense';
export * from './environmentOrganization';
export * from './groupMembership';
export * from './inlineObject2';
export * from './p1Error';
export * from './p1ErrorDetails';
export * from './population';
export * from './role';
export * from './roleAssignment';
export * from './roleAssignmentEnvironment';
export * from './roleAssignmentRole';
export * from './roleAssignmentScope';
export * from './rolePermissions';
export * from './user';
export * from './userAccount';
export * from './userAddress';
export * from './userEnvironment';
export * from './userIdentityProvider';
export * from './userLastSignOn';
export * from './userLifecycle';
export * from './userName';
export * from './userPassword';
export * from './userPasswordExternal';
export * from './userPasswordExternalGateway';
export * from './userPasswordExternalGatewayUserType';
export * from './userPhoto';
export * from './userPopulation';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { BillOfMaterials } from './billOfMaterials';
import { BillOfMaterialsBookmarks } from './billOfMaterialsBookmarks';
import { BillOfMaterialsProducts } from './billOfMaterialsProducts';
import { EntityArray } from './entityArray';
import { EntityArrayEmbedded } from './entityArrayEmbedded';
import { Environment } from './environment';
import { EnvironmentLicense } from './environmentLicense';
import { EnvironmentOrganization } from './environmentOrganization';
import { GroupMembership } from './groupMembership';
import { InlineObject2 } from './inlineObject2';
import { P1Error } from './p1Error';
import { P1ErrorDetails } from './p1ErrorDetails';
import { Population } from './population';
import { Role } from './role';
import { RoleAssignment } from './roleAssignment';
import { RoleAssignmentEnvironment } from './roleAssignmentEnvironment';
import { RoleAssignmentRole } from './roleAssignmentRole';
import { RoleAssignmentScope } from './roleAssignmentScope';
import { RolePermissions } from './rolePermissions';
import { User } from './user';
import { UserAccount } from './userAccount';
import { UserAddress } from './userAddress';
import { UserEnvironment } from './userEnvironment';
import { UserIdentityProvider } from './userIdentityProvider';
import { UserLastSignOn } from './userLastSignOn';
import { UserLifecycle } from './userLifecycle';
import { UserName } from './userName';
import { UserPassword } from './userPassword';
import { UserPasswordExternal } from './userPasswordExternal';
import { UserPasswordExternalGateway } from './userPasswordExternalGateway';
import { UserPasswordExternalGatewayUserType } from './userPasswordExternalGatewayUserType';
import { UserPhoto } from './userPhoto';
import { UserPopulation } from './userPopulation';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "BillOfMaterialsProducts.TypeEnum": BillOfMaterialsProducts.TypeEnum,
        "Environment.RegionEnum": Environment.RegionEnum,
        "Environment.TypeEnum": Environment.TypeEnum,
        "InlineObject2.TypeEnum": InlineObject2.TypeEnum,
        "RoleAssignmentScope.TypeEnum": RoleAssignmentScope.TypeEnum,
        "User.VerifyStatusEnum": User.VerifyStatusEnum,
}

let typeMap: {[index: string]: any} = {
    "BillOfMaterials": BillOfMaterials,
    "BillOfMaterialsBookmarks": BillOfMaterialsBookmarks,
    "BillOfMaterialsProducts": BillOfMaterialsProducts,
    "EntityArray": EntityArray,
    "EntityArrayEmbedded": EntityArrayEmbedded,
    "Environment": Environment,
    "EnvironmentLicense": EnvironmentLicense,
    "EnvironmentOrganization": EnvironmentOrganization,
    "GroupMembership": GroupMembership,
    "InlineObject2": InlineObject2,
    "P1Error": P1Error,
    "P1ErrorDetails": P1ErrorDetails,
    "Population": Population,
    "Role": Role,
    "RoleAssignment": RoleAssignment,
    "RoleAssignmentEnvironment": RoleAssignmentEnvironment,
    "RoleAssignmentRole": RoleAssignmentRole,
    "RoleAssignmentScope": RoleAssignmentScope,
    "RolePermissions": RolePermissions,
    "User": User,
    "UserAccount": UserAccount,
    "UserAddress": UserAddress,
    "UserEnvironment": UserEnvironment,
    "UserIdentityProvider": UserIdentityProvider,
    "UserLastSignOn": UserLastSignOn,
    "UserLifecycle": UserLifecycle,
    "UserName": UserName,
    "UserPassword": UserPassword,
    "UserPasswordExternal": UserPasswordExternal,
    "UserPasswordExternalGateway": UserPasswordExternalGateway,
    "UserPasswordExternalGatewayUserType": UserPasswordExternalGatewayUserType,
    "UserPhoto": UserPhoto,
    "UserPopulation": UserPopulation,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
