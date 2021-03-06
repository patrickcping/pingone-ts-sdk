import localVarRequest from 'request';

export * from './application';
export * from './applicationAccessControl';
export * from './applicationAccessControlGroup';
export * from './applicationAccessControlGroupGroups';
export * from './applicationAccessControlRole';
export * from './applicationAttributeMapping';
export * from './applicationIcon';
export * from './applicationOIDC';
export * from './applicationOIDCAllOf';
export * from './applicationOIDCAllOfMobile';
export * from './applicationOIDCAllOfMobileIntegrityDetection';
export * from './applicationOIDCAllOfMobileIntegrityDetectionCacheDuration';
export * from './applicationResourceGrant';
export * from './applicationResourceGrantApplication';
export * from './applicationResourceGrantResource';
export * from './applicationResourceGrantScopes';
export * from './applicationSAML';
export * from './applicationSAMLAllOf';
export * from './applicationSAMLAllOfIdpSigningtype';
export * from './applicationSAMLAllOfIdpSigningtypeKey';
export * from './applicationSAMLAllOfSpVerification';
export * from './applicationSAMLAllOfSpVerificationCertificates';
export * from './applicationSecret';
export * from './billOfMaterials';
export * from './billOfMaterialsBookmarks';
export * from './billOfMaterialsConsole';
export * from './billOfMaterialsProducts';
export * from './entityArray';
export * from './entityArrayEmbedded';
export * from './environment';
export * from './environmentLicense';
export * from './environmentOrganization';
export * from './gateway';
export * from './gatewayCredential';
export * from './gatewayInstance';
export * from './gatewayInstanceCredential';
export * from './gatewayInstanceGateway';
export * from './gatewayInstanceVersion';
export * from './gatewayLDAP';
export * from './gatewayLDAPAllOf';
export * from './gatewayLDAPAllOfNewUserLookup';
export * from './gatewayLDAPAllOfNewUserLookupAttributeMappings';
export * from './gatewayLDAPAllOfNewUserLookupPopulation';
export * from './gatewayLDAPAllOfUserTypes';
export * from './gatewaySupportedVersions';
export * from './group';
export * from './groupDirectMemberCounts';
export * from './groupMembership';
export * from './groupPopulation';
export * from './groupTotalMemberCounts';
export * from './image';
export * from './imageTargets';
export * from './inlineObject2';
export * from './inlineObject3';
export * from './mFAPushCredential';
export * from './mFAPushCredentialAPNS';
export * from './mFAPushCredentialAPNSAllOf';
export * from './objectEnvironment';
export * from './objectPopulation';
export * from './p1Error';
export * from './p1ErrorDetails';
export * from './population';
export * from './resource';
export * from './resourceAttribute';
export * from './resourceResource';
export * from './resourceScope';
export * from './riskEvaluation';
export * from './riskEvaluationDetails';
export * from './riskEvaluationDetailsIpAddressReputation';
export * from './riskEvaluationDetailsIpVelocityByUser';
export * from './riskEvaluationDetailsIpVelocityByUserThreshold';
export * from './riskEvaluationDetailsIpVelocityByUserVelocity';
export * from './riskEvaluationDetailsPreviousSuccessfulTransaction';
export * from './riskEvaluationDetailsUserBasedRiskBehavior';
export * from './riskEvaluationDetailsUserRiskBehavior';
export * from './riskEvaluationDetailsUserVelocityByIp';
export * from './riskEvaluationDetailsUserVelocityByIpThreshold';
export * from './riskEvaluationDetailsUserVelocityByIpVelocity';
export * from './riskEvaluationEvent';
export * from './riskEvaluationEventBrowser';
export * from './riskEvaluationEventEvaluatedFactors';
export * from './riskEvaluationEventFlow';
export * from './riskEvaluationEventSession';
export * from './riskEvaluationEventTargetResource';
export * from './riskEvaluationEventUser';
export * from './riskEvaluationEventUserGroups';
export * from './riskEvaluationResult';
export * from './riskEvaluationRiskPolicySet';
export * from './riskPolicyResult';
export * from './riskPolicySet';
export * from './riskPolicySetCondition';
export * from './riskPolicySetConditionAggregatedWeights';
export * from './riskPolicySetConditionBetween';
export * from './riskPolicySetRiskPolicies';
export * from './riskPredictor';
export * from './riskPredictorDefault';
export * from './riskPredictorDefaultResult';
export * from './riskPredictorItemMap';
export * from './riskPredictorItemMapBetween';
export * from './riskPredictorMap';
export * from './role';
export * from './roleAssignment';
export * from './roleAssignmentRole';
export * from './roleAssignmentScope';
export * from './rolePermissions';
export * from './schema';
export * from './schemaAttribute';
export * from './schemaAttributeSchema';
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


