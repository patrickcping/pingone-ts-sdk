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


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { ApplicationAttributeMapping } from '../model/applicationAttributeMapping';
import { EntityArray } from '../model/entityArray';
import { P1Error } from '../model/p1Error';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.pingone.eu';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ManagementAPIsApplicationsApplicationAttributeMappingApiApiKeys {
}

export class ManagementAPIsApplicationsApplicationAttributeMappingApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'bearer': new HttpBearerAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: ManagementAPIsApplicationsApplicationAttributeMappingApiApiKeys, value: string) {
        (this.authentications as any)[ManagementAPIsApplicationsApplicationAttributeMappingApiApiKeys[key]].apiKey = value;
    }

    set accessToken(accessToken: string | (() => string)) {
        this.authentications.bearer.accessToken = accessToken;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * By design, PingOne requests solely comprise this collection. For complete documentation, direct a browser to <a href=\'https://apidocs.pingidentity.com/pingone/platform/v1/api/\'>apidocs.pingidentity.com</a>.
     * @summary CREATE Application Attribute Mapping
     * @param envID 
     * @param appID 
     * @param applicationAttributeMapping 
     */
    public async createApplicationAttributeMapping (envID: string, appID: string, applicationAttributeMapping?: ApplicationAttributeMapping, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ApplicationAttributeMapping;  }> {
        const localVarPath = this.basePath + '/v1/environments/{envID}/applications/{appID}/attributes'
            .replace('{' + 'envID' + '}', encodeURIComponent(String(envID)))
            .replace('{' + 'appID' + '}', encodeURIComponent(String(appID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'envID' is not null or undefined
        if (envID === null || envID === undefined) {
            throw new Error('Required parameter envID was null or undefined when calling createApplicationAttributeMapping.');
        }

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new Error('Required parameter appID was null or undefined when calling createApplicationAttributeMapping.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(applicationAttributeMapping, "ApplicationAttributeMapping")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ApplicationAttributeMapping;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ApplicationAttributeMapping");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * By design, PingOne requests solely comprise this collection. For complete documentation, direct a browser to <a href=\'https://apidocs.pingidentity.com/pingone/platform/v1/api/\'>apidocs.pingidentity.com</a>.
     * @summary DELETE Application Attribute Mapping
     * @param envID 
     * @param appID 
     * @param samlAttrID 
     */
    public async deleteApplicationAttributeMapping (envID: string, appID: string, samlAttrID: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/v1/environments/{envID}/applications/{appID}/attributes/{samlAttrID}'
            .replace('{' + 'envID' + '}', encodeURIComponent(String(envID)))
            .replace('{' + 'appID' + '}', encodeURIComponent(String(appID)))
            .replace('{' + 'samlAttrID' + '}', encodeURIComponent(String(samlAttrID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'envID' is not null or undefined
        if (envID === null || envID === undefined) {
            throw new Error('Required parameter envID was null or undefined when calling deleteApplicationAttributeMapping.');
        }

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new Error('Required parameter appID was null or undefined when calling deleteApplicationAttributeMapping.');
        }

        // verify required parameter 'samlAttrID' is not null or undefined
        if (samlAttrID === null || samlAttrID === undefined) {
            throw new Error('Required parameter samlAttrID was null or undefined when calling deleteApplicationAttributeMapping.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * By design, PingOne requests solely comprise this collection. For complete documentation, direct a browser to <a href=\'https://apidocs.pingidentity.com/pingone/platform/v1/api/\'>apidocs.pingidentity.com</a>.
     * @summary READ All Application Attribute Mappings
     * @param envID 
     * @param appID 
     */
    public async readAllApplicationAttributeMappings (envID: string, appID: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: EntityArray;  }> {
        const localVarPath = this.basePath + '/v1/environments/{envID}/applications/{appID}/attributes'
            .replace('{' + 'envID' + '}', encodeURIComponent(String(envID)))
            .replace('{' + 'appID' + '}', encodeURIComponent(String(appID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'envID' is not null or undefined
        if (envID === null || envID === undefined) {
            throw new Error('Required parameter envID was null or undefined when calling readAllApplicationAttributeMappings.');
        }

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new Error('Required parameter appID was null or undefined when calling readAllApplicationAttributeMappings.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: EntityArray;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "EntityArray");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * By design, PingOne requests solely comprise this collection. For complete documentation, direct a browser to <a href=\'https://apidocs.pingidentity.com/pingone/platform/v1/api/\'>apidocs.pingidentity.com</a>.
     * @summary READ One Application Attribute Mapping
     * @param envID 
     * @param appID 
     * @param samlAttrID 
     */
    public async readOneApplicationAttributeMapping (envID: string, appID: string, samlAttrID: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ApplicationAttributeMapping;  }> {
        const localVarPath = this.basePath + '/v1/environments/{envID}/applications/{appID}/attributes/{samlAttrID}'
            .replace('{' + 'envID' + '}', encodeURIComponent(String(envID)))
            .replace('{' + 'appID' + '}', encodeURIComponent(String(appID)))
            .replace('{' + 'samlAttrID' + '}', encodeURIComponent(String(samlAttrID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'envID' is not null or undefined
        if (envID === null || envID === undefined) {
            throw new Error('Required parameter envID was null or undefined when calling readOneApplicationAttributeMapping.');
        }

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new Error('Required parameter appID was null or undefined when calling readOneApplicationAttributeMapping.');
        }

        // verify required parameter 'samlAttrID' is not null or undefined
        if (samlAttrID === null || samlAttrID === undefined) {
            throw new Error('Required parameter samlAttrID was null or undefined when calling readOneApplicationAttributeMapping.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ApplicationAttributeMapping;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ApplicationAttributeMapping");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * By design, PingOne requests solely comprise this collection. For complete documentation, direct a browser to <a href=\'https://apidocs.pingidentity.com/pingone/platform/v1/api/\'>apidocs.pingidentity.com</a>.
     * @summary UPDATE Application Attribute Mapping
     * @param envID 
     * @param appID 
     * @param samlAttrID 
     * @param applicationAttributeMapping 
     */
    public async updateApplicationAttributeMapping (envID: string, appID: string, samlAttrID: string, applicationAttributeMapping?: ApplicationAttributeMapping, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ApplicationAttributeMapping;  }> {
        const localVarPath = this.basePath + '/v1/environments/{envID}/applications/{appID}/attributes/{samlAttrID}'
            .replace('{' + 'envID' + '}', encodeURIComponent(String(envID)))
            .replace('{' + 'appID' + '}', encodeURIComponent(String(appID)))
            .replace('{' + 'samlAttrID' + '}', encodeURIComponent(String(samlAttrID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'envID' is not null or undefined
        if (envID === null || envID === undefined) {
            throw new Error('Required parameter envID was null or undefined when calling updateApplicationAttributeMapping.');
        }

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new Error('Required parameter appID was null or undefined when calling updateApplicationAttributeMapping.');
        }

        // verify required parameter 'samlAttrID' is not null or undefined
        if (samlAttrID === null || samlAttrID === undefined) {
            throw new Error('Required parameter samlAttrID was null or undefined when calling updateApplicationAttributeMapping.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(applicationAttributeMapping, "ApplicationAttributeMapping")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ApplicationAttributeMapping;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ApplicationAttributeMapping");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
