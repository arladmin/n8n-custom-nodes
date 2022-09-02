"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.directusApiFileRequest = exports.directusApiAssetRequest = exports.validateJSON = exports.directusApiRequest = void 0;
async function directusApiRequest(method, path, body = {}, qs = {}, uri, option = {}) {
    const credentials = (await this.getCredentials('directusApi'));
    console.log('2. credentials : ', { credentials });
    if (credentials === undefined) {
        throw new Error('No credentials got returned!');
    }
    const params = credentials;
    const url = params.url.replace(/\/$/, '') || null;
    const accessToken = params.accessToken || null;
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:104.0) Gecko/20100101 Firefox/104.0'
        },
        method,
        qs,
        body,
        url: `${url}/${path.replace(/^\//, '')}`,
        json: true
    };
    try {
        options.headers['Authorization'] = accessToken ? `Bearer ${accessToken}` : "";
        console.log('3. options : ', { options });
        const res = await this.helpers.httpRequestWithAuthentication.call(this, 'directusApi', options);
        console.log({ res });
        return res;
    }
    catch (error) {
        throw new Error(error);
    }
}
exports.directusApiRequest = directusApiRequest;
function validateJSON(json) {
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
    const credentials = (await this.getCredentials('directusApi'));
    if (credentials === undefined) {
        throw new Error('No credentials got returned!');
    }
    const params = credentials;
    const url = params.url.replace(/\/$/, '') || null;
    const accessToken = params.accessToken || null;
    const optionsFile = {
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:104.0) Gecko/20100101 Firefox/104.0',
            Authorization: `Bearer ${accessToken}`
        },
        method,
        qs,
        uri: `${url}/files/${ID}`,
        json: true
    };
    console.log('3. optionsFile : ', { optionsFile });
    const optionsAsset = {
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:104.0) Gecko/20100101 Firefox/104.0',
            Authorization: `Bearer ${accessToken}`
        },
        method,
        qs,
        uri: `${url}/${path.replace(/^\//, '')}`,
        json: true,
        encoding: null,
    };
    console.log('4. optionsAsset : ', { optionsAsset });
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
        throw new Error(error);
    }
}
exports.directusApiAssetRequest = directusApiAssetRequest;
async function directusApiFileRequest(method, path, formData = {}, body = {}, qs = {}, uri, option = {}) {
    var _a, _b;
    const credentials = (await this.getCredentials('directusApi'));
    if (credentials === undefined) {
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
            const response = await this.helpers.request(optionsFormData);
            const file = JSON.parse(response).data;
            let res = await directusApiRequest.call(this, 'PATCH', `files/${file.id}`, body);
            Object.assign(responseFile, res);
        }
        if (method == 'PATCH') {
            const isForm = (_a = (Object.keys(formData).length > 0)) !== null && _a !== void 0 ? _a : false;
            const isBody = (_b = (Object.keys(body).length > 0)) !== null && _b !== void 0 ? _b : false;
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
        return responseFile;
    }
    catch (error) {
        throw new Error(error);
    }
}
exports.directusApiFileRequest = directusApiFileRequest;
//# sourceMappingURL=GenericFunctions.js.map