import { Application } from './application';
import { ApplicationAccessControl } from './applicationAccessControl';
import { ApplicationAccessControlGroup } from './applicationAccessControlGroup';
import { ApplicationAccessControlGroupGroups } from './applicationAccessControlGroupGroups';
import { ApplicationAccessControlRole } from './applicationAccessControlRole';
import { ApplicationAttributeMapping } from './applicationAttributeMapping';
import { ApplicationIcon } from './applicationIcon';
import { ApplicationOIDC } from './applicationOIDC';
import { ApplicationOIDCAllOf } from './applicationOIDCAllOf';
import { ApplicationOIDCAllOfMobile } from './applicationOIDCAllOfMobile';
import { ApplicationOIDCAllOfMobileIntegrityDetection } from './applicationOIDCAllOfMobileIntegrityDetection';
import { ApplicationOIDCAllOfMobileIntegrityDetectionCacheDuration } from './applicationOIDCAllOfMobileIntegrityDetectionCacheDuration';
import { ApplicationResourceGrant } from './applicationResourceGrant';
import { ApplicationResourceGrantApplication } from './applicationResourceGrantApplication';
import { ApplicationResourceGrantResource } from './applicationResourceGrantResource';
import { ApplicationResourceGrantScopes } from './applicationResourceGrantScopes';
import { ApplicationSAML } from './applicationSAML';
import { ApplicationSAMLAllOf } from './applicationSAMLAllOf';
import { ApplicationSAMLAllOfIdpSigningtype } from './applicationSAMLAllOfIdpSigningtype';
import { ApplicationSAMLAllOfIdpSigningtypeKey } from './applicationSAMLAllOfIdpSigningtypeKey';
import { ApplicationSAMLAllOfSpVerification } from './applicationSAMLAllOfSpVerification';
import { ApplicationSAMLAllOfSpVerificationCertificates } from './applicationSAMLAllOfSpVerificationCertificates';
import { ApplicationSecret } from './applicationSecret';
import { BillOfMaterials } from './billOfMaterials';
import { BillOfMaterialsBookmarks } from './billOfMaterialsBookmarks';
import { BillOfMaterialsConsole } from './billOfMaterialsConsole';
import { BillOfMaterialsProducts } from './billOfMaterialsProducts';
import { EntityArray } from './entityArray';
import { EntityArrayEmbedded } from './entityArrayEmbedded';
import { Environment } from './environment';
import { EnvironmentLicense } from './environmentLicense';
import { EnvironmentOrganization } from './environmentOrganization';
import { Gateway } from './gateway';
import { GatewayCredential } from './gatewayCredential';
import { GatewayInstance } from './gatewayInstance';
import { GatewayInstanceCredential } from './gatewayInstanceCredential';
import { GatewayInstanceGateway } from './gatewayInstanceGateway';
import { GatewayInstanceVersion } from './gatewayInstanceVersion';
import { GatewayLDAP } from './gatewayLDAP';
import { GatewayLDAPAllOf } from './gatewayLDAPAllOf';
import { GatewayLDAPAllOfNewUserLookup } from './gatewayLDAPAllOfNewUserLookup';
import { GatewayLDAPAllOfNewUserLookupAttributeMappings } from './gatewayLDAPAllOfNewUserLookupAttributeMappings';
import { GatewayLDAPAllOfNewUserLookupPopulation } from './gatewayLDAPAllOfNewUserLookupPopulation';
import { GatewayLDAPAllOfUserTypes } from './gatewayLDAPAllOfUserTypes';
import { GatewaySupportedVersions } from './gatewaySupportedVersions';
import { Group } from './group';
import { GroupDirectMemberCounts } from './groupDirectMemberCounts';
import { GroupMembership } from './groupMembership';
import { GroupPopulation } from './groupPopulation';
import { GroupTotalMemberCounts } from './groupTotalMemberCounts';
import { Image } from './image';
import { ImageTargets } from './imageTargets';
import { InlineObject2 } from './inlineObject2';
import { InlineObject3 } from './inlineObject3';
import { MFAPushCredential } from './mFAPushCredential';
import { MFAPushCredentialAPNS } from './mFAPushCredentialAPNS';
import { MFAPushCredentialAPNSAllOf } from './mFAPushCredentialAPNSAllOf';
import { ObjectEnvironment } from './objectEnvironment';
import { ObjectPopulation } from './objectPopulation';
import { P1Error } from './p1Error';
import { P1ErrorDetails } from './p1ErrorDetails';
import { Population } from './population';
import { Resource } from './resource';
import { ResourceAttribute } from './resourceAttribute';
import { ResourceResource } from './resourceResource';
import { ResourceScope } from './resourceScope';
import { RiskEvaluation } from './riskEvaluation';
import { RiskEvaluationDetails } from './riskEvaluationDetails';
import { RiskEvaluationDetailsIpAddressReputation } from './riskEvaluationDetailsIpAddressReputation';
import { RiskEvaluationDetailsIpVelocityByUser } from './riskEvaluationDetailsIpVelocityByUser';
import { RiskEvaluationDetailsIpVelocityByUserThreshold } from './riskEvaluationDetailsIpVelocityByUserThreshold';
import { RiskEvaluationDetailsIpVelocityByUserVelocity } from './riskEvaluationDetailsIpVelocityByUserVelocity';
import { RiskEvaluationDetailsPreviousSuccessfulTransaction } from './riskEvaluationDetailsPreviousSuccessfulTransaction';
import { RiskEvaluationDetailsUserBasedRiskBehavior } from './riskEvaluationDetailsUserBasedRiskBehavior';
import { RiskEvaluationDetailsUserRiskBehavior } from './riskEvaluationDetailsUserRiskBehavior';
import { RiskEvaluationDetailsUserVelocityByIp } from './riskEvaluationDetailsUserVelocityByIp';
import { RiskEvaluationDetailsUserVelocityByIpThreshold } from './riskEvaluationDetailsUserVelocityByIpThreshold';
import { RiskEvaluationDetailsUserVelocityByIpVelocity } from './riskEvaluationDetailsUserVelocityByIpVelocity';
import { RiskEvaluationEvent } from './riskEvaluationEvent';
import { RiskEvaluationEventBrowser } from './riskEvaluationEventBrowser';
import { RiskEvaluationEventEvaluatedFactors } from './riskEvaluationEventEvaluatedFactors';
import { RiskEvaluationEventFlow } from './riskEvaluationEventFlow';
import { RiskEvaluationEventSession } from './riskEvaluationEventSession';
import { RiskEvaluationEventTargetResource } from './riskEvaluationEventTargetResource';
import { RiskEvaluationEventUser } from './riskEvaluationEventUser';
import { RiskEvaluationEventUserGroups } from './riskEvaluationEventUserGroups';
import { RiskEvaluationResult } from './riskEvaluationResult';
import { RiskEvaluationRiskPolicySet } from './riskEvaluationRiskPolicySet';
import { RiskPolicyResult } from './riskPolicyResult';
import { RiskPolicySet } from './riskPolicySet';
import { RiskPolicySetCondition } from './riskPolicySetCondition';
import { RiskPolicySetConditionAggregatedWeights } from './riskPolicySetConditionAggregatedWeights';
import { RiskPolicySetConditionBetween } from './riskPolicySetConditionBetween';
import { RiskPolicySetRiskPolicies } from './riskPolicySetRiskPolicies';
import { RiskPredictor } from './riskPredictor';
import { RiskPredictorDefault } from './riskPredictorDefault';
import { RiskPredictorDefaultResult } from './riskPredictorDefaultResult';
import { RiskPredictorItemMap } from './riskPredictorItemMap';
import { RiskPredictorItemMapBetween } from './riskPredictorItemMapBetween';
import { RiskPredictorMap } from './riskPredictorMap';
import { Role } from './role';
import { RoleAssignment } from './roleAssignment';
import { RoleAssignmentRole } from './roleAssignmentRole';
import { RoleAssignmentScope } from './roleAssignmentScope';
import { RolePermissions } from './rolePermissions';
import { Schema } from './schema';
import { SchemaAttribute } from './schemaAttribute';
import { SchemaAttributeSchema } from './schemaAttributeSchema';
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
        "Application.ProtocolEnum": Application.ProtocolEnum,
        "Application.TagsEnum": Application.TagsEnum,
        "Application.TypeEnum": Application.TypeEnum,
        "ApplicationAttributeMapping.MappingTypeEnum": ApplicationAttributeMapping.MappingTypeEnum,
        "ApplicationOIDC.ProtocolEnum": ApplicationOIDC.ProtocolEnum,
        "ApplicationOIDC.TagsEnum": ApplicationOIDC.TagsEnum,
        "ApplicationOIDC.TypeEnum": ApplicationOIDC.TypeEnum,
        "ApplicationOIDC.GrantTypesEnum": ApplicationOIDC.GrantTypesEnum,
        "ApplicationOIDC.PkceEnforcementEnum": ApplicationOIDC.PkceEnforcementEnum,
        "ApplicationOIDC.ResponseTypesEnum": ApplicationOIDC.ResponseTypesEnum,
        "ApplicationOIDC.TokenEndpointAuthMethodEnum": ApplicationOIDC.TokenEndpointAuthMethodEnum,
        "ApplicationOIDCAllOf.GrantTypesEnum": ApplicationOIDCAllOf.GrantTypesEnum,
        "ApplicationOIDCAllOf.PkceEnforcementEnum": ApplicationOIDCAllOf.PkceEnforcementEnum,
        "ApplicationOIDCAllOf.ResponseTypesEnum": ApplicationOIDCAllOf.ResponseTypesEnum,
        "ApplicationOIDCAllOf.TokenEndpointAuthMethodEnum": ApplicationOIDCAllOf.TokenEndpointAuthMethodEnum,
        "ApplicationOIDCAllOfMobileIntegrityDetection.ModeEnum": ApplicationOIDCAllOfMobileIntegrityDetection.ModeEnum,
        "ApplicationOIDCAllOfMobileIntegrityDetectionCacheDuration.UnitsEnum": ApplicationOIDCAllOfMobileIntegrityDetectionCacheDuration.UnitsEnum,
        "ApplicationSAML.ProtocolEnum": ApplicationSAML.ProtocolEnum,
        "ApplicationSAML.TagsEnum": ApplicationSAML.TagsEnum,
        "ApplicationSAML.TypeEnum": ApplicationSAML.TypeEnum,
        "ApplicationSAML.SloBindingEnum": ApplicationSAML.SloBindingEnum,
        "ApplicationSAMLAllOf.SloBindingEnum": ApplicationSAMLAllOf.SloBindingEnum,
        "BillOfMaterialsProducts.TypeEnum": BillOfMaterialsProducts.TypeEnum,
        "Environment.RegionEnum": Environment.RegionEnum,
        "Environment.TypeEnum": Environment.TypeEnum,
        "Gateway.TypeEnum": Gateway.TypeEnum,
        "GatewayCredential.GatewayTypeEnum": GatewayCredential.GatewayTypeEnum,
        "GatewayInstance.HealthStatusEnum": GatewayInstance.HealthStatusEnum,
        "GatewayInstanceVersion.UpdateStatusEnum": GatewayInstanceVersion.UpdateStatusEnum,
        "GatewayLDAP.TypeEnum": GatewayLDAP.TypeEnum,
        "GatewayLDAP.ConnectionSecurityEnum": GatewayLDAP.ConnectionSecurityEnum,
        "GatewayLDAPAllOf.ConnectionSecurityEnum": GatewayLDAPAllOf.ConnectionSecurityEnum,
        "ImageTargets.TypeEnum": ImageTargets.TypeEnum,
        "InlineObject2.TypeEnum": InlineObject2.TypeEnum,
        "MFAPushCredential.TypeEnum": MFAPushCredential.TypeEnum,
        "MFAPushCredentialAPNS.TypeEnum": MFAPushCredentialAPNS.TypeEnum,
        "Resource.TypeEnum": Resource.TypeEnum,
        "ResourceAttribute.TypeEnum": ResourceAttribute.TypeEnum,
        "RiskEvaluationDetailsIpAddressReputation.LevelEnum": RiskEvaluationDetailsIpAddressReputation.LevelEnum,
        "RiskEvaluationDetailsIpVelocityByUser.LevelEnum": RiskEvaluationDetailsIpVelocityByUser.LevelEnum,
        "RiskEvaluationDetailsIpVelocityByUserThreshold.SourceEnum": RiskEvaluationDetailsIpVelocityByUserThreshold.SourceEnum,
        "RiskEvaluationDetailsUserBasedRiskBehavior.LevelEnum": RiskEvaluationDetailsUserBasedRiskBehavior.LevelEnum,
        "RiskEvaluationDetailsUserRiskBehavior.LevelEnum": RiskEvaluationDetailsUserRiskBehavior.LevelEnum,
        "RiskEvaluationDetailsUserVelocityByIp.LevelEnum": RiskEvaluationDetailsUserVelocityByIp.LevelEnum,
        "RiskEvaluationDetailsUserVelocityByIpThreshold.SourceEnum": RiskEvaluationDetailsUserVelocityByIpThreshold.SourceEnum,
        "RiskEvaluationEvent.CompletionStatusEnum": RiskEvaluationEvent.CompletionStatusEnum,
        "RiskEvaluationEvent.SharingTypeEnum": RiskEvaluationEvent.SharingTypeEnum,
        "RiskEvaluationEventEvaluatedFactors.StatusEnum": RiskEvaluationEventEvaluatedFactors.StatusEnum,
        "RiskEvaluationEventFlow.TypeEnum": RiskEvaluationEventFlow.TypeEnum,
        "RiskEvaluationEventUser.TypeEnum": RiskEvaluationEventUser.TypeEnum,
        "RiskEvaluationResult.TypeEnum": RiskEvaluationResult.TypeEnum,
        "RiskEvaluationResult.LevelEnum": RiskEvaluationResult.LevelEnum,
        "RiskPolicyResult.LevelEnum": RiskPolicyResult.LevelEnum,
        "RiskPolicyResult.TypeEnum": RiskPolicyResult.TypeEnum,
        "RiskPredictor.TypeEnum": RiskPredictor.TypeEnum,
        "RiskPredictorDefaultResult.LevelEnum": RiskPredictorDefaultResult.LevelEnum,
        "RiskPredictorDefaultResult.TypeEnum": RiskPredictorDefaultResult.TypeEnum,
        "RoleAssignmentScope.TypeEnum": RoleAssignmentScope.TypeEnum,
        "SchemaAttribute.SchemaTypeEnum": SchemaAttribute.SchemaTypeEnum,
        "SchemaAttribute.TypeEnum": SchemaAttribute.TypeEnum,
        "User.VerifyStatusEnum": User.VerifyStatusEnum,
}

