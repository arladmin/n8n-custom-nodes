import { IExecuteFunctions, IExecuteSingleFunctions, ILoadOptionsFunctions, IWebhookFunctions } from 'n8n-core';
import { IDataObject, IHttpRequestMethods } from 'n8n-workflow';
export declare function directusApiRequest(this: IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions | IWebhookFunctions, method: IHttpRequestMethods, path: string, body?: any, qs?: IDataObject, uri?: string, option?: IDataObject): Promise<any>;
export declare function validateJSON(json: string | undefined): any;
export declare function directusApiAssetRequest(this: IExecuteFunctions | IExecuteSingleFunctions, method: string, path: string, ID: string, dataPropertyName: string, qs?: IDataObject): Promise<any>;
export declare function directusApiFileRequest(this: IExecuteFunctions | IExecuteSingleFunctions | IWebhookFunctions, method: string, path: string, formData?: any, body?: any, qs?: IDataObject, uri?: string, option?: IDataObject): Promise<any>;
