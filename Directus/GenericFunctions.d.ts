import { IExecuteFunctions, IExecuteSingleFunctions, IHookFunctions, ILoadOptionsFunctions, IWebhookFunctions } from 'n8n-core';
import { IDataObject } from 'n8n-workflow';
export declare function directusApiRequest(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions | IWebhookFunctions, method: string, path: string, body?: any, qs?: IDataObject, uri?: string, option?: IDataObject): Promise<any>;
export declare function directusApiRequestAllItems(this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions, propertyName: string, method: string, resource: string, body?: any, query?: IDataObject): Promise<any>;
export declare function validateJSON(json: string | undefined): any;
export declare function directusApiAssetRequest(this: IExecuteFunctions | IExecuteSingleFunctions, method: string, path: string, ID: string, dataPropertyName: string, qs?: IDataObject): Promise<any>;
export declare function directusApiFileRequest(this: IExecuteFunctions | IExecuteSingleFunctions | IWebhookFunctions, method: string, path: string, formData?: any, body?: any, qs?: IDataObject, uri?: string, option?: IDataObject): Promise<any>;