let typeMap: {[index: string]: any} = {
    "Application": Application,
    "ApplicationAccessControl": ApplicationAccessControl,
    "ApplicationAccessControlGroup": ApplicationAccessControlGroup,
    "ApplicationAccessControlGroupGroups": ApplicationAccessControlGroupGroups,
    "ApplicationAccessControlRole": ApplicationAccessControlRole,
    "ApplicationAttributeMapping": ApplicationAttributeMapping,
    "ApplicationIcon": ApplicationIcon,
    "ApplicationOIDC": ApplicationOIDC,
    "ApplicationOIDCAllOf": ApplicationOIDCAllOf,
    "ApplicationOIDCAllOfMobile": ApplicationOIDCAllOfMobile,
    "ApplicationOIDCAllOfMobileIntegrityDetection": ApplicationOIDCAllOfMobileIntegrityDetection,
    "ApplicationOIDCAllOfMobileIntegrityDetectionCacheDuration": ApplicationOIDCAllOfMobileIntegrityDetectionCacheDuration,
    "ApplicationResourceGrant": ApplicationResourceGrant,
    "ApplicationResourceGrantApplication": ApplicationResourceGrantApplication,
    "ApplicationResourceGrantResource": ApplicationResourceGrantResource,
    "ApplicationResourceGrantScopes": ApplicationResourceGrantScopes,
    "ApplicationSAML": ApplicationSAML,
    "ApplicationSAMLAllOf": ApplicationSAMLAllOf,
    "ApplicationSAMLAllOfIdpSigningtype": ApplicationSAMLAllOfIdpSigningtype,
    "ApplicationSAMLAllOfIdpSigningtypeKey": ApplicationSAMLAllOfIdpSigningtypeKey,
    "ApplicationSAMLAllOfSpVerification": ApplicationSAMLAllOfSpVerification,
    "ApplicationSAMLAllOfSpVerificationCertificates": ApplicationSAMLAllOfSpVerificationCertificates,
    "ApplicationSecret": ApplicationSecret,
    "BillOfMaterials": BillOfMaterials,
    "BillOfMaterialsBookmarks": BillOfMaterialsBookmarks,
    "BillOfMaterialsConsole": BillOfMaterialsConsole,
    "BillOfMaterialsProducts": BillOfMaterialsProducts,
    "EntityArray": EntityArray,
    "EntityArrayEmbedded": EntityArrayEmbedded,
    "Environment": Environment,
    "EnvironmentLicense": EnvironmentLicense,
    "EnvironmentOrganization": EnvironmentOrganization,
    "Gateway": Gateway,
    "GatewayCredential": GatewayCredential,
    "GatewayInstance": GatewayInstance,
    "GatewayInstanceCredential": GatewayInstanceCredential,
    "GatewayInstanceGateway": GatewayInstanceGateway,
    "GatewayInstanceVersion": GatewayInstanceVersion,
    "GatewayLDAP": GatewayLDAP,
    "GatewayLDAPAllOf": GatewayLDAPAllOf,
    "GatewayLDAPAllOfNewUserLookup": GatewayLDAPAllOfNewUserLookup,
    "GatewayLDAPAllOfNewUserLookupAttributeMappings": GatewayLDAPAllOfNewUserLookupAttributeMappings,
    "GatewayLDAPAllOfNewUserLookupPopulation": GatewayLDAPAllOfNewUserLookupPopulation,
    "GatewayLDAPAllOfUserTypes": GatewayLDAPAllOfUserTypes,
    "GatewaySupportedVersions": GatewaySupportedVersions,
    "Group": Group,
    "GroupDirectMemberCounts": GroupDirectMemberCounts,
    "GroupMembership": GroupMembership,
    "GroupPopulation": GroupPopulation,
    "GroupTotalMemberCounts": GroupTotalMemberCounts,
    "Image": Image,
    "ImageTargets": ImageTargets,
    "InlineObject2": InlineObject2,
    "InlineObject3": InlineObject3,
    "MFAPushCredential": MFAPushCredential,
    "MFAPushCredentialAPNS": MFAPushCredentialAPNS,
    "MFAPushCredentialAPNSAllOf": MFAPushCredentialAPNSAllOf,
    "ObjectEnvironment": ObjectEnvironment,
    "ObjectPopulation": ObjectPopulation,
    "P1Error": P1Error,
    "P1ErrorDetails": P1ErrorDetails,
    "Population": Population,
    "Resource": Resource,
    "ResourceAttribute": ResourceAttribute,
    "ResourceResource": ResourceResource,
    "ResourceScope": ResourceScope,
    "RiskEvaluation": RiskEvaluation,
    "RiskEvaluationDetails": RiskEvaluationDetails,
    "RiskEvaluationDetailsIpAddressReputation": RiskEvaluationDetailsIpAddressReputation,
    "RiskEvaluationDetailsIpVelocityByUser": RiskEvaluationDetailsIpVelocityByUser,
    "RiskEvaluationDetailsIpVelocityByUserThreshold": RiskEvaluationDetailsIpVelocityByUserThreshold,
    "RiskEvaluationDetailsIpVelocityByUserVelocity": RiskEvaluationDetailsIpVelocityByUserVelocity,
    "RiskEvaluationDetailsPreviousSuccessfulTransaction": RiskEvaluationDetailsPreviousSuccessfulTransaction,
    "RiskEvaluationDetailsUserBasedRiskBehavior": RiskEvaluationDetailsUserBasedRiskBehavior,
    "RiskEvaluationDetailsUserRiskBehavior": RiskEvaluationDetailsUserRiskBehavior,
    "RiskEvaluationDetailsUserVelocityByIp": RiskEvaluationDetailsUserVelocityByIp,
    "RiskEvaluationDetailsUserVelocityByIpThreshold": RiskEvaluationDetailsUserVelocityByIpThreshold,
    "RiskEvaluationDetailsUserVelocityByIpVelocity": RiskEvaluationDetailsUserVelocityByIpVelocity,
    "RiskEvaluationEvent": RiskEvaluationEvent,
    "RiskEvaluationEventBrowser": RiskEvaluationEventBrowser,
    "RiskEvaluationEventEvaluatedFactors": RiskEvaluationEventEvaluatedFactors,
    "RiskEvaluationEventFlow": RiskEvaluationEventFlow,
    "RiskEvaluationEventSession": RiskEvaluationEventSession,
    "RiskEvaluationEventTargetResource": RiskEvaluationEventTargetResource,
    "RiskEvaluationEventUser": RiskEvaluationEventUser,
    "RiskEvaluationEventUserGroups": RiskEvaluationEventUserGroups,
    "RiskEvaluationResult": RiskEvaluationResult,
    "RiskEvaluationRiskPolicySet": RiskEvaluationRiskPolicySet,
    "RiskPolicyResult": RiskPolicyResult,
    "RiskPolicySet": RiskPolicySet,
    "RiskPolicySetCondition": RiskPolicySetCondition,
    "RiskPolicySetConditionAggregatedWeights": RiskPolicySetConditionAggregatedWeights,
    "RiskPolicySetConditionBetween": RiskPolicySetConditionBetween,
    "RiskPolicySetRiskPolicies": RiskPolicySetRiskPolicies,
    "RiskPredictor": RiskPredictor,
    "RiskPredictorDefault": RiskPredictorDefault,
    "RiskPredictorDefaultResult": RiskPredictorDefaultResult,
    "RiskPredictorItemMap": RiskPredictorItemMap,
    "RiskPredictorItemMapBetween": RiskPredictorItemMapBetween,
    "RiskPredictorMap": RiskPredictorMap,
    "Role": Role,
    "RoleAssignment": RoleAssignment,
    "RoleAssignmentRole": RoleAssignmentRole,
    "RoleAssignmentScope": RoleAssignmentScope,
    "RolePermissions": RolePermissions,
    "Schema": Schema,
    "SchemaAttribute": SchemaAttribute,
    "SchemaAttributeSchema": SchemaAttributeSchema,
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
