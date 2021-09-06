"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.directusApiFileRequest = exports.directusApiAssetRequest = exports.validateJSON = exports.directusApiRequest = void 0;
async function directusApiRequest(method, path, body = {}, qs = {}, uri, option = {}) {
    // tslint:disable-line:no-any
    const credentials = (await this.getCredentials('directusApi'));
    if (credentials === undefined) {
        /*
        throw new NodeOperationError(
            this.getNode(),
            'No credentials got returned!'
        );
        */
        throw new Error('No credentials got returned!');
    }
    const params = credentials;
    const url = params.url.replace(/\/$/, '') || null;
    const accessToken = params.accessToken || null;
    const options = {
        headers: {
            'Content-Type': 'application/json'
        },
        method,
        qs,
        body,
        uri: uri || `${url}/${path.replace(/^\//, '')}`,
        json: true
    };
    try {
        options.headers['Authorization'] = accessToken ? `Bearer ${accessToken}` : "";
        console.log('options : ', { options });
        return await this.helpers.request(options);
    }
    catch (error) {
        //throw new NodeApiError(this.getNode(), error);
        throw new Error(error);
    }
}
exports.directusApiRequest = directusApiRequest;
function validateJSON(json) {
    // tslint:disable-line:no-any
    let result;
    try {
        result = JSON.parse(json);
    }
    catch (exception) {
        result = undefined;
    }
    return result;
}
exports.validateJSON = validateJSON;
async function directusApiAssetRequest(method, path, ID, dataPropertyName, qs = {}) {
    // tslint:disable-line:no-any
    const credentials = (await this.getCredentials('directusApi'));
    if (credentials === undefined) {
        /*
        throw new NodeOperationError(
            this.getNode(),
            'No credentials got returned!'
        );
        */
        throw new Error('No credentials got returned!');
    }
    const params = credentials;
    const url = params.url.replace(/\/$/, '') || null;
    const accessToken = params.accessToken || null;
    const optionsFile = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
        method,
        qs,
        uri: `${url}/files/${ID}`,
        json: true
    };
    console.log('optionsFile : ', { optionsFile });
    const optionsAsset = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
        method,
        qs,
        uri: `${url}/${path.replace(/^\//, '')}`,
        json: true,
        encoding: null, //"arrayBuffer",
    };
    console.log('optionsAsset : ', { optionsAsset });
    try {
        const resFile = await this.helpers.request(optionsFile);
        const file = resFile.data;
        const res = await this.helpers.request(optionsAsset);
        const binaryData = Buffer.from(res);
        console.log(file);
        const binary = {};
        binary[dataPropertyName] = await this.helpers.prepareBinaryData(binaryData, file.filename_download, file.type);
        const json = { file };
        const result = {
            json,
            binary
        };
        return result;
    }
    catch (error) {
        //throw new NodeApiError(this.getNode(), error);
        throw new Error(error);
    }
}
exports.directusApiAssetRequest = directusApiAssetRequest;
/// To: 1.) Create a new File (including file content), 2.) Update a file (file content or file object)
async function directusApiFileRequest(method, path, formData = {}, body = {}, qs = {}, uri, option = {}) {
    // tslint:disable-line:no-any
    var _a, _b;
    const credentials = (await this.getCredentials('directusApi'));
    if (credentials === undefined) {
        /*
        throw new NodeOperationError(
            this.getNode(),
            'No credentials got returned!'
        );
        */
        throw new Error('No credentials got returned!');
    }
    const params = credentials;
    const url = params.url.replace(/\/$/, '') || null;
    const accessToken = params.accessToken || null;
    const optionsFormData = {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${accessToken}`
        },
        method,
        qs,
        formData,
        uri: uri || `${url}/${path}`
    };
    const responseFile = {};
    try {
        if (method == 'POST') {
            // 1. Create a file with content
            const response = await this.helpers.request(optionsFormData);
            const file = JSON.parse(response).data;
            // 2. Update the file object with fileObject properties
            let res = await directusApiRequest.call(this, 'PATCH', `files/${file.id}`, body);
            Object.assign(responseFile, res);
        }
        if (method == 'PATCH') {
            // 1. Check if formdata and/or body are provided
            const isForm = (_a = (Object.keys(formData).length > 0)) !== null && _a !== void 0 ? _a : false;
            const isBody = (_b = (Object.keys(body).length > 0)) !== null && _b !== void 0 ? _b : false;
            // 2. Sequentially, update them both
            if (isForm) {
                const options = {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${accessToken}`
                    },
                    method,
                    qs,
                    formData,
                    uri: uri || `${url}/${path}`
                };
                const response = await this.helpers.request(optionsFormData);
                const file = JSON.parse(response).data;
                Object.assign(responseFile, file);
            }
            if (isBody) {
                let res = await directusApiRequest.call(this, 'PATCH', path, body);
                Object.assign(responseFile, res);
            }
        }
        // 3. Return the final result
        return responseFile;
    }
    catch (error) {
        //throw new NodeApiError(this.getNode(), error);
        throw new Error(error);
    }
}
exports.directusApiFileRequest = directusApiFileRequest;
//# sourceMappingURL=GenericFunctions.js.map