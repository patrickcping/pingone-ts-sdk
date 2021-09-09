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

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.pingone.eu';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ManagementAPIsUsersMFAPairingKeysApiApiKeys {
}

export class ManagementAPIsUsersMFAPairingKeysApi {
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

    public setApiKey(key: ManagementAPIsUsersMFAPairingKeysApiApiKeys, value: string) {
        (this.authentications as any)[ManagementAPIsUsersMFAPairingKeysApiApiKeys[key]].apiKey = value;
    }

    set accessToken(accessToken: string | (() => string)) {
        this.authentications.bearer.accessToken = accessToken;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * By design, PingOne requests solely comprise this collection. For complete documentation, direct a browser to <a href=\'https://apidocs.pingidentity.com/pingone/platform/v1/api/\'>apidocs.pingidentity.com</a>.
     * @summary DELETE MFA Pairing Key
     * @param envID 
     * @param userID 
     * @param pairingKeyID 
     */
    public async v1EnvironmentsEnvIDUsersUserIDPairingKeysPairingKeyIDDelete (envID: string, userID: string, pairingKeyID: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/v1/environments/{envID}/users/{userID}/pairingKeys/{pairingKeyID}'
            .replace('{' + 'envID' + '}', encodeURIComponent(String(envID)))
            .replace('{' + 'userID' + '}', encodeURIComponent(String(userID)))
            .replace('{' + 'pairingKeyID' + '}', encodeURIComponent(String(pairingKeyID)));
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
            throw new Error('Required parameter envID was null or undefined when calling v1EnvironmentsEnvIDUsersUserIDPairingKeysPairingKeyIDDelete.');
        }

        // verify required parameter 'userID' is not null or undefined
        if (userID === null || userID === undefined) {
            throw new Error('Required parameter userID was null or undefined when calling v1EnvironmentsEnvIDUsersUserIDPairingKeysPairingKeyIDDelete.');
        }

        // verify required parameter 'pairingKeyID' is not null or undefined
        if (pairingKeyID === null || pairingKeyID === undefined) {
            throw new Error('Required parameter pairingKeyID was null or undefined when calling v1EnvironmentsEnvIDUsersUserIDPairingKeysPairingKeyIDDelete.');
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
     * @summary READ One MFA Pairing Key
     * @param envID 
     * @param userID 
     * @param pairingKeyID 
     * @param contentType 
     */
    public async v1EnvironmentsEnvIDUsersUserIDPairingKeysPairingKeyIDGet (envID: string, userID: string, pairingKeyID: string, contentType?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/v1/environments/{envID}/users/{userID}/pairingKeys/{pairingKeyID}'
            .replace('{' + 'envID' + '}', encodeURIComponent(String(envID)))
            .replace('{' + 'userID' + '}', encodeURIComponent(String(userID)))
            .replace('{' + 'pairingKeyID' + '}', encodeURIComponent(String(pairingKeyID)));
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
            throw new Error('Required parameter envID was null or undefined when calling v1EnvironmentsEnvIDUsersUserIDPairingKeysPairingKeyIDGet.');
        }

        // verify required parameter 'userID' is not null or undefined
        if (userID === null || userID === undefined) {
            throw new Error('Required parameter userID was null or undefined when calling v1EnvironmentsEnvIDUsersUserIDPairingKeysPairingKeyIDGet.');
        }

        // verify required parameter 'pairingKeyID' is not null or undefined
        if (pairingKeyID === null || pairingKeyID === undefined) {
            throw new Error('Required parameter pairingKeyID was null or undefined when calling v1EnvironmentsEnvIDUsersUserIDPairingKeysPairingKeyIDGet.');
        }

        localVarHeaderParams['Content-Type'] = ObjectSerializer.serialize(contentType, "string");
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
     * @summary CREATE MFA Pairing Key
     * @param envID 
     * @param userID 
     * @param contentType 
     * @param body 
     */
    public async v1EnvironmentsEnvIDUsersUserIDPairingKeysPost (envID: string, userID: string, contentType?: string, body?: object, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/v1/environments/{envID}/users/{userID}/pairingKeys'
            .replace('{' + 'envID' + '}', encodeURIComponent(String(envID)))
            .replace('{' + 'userID' + '}', encodeURIComponent(String(userID)));
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
            throw new Error('Required parameter envID was null or undefined when calling v1EnvironmentsEnvIDUsersUserIDPairingKeysPost.');
        }

        // verify required parameter 'userID' is not null or undefined
        if (userID === null || userID === undefined) {
            throw new Error('Required parameter userID was null or undefined when calling v1EnvironmentsEnvIDUsersUserIDPairingKeysPost.');
        }

        localVarHeaderParams['Content-Type'] = ObjectSerializer.serialize(contentType, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "object")
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
}