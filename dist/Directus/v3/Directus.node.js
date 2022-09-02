"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Directus = void 0;
const GenericFunctions_1 = require("./GenericFunctions");
const ActivityDescription_1 = require("./Descriptions/ActivityDescription");
const AssetsDescription_1 = require("./Descriptions/AssetsDescription");
const AuthDescription_1 = require("./Descriptions/AuthDescription");
const CollectionsDescription_1 = require("./Descriptions/CollectionsDescription");
const ExtensionsDescription_1 = require("./Descriptions/ExtensionsDescription");
const FieldsDescription_1 = require("./Descriptions/FieldsDescription");
const FilesDescription_1 = require("./Descriptions/FilesDescription");
const FoldersDescription_1 = require("./Descriptions/FoldersDescription");
const ItemsDescription_1 = require("./Descriptions/ItemsDescription");
const PermissionsDescription_1 = require("./Descriptions/PermissionsDescription");
const PresetsDescription_1 = require("./Descriptions/PresetsDescription");
const RelationsDescription_1 = require("./Descriptions/RelationsDescription");
const RevisionsDescription_1 = require("./Descriptions/RevisionsDescription");
const RolesDescription_1 = require("./Descriptions/RolesDescription");
const ServerDescription_1 = require("./Descriptions/ServerDescription");
const SettingsDescription_1 = require("./Descriptions/SettingsDescription");
const UsersDescription_1 = require("./Descriptions/UsersDescription");
const UtilsDescription_1 = require("./Descriptions/UtilsDescription");
const WebhooksDescription_1 = require("./Descriptions/WebhooksDescription");
class Directus {
    constructor() {
        this.description = {
            displayName: "Directus",
            name: "directus",
            icon: "file:directus.svg",
            group: ["transform"],
            version: 1,
            description: "Consume Directus API",
            subtitle: '={{$parameter["operation"] + " : " + $parameter["resource"]}}',
            defaults: {
                name: "Directus",
                color: "#2ECFA8",
            },
            inputs: ["main"],
            outputs: ["main"],
            credentials: [
                {
                    name: "directusApi",
                    required: true,
                },
            ],
            properties: [
                {
                    displayName: "Resource",
                    name: "resource",
                    type: "options",
                    options: [
                        {
                            name: "Activity",
                            value: "activity",
                        },
                        {
                            name: "Assets",
                            value: "assets",
                        },
                        {
                            name: "Authentication",
                            value: "auth",
                        },
                        {
                            name: "Collections",
                            value: "collections",
                        },
                        {
                            name: "Extensions",
                            value: "extensions",
                        },
                        {
                            name: "Fields",
                            value: "fields",
                        },
                        {
                            name: "Files",
                            value: "files",
                        },
                        {
                            name: "Folders",
                            value: "folders",
                        },
                        {
                            name: "Items",
                            value: "items",
                        },
                        {
                            name: "Permissions",
                            value: "permissions",
                        },
                        {
                            name: "Presets",
                            value: "presets",
                        },
                        {
                            name: "Relations",
                            value: "relations",
                        },
                        {
                            name: "Revisions",
                            value: "revisions",
                        },
                        {
                            name: "Roles",
                            value: "roles",
                        },
                        {
                            name: "Server",
                            value: "server",
                        },
                        {
                            name: "Settings",
                            value: "settings",
                        },
                        {
                            name: "Users",
                            value: "users",
                        },
                        {
                            name: "Utilities",
                            value: "utils",
                        },
                        {
                            name: "Webhooks",
                            value: "webhooks",
                        },
                    ],
                    default: "items",
                    required: true,
                    description: "Resource to consume",
                },
                ...ActivityDescription_1.activityOperations,
                ...ActivityDescription_1.activityFields,
                ...AssetsDescription_1.assetsOperations,
                ...AssetsDescription_1.assetsFields,
                ...AuthDescription_1.authOperations,
                ...AuthDescription_1.authFields,
                ...CollectionsDescription_1.collectionsOperations,
                ...CollectionsDescription_1.collectionsFields,
                ...ExtensionsDescription_1.extensionsOperations,
                ...ExtensionsDescription_1.extensionsFields,
                ...FieldsDescription_1.fieldsOperations,
                ...FieldsDescription_1.fieldsFields,
                ...FilesDescription_1.filesOperations,
                ...FilesDescription_1.filesFields,
                ...FoldersDescription_1.foldersOperations,
                ...FoldersDescription_1.foldersFields,
                ...ItemsDescription_1.itemsOperations,
                ...ItemsDescription_1.itemsFields,
                ...PermissionsDescription_1.permissionsOperations,
                ...PermissionsDescription_1.permissionsFields,
                ...PresetsDescription_1.presetsOperations,
                ...PresetsDescription_1.presetsFields,
                ...RelationsDescription_1.relationsOperations,
                ...RelationsDescription_1.relationsFields,
                ...RevisionsDescription_1.revisionsOperations,
                ...RevisionsDescription_1.revisionsFields,
                ...RolesDescription_1.rolesOperations,
                ...RolesDescription_1.rolesFields,
                ...ServerDescription_1.serverOperations,
                ...ServerDescription_1.serverFields,
                ...SettingsDescription_1.settingsOperations,
                ...SettingsDescription_1.settingsFields,
                ...UsersDescription_1.usersOperations,
                ...UsersDescription_1.usersFields,
                ...UtilsDescription_1.utilsOperations,
                ...UtilsDescription_1.utilsFields,
                ...WebhooksDescription_1.webhooksOperations,
                ...WebhooksDescription_1.webhooksFields,
            ],
        };
        this.methods = {
            loadOptions: {
                async getCollections() {
                    try {
                        const returnData = [];
                        const collections = await GenericFunctions_1.directusApiRequest.call(this, "GET", "collections");
                        console.log("1. collections :");
                        for (const collection of collections.data) {
                            console.log(collection.collection);
                            const name = collection.collection;
                            const nameInCapital = name.charAt(0).toUpperCase() + name.slice(1);
                            returnData.push({
                                name: nameInCapital,
                                value: name,
                            });
                        }
                        return returnData;
                    }
                    catch (error) {
                        throw new Error(error);
                    }
                },
                async getCustomCollections() {
                    var _a, _b;
                    try {
                        const returnData = [];
                        const collections = await GenericFunctions_1.directusApiRequest.call(this, "GET", "collections");
                        console.log("1. collections :");
                        for (const collection of collections.data) {
                            console.log(collection.collection);
                            const name = collection.collection;
                            const nameInCapital = name.charAt(0).toUpperCase() + name.slice(1);
                            const isSystem = ((_b = (_a = collection.meta) === null || _a === void 0 ? void 0 : _a.system) !== null && _b !== void 0 ? _b : false);
                            if (!isSystem) {
                                returnData.push({
                                    name: nameInCapital,
                                    value: name,
                                });
                            }
                        }
                        return returnData;
                    }
                    catch (error) {
                        throw new Error(error);
                    }
                },
                async getRelationalFields() {
                    try {
                        const collection = this.getCurrentNodeParameter("collection");
                        const returnData = [];
                        const fields = await GenericFunctions_1.directusApiRequest.call(this, "GET", `relations/${collection}`);
                        for (const fieldObject of fields.data) {
                            returnData.push({
                                name: fieldObject.field,
                                value: fieldObject.field,
                            });
                        }
                        return returnData;
                    }
                    catch (error) {
                        throw new Error(error);
                    }
                },
                async getFieldsInCollection() {
                    var _a;
                    try {
                        const collection = (_a = this.getCurrentNodeParameter("collection")) !== null && _a !== void 0 ? _a : `directus_${this.getNodeParameter("resource", 0)}`;
                        const returnData = [];
                        const fields = await GenericFunctions_1.directusApiRequest.call(this, "GET", `fields/${collection}`);
                        for (const fieldObject of fields.data) {
                            const nameInCapital = fieldObject.field.charAt(0).toUpperCase() +
                                fieldObject.field.slice(1);
                            returnData.push({
                                name: nameInCapital,
                                value: fieldObject.field,
                            });
                        }
                        return returnData;
                    }
                    catch (error) {
                        throw new Error(error);
                    }
                },
                async getRoles() {
                    try {
                        const returnData = [];
                        const roles = await GenericFunctions_1.directusApiRequest.call(this, "GET", `roles`);
                        for (const roleObject of roles.data) {
                            const nameInCapital = roleObject.name.charAt(0).toUpperCase() +
                                roleObject.name.slice(1);
                            returnData.push({
                                name: nameInCapital,
                                value: roleObject.id,
                            });
                        }
                        return returnData;
                    }
                    catch (error) {
                        throw new Error(error);
                    }
                },
            },
        };
    }
    async execute() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65, _66, _67, _68, _69, _70, _71, _72, _73, _74, _75, _76, _77, _78, _79, _80, _81, _82, _83, _84, _85, _86, _87, _88, _89, _90, _91, _92, _93, _94, _95, _96, _97, _98, _99, _100, _101, _102, _103, _104, _105, _106, _107, _108, _109, _110, _111, _112, _113, _114, _115, _116, _117, _118, _119, _120, _121, _122, _123, _124, _125, _126, _127, _128, _129, _130, _131, _132, _133, _134, _135, _136, _137, _138, _139, _140, _141, _142, _143, _144, _145, _146, _147, _148, _149, _150, _151, _152, _153, _154, _155, _156, _157, _158, _159, _160, _161, _162, _163, _164, _165, _166, _167, _168, _169, _170, _171, _172, _173, _174, _175, _176;
        const credentials = (await this.getCredentials("directusApi"));
        const items = this.getInputData();
        const length = items.length;
        const returnItems = [];
        const returnData = [];
        let responseData;
        let qs = {};
        let body = {};
        let returnAll = false;
        let endpoint = "";
        let requestMethod;
        const resource = this.getNodeParameter("resource", 0);
        const operation = this.getNodeParameter("operation", 0);
        for (let i = 0; i < length; i++) {
            if (resource === "activity") {
                if (operation == "get") {
                    try {
                        const ID = this.getNodeParameter("id", i);
                        const additionalFields = (_a = this.getNodeParameter("additionalFields", i)) !== null && _a !== void 0 ? _a : null;
                        const fields = (_b = additionalFields["fields"]) !== null && _b !== void 0 ? _b : {};
                        const meta = (_c = additionalFields["meta"]) !== null && _c !== void 0 ? _c : null;
                        requestMethod = "GET";
                        endpoint = `activity/${ID}`;
                        let response;
                        if (fields)
                            qs["fields"] = meta;
                        if (meta)
                            qs["meta"] = meta;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_d = response.data) !== null && _d !== void 0 ? _d : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "list") {
                    try {
                        returnAll =
                            (_e = this.getNodeParameter("returnAll", i)) !== null && _e !== void 0 ? _e : false;
                        const splitIntoItems = (_f = this.getNodeParameter("splitIntoItems", i)) !== null && _f !== void 0 ? _f : false;
                        const parametersAreJson = (_g = this.getNodeParameter("jsonParameters", i)) !== null && _g !== void 0 ? _g : false;
                        const additionalFields = !parametersAreJson
                            ? this.getNodeParameter("additionalFields", i)
                            : {};
                        if (additionalFields && additionalFields.aggregate) {
                            const aggregation = additionalFields.aggregate
                                .aggregationFunctions;
                            if (aggregation) {
                                aggregation.forEach((a) => {
                                    qs[`aggregate[${a.name}]`] = a.value;
                                });
                            }
                        }
                        requestMethod = "GET";
                        endpoint = `activity`;
                        let response;
                        if (!parametersAreJson && returnAll === true) {
                            qs.limit = -1;
                        }
                        else if (!parametersAreJson) {
                            qs.limit =
                                this.getNodeParameter("limit", i) != undefined
                                    ? this.getNodeParameter("limit", i)
                                    : 10;
                        }
                        else {
                            qs.limit = null;
                        }
                        if (parametersAreJson) {
                            const queryParametersJson = this.getNodeParameter("queryParametersJson", i);
                            if (typeof queryParametersJson == "string") {
                                qs = JSON.parse(queryParametersJson);
                            }
                            else {
                                qs = JSON.parse(JSON.stringify(queryParametersJson));
                            }
                        }
                        else {
                            for (const key in additionalFields) {
                                if (["deep", "filter"].includes(key)) {
                                    const object = additionalFields[key];
                                    if (typeof object == "string") {
                                        qs[key] = JSON.stringify(JSON.parse(object));
                                    }
                                    else {
                                        qs[key] = JSON.stringify(object);
                                    }
                                }
                                else {
                                    qs[key] = additionalFields[key];
                                }
                            }
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_h = response.data) !== null && _h !== void 0 ? _h : {};
                        }
                        const exportType = (_j = additionalFields.export) !== null && _j !== void 0 ? _j : null;
                        const binary = {};
                        if (exportType) {
                            const binaryPropertyName = additionalFields.binaryPropertyName || "data";
                            let fileName = additionalFields.fileName || "export";
                            let binaryData, mimeType, fileExtension;
                            if (exportType == "json") {
                                binaryData = Buffer.from(JSON.stringify(response));
                                mimeType = "application/json";
                                fileExtension = "json";
                                fileName = `${fileName}.${fileExtension}`;
                            }
                            else if (exportType == "csv") {
                                binaryData = Buffer.from(response);
                                mimeType = "text/csv";
                                fileExtension = "csv";
                                fileName = `${fileName}.${fileExtension}`;
                            }
                            else if (exportType == "xml") {
                                binaryData = Buffer.from(response);
                                mimeType = "application/xml";
                                fileExtension = "xml";
                                fileName = `${fileName}.${fileExtension}`;
                            }
                            else {
                                binaryData = Buffer.alloc(0);
                                mimeType = "";
                            }
                            binary[binaryPropertyName] =
                                await this.helpers.prepareBinaryData(binaryData, fileName, mimeType);
                        }
                        if (splitIntoItems === true && Array.isArray(responseData)) {
                            responseData.forEach((item, index) => {
                                if (exportType) {
                                    returnItems.push({ json: item, binary });
                                }
                                else {
                                    returnItems.push({ json: item });
                                }
                            });
                        }
                        else {
                            if (exportType) {
                                returnItems.push({ json: responseData, binary });
                            }
                            else {
                                returnItems.push({ json: responseData });
                            }
                        }
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "create") {
                    try {
                        const parametersAreJson = (_k = this.getNodeParameter("jsonParameters", i)) !== null && _k !== void 0 ? _k : false;
                        const additionalFields = !parametersAreJson
                            ? this.getNodeParameter("additionalFields", i)
                            : {};
                        const meta = (_l = additionalFields["meta"]) !== null && _l !== void 0 ? _l : "";
                        requestMethod = "POST";
                        endpoint = `activity/comment`;
                        if (parametersAreJson) {
                            const bodyParametersJson = this.getNodeParameter("bodyParametersJson", i);
                            if (typeof bodyParametersJson == "string") {
                                body = JSON.parse(bodyParametersJson);
                            }
                            else {
                                body = JSON.parse(JSON.stringify(bodyParametersJson));
                            }
                        }
                        else {
                            const collection = this.getNodeParameter("collection", i);
                            const comment = this.getNodeParameter("comment", i);
                            const item = this.getNodeParameter("item", i);
                            for (const key in additionalFields) {
                                qs[key] = additionalFields[key];
                            }
                            body["comment"] = comment;
                            body["collection"] = collection;
                            body["item"] = item;
                        }
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_m = response.data) !== null && _m !== void 0 ? _m : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "update") {
                    try {
                        const comment = this.getNodeParameter("comment", i);
                        const ID = this.getNodeParameter("id", i);
                        const additionalFields = (_o = this.getNodeParameter("additionalFields", i)) !== null && _o !== void 0 ? _o : {};
                        const meta = (_p = additionalFields["meta"]) !== null && _p !== void 0 ? _p : "";
                        requestMethod = "PATCH";
                        endpoint = `activity/comment/${ID}`;
                        if (meta)
                            qs["meta"] = meta;
                        body["comment"] = comment;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_q = response.data) !== null && _q !== void 0 ? _q : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "delete") {
                    try {
                        const ID = this.getNodeParameter("id", i);
                        requestMethod = "GET";
                        endpoint = `activity/comment/${ID}`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_r = response.data) !== null && _r !== void 0 ? _r : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
            }
            if (resource === "assets") {
                if (operation == "get") {
                    try {
                        const parametersAreJson = this.getNodeParameter("jsonParameters", i);
                        const additionalFields = !parametersAreJson
                            ? this.getNodeParameter("additionalFields", i)
                            : {};
                        const ID = (_s = this.getNodeParameter("id", i)) !== null && _s !== void 0 ? _s : null;
                        const dataPropertyName = this.getNodeParameter("binaryPropertyName", i);
                        const includeFileData = this.getNodeParameter("includeFileData", i);
                        requestMethod = "GET";
                        endpoint = `assets`;
                        let response;
                        console.log({ ID });
                        if (parametersAreJson) {
                            const queryParametersJson = this.getNodeParameter("queryParametersJson", i);
                            if (typeof queryParametersJson == "string") {
                                body = JSON.parse(queryParametersJson);
                            }
                            else {
                                body = JSON.parse(JSON.stringify(queryParametersJson));
                            }
                        }
                        else {
                            for (const key of Object.keys(additionalFields)) {
                                if (key != "id" && key != "transforms") {
                                    qs[key] = additionalFields[key];
                                }
                                if (key == "transforms") {
                                    if (typeof additionalFields[key] == "string") {
                                        qs[key] = JSON.parse(additionalFields[key]);
                                    }
                                    else {
                                        qs[key] = JSON.parse(JSON.stringify(additionalFields[key]));
                                    }
                                }
                            }
                        }
                        console.log({ ID });
                        console.log("Getting asset");
                        response = await GenericFunctions_1.directusApiAssetRequest.call(this, requestMethod, endpoint, ID, dataPropertyName, qs);
                        if (!includeFileData)
                            delete response.json["file"];
                        responseData = response;
                        returnItems.push(responseData);
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
            }
            if (resource === "auth") {
                if (operation == "login") {
                    try {
                        const parametersAreJson = (_t = this.getNodeParameter("jsonParameters", i)) !== null && _t !== void 0 ? _t : false;
                        const additionalFields = !parametersAreJson
                            ? this.getNodeParameter("additionalFields", i)
                            : {};
                        const email = !parametersAreJson
                            ? this.getNodeParameter("email", i)
                            : "";
                        const password = !parametersAreJson
                            ? this.getNodeParameter("password", i)
                            : "";
                        requestMethod = "POST";
                        endpoint = `auth/login`;
                        let response;
                        if (parametersAreJson) {
                            const data = (_u = this.getNodeParameter("bodyParametersJson", i)) !== null && _u !== void 0 ? _u : {};
                            if (typeof data == "string") {
                                body = JSON.parse(data);
                            }
                            else {
                                body = JSON.parse(JSON.stringify(data));
                            }
                        }
                        else {
                            body["email"] = email;
                            body["password"] = password;
                            for (const key in additionalFields) {
                                if (["fields"].includes(key)) {
                                    const object = additionalFields[key];
                                    if (typeof object == "string") {
                                        body[key] = JSON.stringify(JSON.parse(object));
                                    }
                                    else {
                                        body[key] = JSON.stringify(object);
                                    }
                                }
                                else {
                                    body[key] = additionalFields[key];
                                }
                            }
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_v = response.data) !== null && _v !== void 0 ? _v : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "logout") {
                    try {
                        const refreshToken = this.getNodeParameter("data", i);
                        requestMethod = "POST";
                        endpoint = `auth/logout`;
                        let response;
                        body["refresh_token"] = refreshToken;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_w = response.data) !== null && _w !== void 0 ? _w : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "refreshToken") {
                    try {
                        const refreshToken = this.getNodeParameter("refreshToken", i);
                        requestMethod = "POST";
                        endpoint = `auth/refresh`;
                        let response;
                        body["refresh_token"] = refreshToken;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_x = response.data) !== null && _x !== void 0 ? _x : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "requestReset") {
                    try {
                        const email = this.getNodeParameter("email", i);
                        const additionalFields = this.getNodeParameter("additionalFields", i) ||
                            {};
                        const resetUrl = (_y = additionalFields === null || additionalFields === void 0 ? void 0 : additionalFields["resetUrl"]) !== null && _y !== void 0 ? _y : null;
                        requestMethod = "POST";
                        endpoint = `auth/password/request`;
                        let response;
                        body["email"] = email;
                        if (resetUrl)
                            body["reset_url"] = resetUrl;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_z = response.data) !== null && _z !== void 0 ? _z : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "resetPassword") {
                    try {
                        const parametersAreJson = (_0 = this.getNodeParameter("jsonParameters", i)) !== null && _0 !== void 0 ? _0 : false;
                        requestMethod = "POST";
                        endpoint = `auth/password/reset`;
                        let response;
                        if (parametersAreJson) {
                            const bodyParametersJson = (_1 = this.getNodeParameter("bodyParametersJson", i)) !== null && _1 !== void 0 ? _1 : {};
                            if (typeof bodyParametersJson == "string") {
                                body = JSON.parse(bodyParametersJson);
                            }
                            else {
                                body = JSON.parse(JSON.stringify(bodyParametersJson));
                            }
                        }
                        else {
                            const token = (_2 = this.getNodeParameter("token", i)) !== null && _2 !== void 0 ? _2 : "";
                            const password = (_3 = this.getNodeParameter("password", i)) !== null && _3 !== void 0 ? _3 : "";
                            body["token"] = token;
                            body["password"] = password;
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_4 = response.data) !== null && _4 !== void 0 ? _4 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "list") {
                    try {
                        const splitIntoItems = (_5 = this.getNodeParameter("splitIntoItems", i)) !== null && _5 !== void 0 ? _5 : false;
                        requestMethod = "GET";
                        endpoint = `auth/oauth`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        console.log(response);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_6 = response.data) !== null && _6 !== void 0 ? _6 : {};
                        }
                        if (splitIntoItems === true && Array.isArray(responseData)) {
                            responseData.forEach((item, index) => {
                                returnItems.push({ json: item });
                            });
                        }
                        else {
                            returnItems.push({ json: responseData });
                        }
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "startOauthFlow") {
                    try {
                        const provider = this.getNodeParameter("provider", i);
                        requestMethod = "GET";
                        endpoint = `auth/oauth/${provider}`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_7 = response.data) !== null && _7 !== void 0 ? _7 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
            }
            if (resource === "collections") {
                if (operation == "get") {
                    try {
                        const collection = this.getNodeParameter("collection", i);
                        requestMethod = "GET";
                        endpoint = `collections/${collection}`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_8 = response.data) !== null && _8 !== void 0 ? _8 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "list") {
                    try {
                        const splitIntoItems = (_9 = this.getNodeParameter("splitIntoItems", i)) !== null && _9 !== void 0 ? _9 : false;
                        requestMethod = "GET";
                        endpoint = `collections`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_10 = response.data) !== null && _10 !== void 0 ? _10 : {};
                        }
                        if (splitIntoItems === true && Array.isArray(responseData)) {
                            responseData.forEach((item, index) => {
                                returnItems.push({ json: item });
                            });
                        }
                        else {
                            returnItems.push({ json: responseData });
                        }
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "create") {
                    try {
                        const parametersAreJson = (_11 = this.getNodeParameter("jsonParameters", i)) !== null && _11 !== void 0 ? _11 : false;
                        const collection = !parametersAreJson
                            ? this.getNodeParameter("collection", i)
                            : null;
                        const additionalFields = !parametersAreJson
                            ? this.getNodeParameter("additionalFields", i)
                            : {};
                        const data = parametersAreJson
                            ? this.getNodeParameter("bodyParametersJson", i)
                            : {};
                        requestMethod = "POST";
                        endpoint = `collections`;
                        if (parametersAreJson) {
                            if (typeof data == "string") {
                                body = JSON.parse(data);
                            }
                            else {
                                body = JSON.parse(JSON.stringify(data));
                            }
                        }
                        else {
                            for (const key in data) {
                                if (["fields"].includes(key)) {
                                    const object = additionalFields[key];
                                    if (typeof object == "string") {
                                        body[key] = JSON.stringify(JSON.parse(object));
                                    }
                                    else {
                                        body[key] = JSON.stringify(object);
                                    }
                                }
                                else {
                                    body[key] = additionalFields[key];
                                }
                            }
                            body["collection"] = collection;
                        }
                        let response;
                        response =
                            (_12 = (await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs))) !== null && _12 !== void 0 ? _12 : null;
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_14 = (_13 = response.data) !== null && _13 !== void 0 ? _13 : {}) !== null && _14 !== void 0 ? _14 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "update") {
                    try {
                        const collection = this.getNodeParameter("collection", i);
                        const additionalFields = (_15 = this.getNodeParameter("additionalFields", i)) !== null && _15 !== void 0 ? _15 : {};
                        const data = additionalFields["meta"];
                        requestMethod = "PATCH";
                        endpoint = `collections/${collection}`;
                        let response;
                        if (typeof data == "string") {
                            body["meta"] = JSON.parse(data);
                        }
                        else {
                            body["meta"] = JSON.parse(JSON.stringify(data));
                        }
                        body["collection"] = collection;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_16 = response.data) !== null && _16 !== void 0 ? _16 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "delete") {
                    try {
                        const collection = this.getNodeParameter("collection", i);
                        requestMethod = "DELETE";
                        endpoint = `collections/${collection}`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_17 = response.data) !== null && _17 !== void 0 ? _17 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
            }
            if (resource === "extensions") {
                if (operation == "list") {
                    try {
                        const type = this.getNodeParameter("type", i);
                        const splitIntoItems = (_18 = this.getNodeParameter("splitIntoItems", i)) !== null && _18 !== void 0 ? _18 : false;
                        requestMethod = "GET";
                        endpoint = `extensions/${type}`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_19 = response.data) !== null && _19 !== void 0 ? _19 : {};
                        }
                        if (splitIntoItems === true && Array.isArray(responseData)) {
                            responseData.forEach((item, index) => {
                                returnItems.push({ json: item });
                            });
                        }
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
            }
            if (resource === "fields") {
                if (operation === "create") {
                    try {
                        const collection = this.getNodeParameter("collection", i);
                        const parametersAreJson = this.getNodeParameter("jsonParameters", 0);
                        const type = this.getNodeParameter("type", i);
                        const field = this.getNodeParameter("field", i);
                        requestMethod = "POST";
                        endpoint = `fields/${collection}`;
                        body = { type, field };
                        const additionalFields = (_20 = this.getNodeParameter("additionalFields", i)) !== null && _20 !== void 0 ? _20 : null;
                        for (const key of Object.keys(additionalFields)) {
                            body[key] = additionalFields[key];
                        }
                        if (parametersAreJson) {
                            const bodyParametersJson = additionalFields.bodyParametersJson;
                            if (typeof bodyParametersJson == "string") {
                                body = JSON.parse(bodyParametersJson);
                            }
                            else {
                                body = JSON.parse(JSON.stringify(body));
                            }
                        }
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        responseData = (_21 = response.data) !== null && _21 !== void 0 ? _21 : {};
                        const timerLabel = `${resource} | ${operation}`;
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation === "get") {
                    try {
                        const collection = this.getNodeParameter("collection", i);
                        const field = this.getNodeParameter("field", i);
                        requestMethod = "GET";
                        endpoint = `fields/${collection}/${field}`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        responseData = (_22 = response.data) !== null && _22 !== void 0 ? _22 : {};
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation === "list") {
                    try {
                        const collection = this.getNodeParameter("collection", i);
                        requestMethod = "GET";
                        endpoint = `fields/${collection}`;
                        const splitIntoItems = (_23 = this.getNodeParameter("splitIntoItems", i)) !== null && _23 !== void 0 ? _23 : null;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        responseData = (_24 = response.data) !== null && _24 !== void 0 ? _24 : {};
                        const timerLabel = `${resource} | ${operation}`;
                        console.log("Start");
                        console.time(timerLabel);
                        if (splitIntoItems === true && Array.isArray(responseData)) {
                            responseData.forEach((item, index) => {
                                returnItems.push({ json: item });
                                console.log("1.");
                                console.log(index);
                                console.timeLog(timerLabel);
                            });
                            console.log("2.");
                            console.timeLog(timerLabel);
                        }
                        else {
                            returnItems.push({ json: responseData });
                            console.log("3.");
                            console.timeLog(timerLabel);
                        }
                        console.log("End");
                        console.timeEnd(timerLabel);
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation === "listAll") {
                    try {
                        requestMethod = "GET";
                        endpoint = `fields`;
                        const splitIntoItems = (_25 = this.getNodeParameter("splitIntoItems", i)) !== null && _25 !== void 0 ? _25 : null;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        responseData = (_26 = response.data) !== null && _26 !== void 0 ? _26 : {};
                        const timerLabel = `${resource} | ${operation}`;
                        console.time(timerLabel);
                        if (splitIntoItems === true && Array.isArray(responseData)) {
                            responseData.forEach((item, index) => {
                                returnItems.push({ json: item });
                            });
                        }
                        else {
                            returnItems.push({ json: responseData });
                        }
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation === "update") {
                    try {
                        const collection = this.getNodeParameter("collection", i);
                        const parametersAreJson = (_27 = this.getNodeParameter("jsonParameters", i)) !== null && _27 !== void 0 ? _27 : false;
                        const additionalFields = !parametersAreJson
                            ? this.getNodeParameter("additionalFields", i)
                            : {};
                        const field = this.getNodeParameter("field", i);
                        requestMethod = "PATCH";
                        endpoint = `fields/${collection}/${field}`;
                        if (parametersAreJson) {
                            const bodyParametersJson = this.getNodeParameter("bodyParametersJson", i);
                            if (typeof bodyParametersJson == "string") {
                                body = JSON.parse(bodyParametersJson);
                            }
                            else {
                                body = JSON.parse(JSON.stringify(bodyParametersJson));
                            }
                        }
                        else {
                            for (const key of Object.keys(additionalFields)) {
                                body[key] = additionalFields[key];
                            }
                        }
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        responseData = (_28 = response.data) !== null && _28 !== void 0 ? _28 : {};
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation === "delete") {
                    try {
                        const collection = this.getNodeParameter("collection", i);
                        const field = this.getNodeParameter("field", i);
                        requestMethod = "DELETE";
                        endpoint = `fields/${collection}/${field}`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        responseData = response;
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
            }
            if (resource === "files") {
                if (operation == "get") {
                    try {
                        const ID = this.getNodeParameter("id", i);
                        requestMethod = "GET";
                        endpoint = `files/${ID}`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_29 = response.data) !== null && _29 !== void 0 ? _29 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "list") {
                    try {
                        returnAll =
                            (_30 = this.getNodeParameter("returnAll", i)) !== null && _30 !== void 0 ? _30 : null;
                        const splitIntoItems = (_31 = this.getNodeParameter("splitIntoItems", i)) !== null && _31 !== void 0 ? _31 : null;
                        const parametersAreJson = this.getNodeParameter("jsonParameters", i);
                        const additionalFields = !parametersAreJson
                            ? this.getNodeParameter("additionalFields", i)
                            : {};
                        if (additionalFields && additionalFields.aggregate) {
                            const aggregation = additionalFields.aggregate.aggregationFunctions;
                            if (aggregation) {
                                aggregation.forEach(a => {
                                    qs[`aggregate[${a.name}]`] = a.value;
                                });
                            }
                        }
                        requestMethod = "GET";
                        endpoint = `files`;
                        let response;
                        if (!parametersAreJson && returnAll === true) {
                            qs.limit = -1;
                        }
                        else if (!parametersAreJson) {
                            qs.limit =
                                this.getNodeParameter("limit", i) != undefined
                                    ? this.getNodeParameter("limit", i)
                                    : 10;
                        }
                        else {
                            qs.limit = null;
                        }
                        for (const key of Object.keys(additionalFields)) {
                            if (!["deep", "filter"].includes(key)) {
                                qs[key] = additionalFields[key];
                            }
                            else {
                                const data = additionalFields[key];
                                if (data && typeof data == "string") {
                                    qs[key] = JSON.parse(data);
                                }
                                else if (data && typeof data != "string") {
                                    qs[key] = JSON.parse(JSON.stringify(data));
                                }
                                else {
                                    qs[key] = "";
                                }
                            }
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_32 = response.data) !== null && _32 !== void 0 ? _32 : {};
                        }
                        if (splitIntoItems === true && Array.isArray(responseData)) {
                            responseData.forEach((item, index) => {
                                returnItems.push({ json: item });
                            });
                        }
                        else {
                            returnItems.push({ json: responseData });
                        }
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "create") {
                    try {
                        const sendBinaryData = this.getNodeParameter("sendBinaryData", i);
                        const additionalFields = (_33 = this.getNodeParameter("additionalFields", i)) !== null && _33 !== void 0 ? _33 : null;
                        const data = (_34 = additionalFields.data) !== null && _34 !== void 0 ? _34 : {};
                        requestMethod = "POST";
                        endpoint = `files`;
                        let response;
                        if (sendBinaryData) {
                            const item = items[i].binary;
                            const binaryPropertyName = (_35 = this.getNodeParameter("binaryPropertyName", i)) !== null && _35 !== void 0 ? _35 : null;
                            const binaryData = item[binaryPropertyName];
                            const binaryDataBuffer = await this.helpers.getBinaryDataBuffer(i, binaryPropertyName);
                            const formData = {};
                            Object.assign(formData, {
                                file: {
                                    value: binaryDataBuffer,
                                    options: {
                                        filename: binaryData.fileName,
                                        contentType: binaryData.mimeType,
                                    },
                                },
                            });
                            if (data && typeof data == "string") {
                                body = JSON.parse(data);
                            }
                            else if (data && typeof data != "string") {
                                body = JSON.parse(JSON.stringify(data));
                            }
                            else {
                                body = {};
                            }
                            response = await GenericFunctions_1.directusApiFileRequest.call(this, requestMethod, endpoint, formData, body);
                        }
                        else {
                            if (data && typeof data == "string") {
                                body = JSON.parse(data);
                            }
                            else if (data && typeof data != "string") {
                                body = JSON.parse(JSON.stringify(data));
                            }
                            else {
                                body = {};
                            }
                            response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body);
                        }
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = JSON.parse(JSON.stringify(response)).data;
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "importFile") {
                    try {
                        const URL = this.getNodeParameter("url", i);
                        const additionalFields = (_36 = this.getNodeParameter("additionalFields", i)) !== null && _36 !== void 0 ? _36 : null;
                        const data = (_37 = additionalFields === null || additionalFields === void 0 ? void 0 : additionalFields.data) !== null && _37 !== void 0 ? _37 : null;
                        requestMethod = "POST";
                        endpoint = `files/import`;
                        let response;
                        if (typeof data == "string") {
                            body["data"] = JSON.parse(data);
                            body["url"] = URL;
                        }
                        else if (data && typeof data != "string") {
                            body["data"] = JSON.parse(JSON.stringify(data));
                            body["url"] = URL;
                        }
                        else {
                            body["url"] = URL;
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_38 = response.data) !== null && _38 !== void 0 ? _38 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "update") {
                    try {
                        const ID = this.getNodeParameter("id", i);
                        const sendBinaryData = this.getNodeParameter("sendBinaryData", i);
                        const additionalFields = (_39 = this.getNodeParameter("additionalFields", i)) !== null && _39 !== void 0 ? _39 : null;
                        const data = (_40 = additionalFields.data) !== null && _40 !== void 0 ? _40 : {};
                        requestMethod = "PATCH";
                        endpoint = `files/${ID}`;
                        let response;
                        if (sendBinaryData) {
                            const item = items[i].binary;
                            const binaryPropertyName = (_41 = this.getNodeParameter("binaryPropertyName", i)) !== null && _41 !== void 0 ? _41 : null;
                            const binaryData = item[binaryPropertyName];
                            const binaryDataBuffer = await this.helpers.getBinaryDataBuffer(i, binaryPropertyName);
                            const formData = {};
                            Object.assign(formData, {
                                file: {
                                    value: binaryDataBuffer,
                                    options: {
                                        filename: binaryData.fileName,
                                        contentType: binaryData.mimeType,
                                    },
                                },
                            });
                            if (data && typeof data == "string") {
                                body = JSON.parse(data);
                            }
                            else if (data && typeof data != "string") {
                                body = JSON.parse(JSON.stringify(data));
                            }
                            else {
                                body = {};
                            }
                            response = await GenericFunctions_1.directusApiFileRequest.call(this, requestMethod, endpoint, formData, body);
                        }
                        else {
                            if (data && typeof data == "string") {
                                body = JSON.parse(data);
                            }
                            else if (data && typeof data != "string") {
                                body = JSON.parse(JSON.stringify(data));
                            }
                            else {
                                body = {};
                            }
                            response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body);
                        }
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = JSON.parse(JSON.stringify(response)).data;
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "updateMultiple") {
                    try {
                        const data = this.getNodeParameter("data", i);
                        requestMethod = "PATCH";
                        endpoint = `files`;
                        let response;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_42 = response.data) !== null && _42 !== void 0 ? _42 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "delete") {
                    try {
                        const ID = this.getNodeParameter("id", i);
                        requestMethod = "DELETE";
                        endpoint = `files/${ID}`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_43 = response.data) !== null && _43 !== void 0 ? _43 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "deleteMultiple") {
                    try {
                        const data = this.getNodeParameter("keys", i);
                        requestMethod = "DELETE";
                        endpoint = `files`;
                        let response;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_44 = response.data) !== null && _44 !== void 0 ? _44 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
            }
            if (resource === "folders") {
                if (operation == "get") {
                    try {
                        const ID = this.getNodeParameter("id", i);
                        requestMethod = "GET";
                        endpoint = `folders/${ID}`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_45 = response.data) !== null && _45 !== void 0 ? _45 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "list") {
                    try {
                        returnAll =
                            (_46 = this.getNodeParameter("returnAll", i)) !== null && _46 !== void 0 ? _46 : false;
                        const splitIntoItems = (_47 = this.getNodeParameter("splitIntoItems", i)) !== null && _47 !== void 0 ? _47 : false;
                        const parametersAreJson = (_48 = this.getNodeParameter("jsonParameters", i)) !== null && _48 !== void 0 ? _48 : false;
                        const additionalFields = !parametersAreJson
                            ? this.getNodeParameter("additionalFields", i)
                            : {};
                        if (additionalFields && additionalFields.aggregate) {
                            const aggregation = additionalFields.aggregate.aggregationFunctions;
                            if (aggregation) {
                                aggregation.forEach(a => {
                                    qs[`aggregate[${a.name}]`] = a.value;
                                });
                            }
                        }
                        requestMethod = "GET";
                        endpoint = `folders`;
                        let response;
                        if (!parametersAreJson && returnAll === true) {
                            qs.limit = -1;
                        }
                        else if (!parametersAreJson) {
                            qs.limit =
                                this.getNodeParameter("limit", i) != undefined
                                    ? this.getNodeParameter("limit", i)
                                    : 10;
                        }
                        else {
                            qs.limit = null;
                        }
                        if (parametersAreJson) {
                            const queryParametersJson = (_49 = this.getNodeParameter("queryParametersJson", i)) !== null && _49 !== void 0 ? _49 : {};
                            if (typeof queryParametersJson == "string") {
                                qs = JSON.parse(queryParametersJson);
                            }
                            else {
                                qs = JSON.parse(JSON.stringify(queryParametersJson));
                            }
                        }
                        else {
                            for (const key in additionalFields) {
                                if (["deep", "filter"].includes(key)) {
                                    const object = additionalFields[key];
                                    if (typeof object == "string") {
                                        qs[key] = JSON.stringify(JSON.parse(object));
                                    }
                                    else {
                                        qs[key] = JSON.stringify(object);
                                    }
                                }
                                else {
                                    qs[key] = additionalFields[key];
                                }
                            }
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_50 = response.data) !== null && _50 !== void 0 ? _50 : {};
                        }
                        const exportType = (_51 = additionalFields.export) !== null && _51 !== void 0 ? _51 : null;
                        const binary = {};
                        if (exportType) {
                            const binaryPropertyName = additionalFields.binaryPropertyName || "data";
                            let fileName = additionalFields.fileName || "export";
                            let binaryData, mimeType, fileExtension;
                            if (exportType == "json") {
                                binaryData = Buffer.from(JSON.stringify(response));
                                mimeType = "application/json";
                                fileExtension = "json";
                                fileName = `${fileName}.${fileExtension}`;
                            }
                            else if (exportType == "csv") {
                                binaryData = Buffer.from(response);
                                mimeType = "text/csv";
                                fileExtension = "csv";
                                fileName = `${fileName}.${fileExtension}`;
                            }
                            else if (exportType == "xml") {
                                binaryData = Buffer.from(response);
                                mimeType = "application/xml";
                                fileExtension = "xml";
                                fileName = `${fileName}.${fileExtension}`;
                            }
                            else {
                                binaryData = Buffer.alloc(0);
                                mimeType = "";
                            }
                            binary[binaryPropertyName] =
                                await this.helpers.prepareBinaryData(binaryData, fileName, mimeType);
                        }
                        if (splitIntoItems === true && Array.isArray(responseData)) {
                            responseData.forEach((item, index) => {
                                if (exportType) {
                                    returnItems.push({ json: item, binary });
                                }
                                else {
                                    returnItems.push({ json: item });
                                }
                            });
                        }
                        else {
                            if (exportType) {
                                returnItems.push({ json: responseData, binary });
                            }
                            else {
                                returnItems.push({ json: responseData });
                            }
                        }
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "create") {
                    try {
                        const parametersAreJson = (_52 = this.getNodeParameter("jsonParameters", i)) !== null && _52 !== void 0 ? _52 : false;
                        const additionalFields = !parametersAreJson
                            ? this.getNodeParameter("additionalFields", i)
                            : {};
                        const name = !parametersAreJson
                            ? this.getNodeParameter("name", i)
                            : "";
                        const parent = (_53 = additionalFields === null || additionalFields === void 0 ? void 0 : additionalFields["parent"]) !== null && _53 !== void 0 ? _53 : "";
                        const data = (_54 = additionalFields["bodyParametersJson"]) !== null && _54 !== void 0 ? _54 : {};
                        requestMethod = "POST";
                        endpoint = `folders`;
                        if (parametersAreJson) {
                            const data = this.getNodeParameter("bodyParametersJson", i);
                            if (typeof data == "string") {
                                body = JSON.parse(data);
                            }
                            else {
                                body = JSON.parse(JSON.stringify(data));
                            }
                        }
                        else {
                            body["name"] = name;
                            for (const key in additionalFields) {
                                body[key] = additionalFields[key];
                            }
                        }
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_55 = response.data) !== null && _55 !== void 0 ? _55 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "createMultiple") {
                    try {
                        const data = this.getNodeParameter("data", i);
                        requestMethod = "POST";
                        endpoint = `folders`;
                        let response;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_56 = response.data) !== null && _56 !== void 0 ? _56 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "update") {
                    try {
                        const ID = this.getNodeParameter("id", i);
                        const parametersAreJson = (_57 = this.getNodeParameter("jsonParameters", i)) !== null && _57 !== void 0 ? _57 : false;
                        const additionalFields = !parametersAreJson
                            ? this.getNodeParameter("additionalFields", i)
                            : {};
                        requestMethod = "PATCH";
                        endpoint = `folders/${ID}`;
                        let response;
                        if (parametersAreJson) {
                            const bodyParametersJson = (_58 = this.getNodeParameter("bodyParametersJson", i)) !== null && _58 !== void 0 ? _58 : {};
                            if (typeof bodyParametersJson == "string") {
                                body = JSON.parse(bodyParametersJson);
                            }
                            else {
                                body = JSON.parse(JSON.stringify(bodyParametersJson));
                            }
                        }
                        else {
                            for (const key in additionalFields) {
                                if (["deep", "filter"].includes(key)) {
                                    const object = additionalFields[key];
                                    if (typeof object == "string") {
                                        body[key] = JSON.stringify(JSON.parse(object));
                                    }
                                    else {
                                        body[key] = JSON.stringify(object);
                                    }
                                }
                                else {
                                    body[key] = additionalFields[key];
                                }
                            }
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_59 = response.data) !== null && _59 !== void 0 ? _59 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "updateMultiple") {
                    try {
                        const data = this.getNodeParameter("data", i);
                        requestMethod = "PATCH";
                        endpoint = `folders`;
                        let response;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_60 = response.data) !== null && _60 !== void 0 ? _60 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "delete") {
                    try {
                        const ID = this.getNodeParameter("id", i);
                        requestMethod = "DELETE";
                        endpoint = `folders/${ID}`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_61 = response.data) !== null && _61 !== void 0 ? _61 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "deleteMultiple") {
                    try {
                        const data = this.getNodeParameter("keys", i);
                        requestMethod = "DELETE";
                        endpoint = `folders`;
                        let response;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_62 = response.data) !== null && _62 !== void 0 ? _62 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
            }
            if (resource === "items") {
                if (operation == "get") {
                    try {
                        const collection = this.getNodeParameter("collection", i);
                        const ID = this.getNodeParameter("id", i);
                        requestMethod = "GET";
                        endpoint = `items/${collection}/${ID}`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_63 = response.data) !== null && _63 !== void 0 ? _63 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "list") {
                    try {
                        const collection = this.getNodeParameter("collection", i);
                        returnAll =
                            (_64 = this.getNodeParameter("returnAll", i)) !== null && _64 !== void 0 ? _64 : false;
                        const splitIntoItems = (_65 = this.getNodeParameter("splitIntoItems", i)) !== null && _65 !== void 0 ? _65 : false;
                        const parametersAreJson = (_66 = this.getNodeParameter("jsonParameters", i)) !== null && _66 !== void 0 ? _66 : false;
                        const additionalFields = !parametersAreJson
                            ? this.getNodeParameter("additionalFields", i)
                            : {};
                        if (additionalFields && additionalFields.aggregate) {
                            const aggregation = additionalFields.aggregate.aggregationFunctions;
                            if (aggregation) {
                                aggregation.forEach(a => {
                                    qs[`aggregate[${a.name}]`] = a.value;
                                });
                            }
                        }
                        requestMethod = "GET";
                        endpoint = `items/${collection}`;
                        let response;
                        if (!parametersAreJson && returnAll === true) {
                            qs.limit = -1;
                        }
                        else if (!parametersAreJson) {
                            qs.limit =
                                this.getNodeParameter("limit", i) != undefined
                                    ? this.getNodeParameter("limit", i)
                                    : 10;
                        }
                        else {
                            qs.limit = null;
                        }
                        if (parametersAreJson) {
                            const queryParametersJson = this.getNodeParameter("queryParametersJson", i);
                            if (typeof queryParametersJson == "string") {
                                qs = JSON.parse(queryParametersJson);
                            }
                            else {
                                qs = JSON.parse(JSON.stringify(queryParametersJson));
                            }
                        }
                        else {
                            for (const key in additionalFields) {
                                if (["deep", "filter"].includes(key)) {
                                    const object = additionalFields[key];
                                    if (typeof object == "string") {
                                        qs[key] = JSON.stringify(JSON.parse(object));
                                    }
                                    else {
                                        qs[key] = JSON.stringify(object);
                                    }
                                }
                                else {
                                    qs[key] = additionalFields[key];
                                }
                            }
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_67 = response.data) !== null && _67 !== void 0 ? _67 : {};
                        }
                        const exportType = (_68 = additionalFields.export) !== null && _68 !== void 0 ? _68 : null;
                        const binary = {};
                        if (exportType) {
                            const binaryPropertyName = additionalFields.binaryPropertyName || "data";
                            let fileName = additionalFields.fileName || "export";
                            let binaryData, mimeType, fileExtension;
                            if (exportType == "json") {
                                binaryData = Buffer.from(JSON.stringify(response));
                                mimeType = "application/json";
                                fileExtension = "json";
                                fileName = `${fileName}.${fileExtension}`;
                            }
                            else if (exportType == "csv") {
                                binaryData = Buffer.from(response);
                                mimeType = "text/csv";
                                fileExtension = "csv";
                                fileName = `${fileName}.${fileExtension}`;
                            }
                            else if (exportType == "xml") {
                                binaryData = Buffer.from(response);
                                mimeType = "application/xml";
                                fileExtension = "xml";
                                fileName = `${fileName}.${fileExtension}`;
                            }
                            else {
                                binaryData = Buffer.alloc(0);
                                mimeType = "";
                            }
                            binary[binaryPropertyName] =
                                await this.helpers.prepareBinaryData(binaryData, fileName, mimeType);
                        }
                        if (splitIntoItems === true && Array.isArray(responseData)) {
                            responseData.forEach((item, index) => {
                                if (exportType) {
                                    returnItems.push({ json: item, binary });
                                }
                                else {
                                    returnItems.push({ json: item });
                                }
                            });
                        }
                        else {
                            if (exportType) {
                                returnItems.push({ json: responseData, binary });
                            }
                            else {
                                returnItems.push({ json: responseData });
                            }
                        }
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "create") {
                    try {
                        const collection = this.getNodeParameter("collection", i);
                        const data = this.getNodeParameter("data", i);
                        requestMethod = "POST";
                        endpoint = `items/${collection}`;
                        let response;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_69 = response.data) !== null && _69 !== void 0 ? _69 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "createMultiple") {
                    try {
                        const collection = this.getNodeParameter("collection", i);
                        const data = this.getNodeParameter("data", i);
                        requestMethod = "POST";
                        endpoint = `items/${collection}`;
                        let response;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_70 = response.data) !== null && _70 !== void 0 ? _70 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "update") {
                    try {
                        const collection = this.getNodeParameter("collection", i);
                        const ID = this.getNodeParameter("id", i);
                        const data = this.getNodeParameter("data", i);
                        requestMethod = "PATCH";
                        endpoint = `items/${collection}/${ID}`;
                        let response;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_71 = response.data) !== null && _71 !== void 0 ? _71 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "updateMultiple") {
                    try {
                        const collection = this.getNodeParameter("collection", i);
                        const ID = this.getNodeParameter("id", i);
                        const data = this.getNodeParameter("data", i);
                        requestMethod = "PATCH";
                        endpoint = `items/${collection}/${ID}`;
                        let response;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_72 = response.data) !== null && _72 !== void 0 ? _72 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "delete") {
                    try {
                        const collection = this.getNodeParameter("collection", i);
                        const ID = this.getNodeParameter("id", i);
                        requestMethod = "DELETE";
                        endpoint = `items/${collection}/${ID}`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_73 = response.data) !== null && _73 !== void 0 ? _73 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "deleteMultiple") {
                    try {
                        const collection = this.getNodeParameter("collection", i);
                        const data = this.getNodeParameter("data", i);
                        requestMethod = "DELETE";
                        endpoint = `items/${collection}`;
                        let response;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_74 = response.data) !== null && _74 !== void 0 ? _74 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
            }
            if (resource === "permissions") {
                if (operation == "get") {
                    try {
                        const ID = this.getNodeParameter("id", i);
                        requestMethod = "GET";
                        endpoint = `permissions/${ID}`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_75 = response.data) !== null && _75 !== void 0 ? _75 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "list") {
                    try {
                        returnAll =
                            (_76 = this.getNodeParameter("returnAll", i)) !== null && _76 !== void 0 ? _76 : false;
                        const splitIntoItems = (_77 = this.getNodeParameter("splitIntoItems", i)) !== null && _77 !== void 0 ? _77 : false;
                        const parametersAreJson = (_78 = this.getNodeParameter("jsonParameters", i)) !== null && _78 !== void 0 ? _78 : false;
                        const additionalFields = !parametersAreJson
                            ? this.getNodeParameter("additionalFields", i)
                            : {};
                        if (additionalFields && additionalFields.aggregate) {
                            const aggregation = additionalFields.aggregate.aggregationFunctions;
                            if (aggregation) {
                                aggregation.forEach(a => {
                                    qs[`aggregate[${a.name}]`] = a.value;
                                });
                            }
                        }
                        requestMethod = "GET";
                        endpoint = `permissions`;
                        let response;
                        if (!parametersAreJson && returnAll === true) {
                            qs.limit = -1;
                        }
                        else if (!parametersAreJson) {
                            qs.limit =
                                this.getNodeParameter("limit", i) != undefined
                                    ? this.getNodeParameter("limit", i)
                                    : 10;
                        }
                        else {
                            qs.limit = null;
                        }
                        if (parametersAreJson) {
                            const bodyParametersJson = this.getNodeParameter("bodyParametersJson", i);
                            if (typeof bodyParametersJson == "string") {
                                body = JSON.parse(bodyParametersJson);
                            }
                            else {
                                body = JSON.parse(JSON.stringify(bodyParametersJson));
                            }
                        }
                        else {
                            for (const key in additionalFields) {
                                if (["deep", "filter"].includes(key)) {
                                    const object = additionalFields[key];
                                    if (typeof object == "string") {
                                        qs[key] = JSON.stringify(JSON.parse(object));
                                    }
                                    else {
                                        qs[key] = JSON.stringify(object);
                                    }
                                }
                                else {
                                    qs[key] = additionalFields[key];
                                }
                            }
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_79 = response.data) !== null && _79 !== void 0 ? _79 : {};
                        }
                        const exportType = (_80 = additionalFields.export) !== null && _80 !== void 0 ? _80 : null;
                        const binary = {};
                        if (exportType) {
                            const binaryPropertyName = additionalFields.binaryPropertyName || "data";
                            let fileName = additionalFields.fileName || "export";
                            let binaryData, mimeType, fileExtension;
                            if (exportType == "json") {
                                binaryData = Buffer.from(JSON.stringify(response));
                                mimeType = "application/json";
                                fileExtension = "json";
                                fileName = `${fileName}.${fileExtension}`;
                            }
                            else if (exportType == "csv") {
                                binaryData = Buffer.from(response);
                                mimeType = "text/csv";
                                fileExtension = "csv";
                                fileName = `${fileName}.${fileExtension}`;
                            }
                            else if (exportType == "xml") {
                                binaryData = Buffer.from(response);
                                mimeType = "application/xml";
                                fileExtension = "xml";
                                fileName = `${fileName}.${fileExtension}`;
                            }
                            else {
                                binaryData = Buffer.alloc(0);
                                mimeType = "";
                            }
                            binary[binaryPropertyName] =
                                await this.helpers.prepareBinaryData(binaryData, fileName, mimeType);
                        }
                        if (splitIntoItems === true && Array.isArray(responseData)) {
                            responseData.forEach((item, index) => {
                                if (exportType) {
                                    returnItems.push({ json: item, binary });
                                }
                                else {
                                    returnItems.push({ json: item });
                                }
                            });
                        }
                        else {
                            if (exportType) {
                                returnItems.push({ json: responseData, binary });
                            }
                            else {
                                returnItems.push({ json: responseData });
                            }
                        }
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "create") {
                    try {
                        const parametersAreJson = (_81 = this.getNodeParameter("jsonParameters", i)) !== null && _81 !== void 0 ? _81 : false;
                        requestMethod = "POST";
                        endpoint = `permissions`;
                        let response;
                        if (parametersAreJson) {
                            const data = this.getNodeParameter("bodyParametersJson", i);
                            if (typeof data == "string") {
                                body = JSON.parse(data);
                            }
                            else {
                                body = JSON.parse(JSON.stringify(data));
                            }
                        }
                        else {
                            const action = this.getNodeParameter("collection", i);
                            const collection = this.getNodeParameter("collection", i);
                            body["collection"] = collection;
                            body["action"] = action;
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_82 = response.data) !== null && _82 !== void 0 ? _82 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "createMultiple") {
                    try {
                        const data = this.getNodeParameter("data", i);
                        requestMethod = "POST";
                        endpoint = `permissions`;
                        let response;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_83 = response.data) !== null && _83 !== void 0 ? _83 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "update") {
                    try {
                        const ID = this.getNodeParameter("id", i);
                        const data = this.getNodeParameter("data", i);
                        requestMethod = "PATCH";
                        endpoint = `permissions/${ID}`;
                        let response;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_84 = response.data) !== null && _84 !== void 0 ? _84 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "updateMultiple") {
                    try {
                        const data = this.getNodeParameter("data", i);
                        requestMethod = "PATCH";
                        endpoint = `permissions`;
                        let response;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_85 = response.data) !== null && _85 !== void 0 ? _85 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "delete") {
                    try {
                        const ID = this.getNodeParameter("id", i);
                        requestMethod = "DELETE";
                        endpoint = `permissions/${ID}`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_86 = response.data) !== null && _86 !== void 0 ? _86 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "deleteMultiple") {
                    try {
                        const data = this.getNodeParameter("keys", i);
                        requestMethod = "DELETE";
                        endpoint = `permissions`;
                        let response;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_87 = response.data) !== null && _87 !== void 0 ? _87 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
            }
            if (resource === "presets") {
                if (operation == "get") {
                    try {
                        const ID = this.getNodeParameter("id", i);
                        requestMethod = "GET";
                        endpoint = `presets/${ID}`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_88 = response.data) !== null && _88 !== void 0 ? _88 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "list") {
                    try {
                        returnAll =
                            (_89 = this.getNodeParameter("returnAll", i)) !== null && _89 !== void 0 ? _89 : false;
                        const splitIntoItems = (_90 = this.getNodeParameter("splitIntoItems", i)) !== null && _90 !== void 0 ? _90 : false;
                        const parametersAreJson = (_91 = this.getNodeParameter("jsonParameters", i)) !== null && _91 !== void 0 ? _91 : false;
                        const additionalFields = !parametersAreJson
                            ? this.getNodeParameter("additionalFields", i)
                            : {};
                        if (additionalFields && additionalFields.aggregate) {
                            const aggregation = additionalFields.aggregate.aggregationFunctions;
                            if (aggregation) {
                                aggregation.forEach(a => {
                                    qs[`aggregate[${a.name}]`] = a.value;
                                });
                            }
                        }
                        requestMethod = "GET";
                        endpoint = `presets`;
                        let response;
                        if (!parametersAreJson && returnAll === true) {
                            qs.limit = -1;
                        }
                        else if (!parametersAreJson) {
                            qs.limit =
                                this.getNodeParameter("limit", i) != undefined
                                    ? this.getNodeParameter("limit", i)
                                    : 10;
                        }
                        else {
                            qs.limit = null;
                        }
                        if (parametersAreJson) {
                            const bodyParametersJson = this.getNodeParameter("bodyParametersJson", i);
                            if (typeof bodyParametersJson == "string") {
                                body = JSON.parse(bodyParametersJson);
                            }
                            else {
                                body = JSON.parse(JSON.stringify(bodyParametersJson));
                            }
                        }
                        else {
                            for (const key in additionalFields) {
                                if (["deep", "filter"].includes(key)) {
                                    const object = additionalFields[key];
                                    if (typeof object == "string") {
                                        qs[key] = JSON.stringify(JSON.parse(object));
                                    }
                                    else {
                                        qs[key] = JSON.stringify(object);
                                    }
                                }
                                else {
                                    qs[key] = additionalFields[key];
                                }
                            }
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_92 = response.data) !== null && _92 !== void 0 ? _92 : {};
                        }
                        const exportType = (_93 = additionalFields.export) !== null && _93 !== void 0 ? _93 : null;
                        const binary = {};
                        if (exportType) {
                            const binaryPropertyName = additionalFields.binaryPropertyName || "data";
                            let fileName = additionalFields.fileName || "export";
                            let binaryData, mimeType, fileExtension;
                            if (exportType == "json") {
                                binaryData = Buffer.from(JSON.stringify(response));
                                mimeType = "application/json";
                                fileExtension = "json";
                                fileName = `${fileName}.${fileExtension}`;
                            }
                            else if (exportType == "csv") {
                                binaryData = Buffer.from(response);
                                mimeType = "text/csv";
                                fileExtension = "csv";
                                fileName = `${fileName}.${fileExtension}`;
                            }
                            else if (exportType == "xml") {
                                binaryData = Buffer.from(response);
                                mimeType = "application/xml";
                                fileExtension = "xml";
                                fileName = `${fileName}.${fileExtension}`;
                            }
                            else {
                                binaryData = Buffer.alloc(0);
                                mimeType = "";
                            }
                            binary[binaryPropertyName] =
                                await this.helpers.prepareBinaryData(binaryData, fileName, mimeType);
                        }
                        if (splitIntoItems === true && Array.isArray(responseData)) {
                            responseData.forEach((item, index) => {
                                if (exportType) {
                                    returnItems.push({ json: item, binary });
                                }
                                else {
                                    returnItems.push({ json: item });
                                }
                            });
                        }
                        else {
                            if (exportType) {
                                returnItems.push({ json: responseData, binary });
                            }
                            else {
                                returnItems.push({ json: responseData });
                            }
                        }
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "create") {
                    try {
                        const parametersAreJson = (_94 = this.getNodeParameter("jsonParameters", i)) !== null && _94 !== void 0 ? _94 : false;
                        requestMethod = "POST";
                        endpoint = `presets`;
                        let response;
                        const data = this.getNodeParameter("bodyParametersJson", i);
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_95 = response.data) !== null && _95 !== void 0 ? _95 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "createMultiple") {
                    try {
                        const data = this.getNodeParameter("data", i);
                        requestMethod = "POST";
                        endpoint = `presets`;
                        let response;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_96 = response.data) !== null && _96 !== void 0 ? _96 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "update") {
                    try {
                        const ID = this.getNodeParameter("id", i);
                        const data = this.getNodeParameter("data", i);
                        requestMethod = "PATCH";
                        endpoint = `presets/${ID}`;
                        let response;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_97 = response.data) !== null && _97 !== void 0 ? _97 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "updateMultiple") {
                    try {
                        const data = this.getNodeParameter("data", i);
                        requestMethod = "PATCH";
                        endpoint = `presets`;
                        let response;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_98 = response.data) !== null && _98 !== void 0 ? _98 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "delete") {
                    try {
                        const ID = this.getNodeParameter("id", i);
                        requestMethod = "DELETE";
                        endpoint = `presets/${ID}`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_99 = response.data) !== null && _99 !== void 0 ? _99 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "deleteMultiple") {
                    try {
                        const data = this.getNodeParameter("keys", i);
                        requestMethod = "DELETE";
                        endpoint = `presets`;
                        let response;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_100 = response.data) !== null && _100 !== void 0 ? _100 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
            }
            if (resource === "relations") {
                if (operation === "create") {
                    try {
                        const data = (_101 = this.getNodeParameter("data", i)) !== null && _101 !== void 0 ? _101 : {};
                        requestMethod = "POST";
                        endpoint = `relations`;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        responseData = (_102 = response.data) !== null && _102 !== void 0 ? _102 : {};
                        const timerLabel = `${resource} | ${operation}`;
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation === "get") {
                    try {
                        const collection = this.getNodeParameter("collection", i);
                        const field = this.getNodeParameter("field", i);
                        requestMethod = "GET";
                        endpoint = `relations/${collection}/${field}`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        responseData = (_103 = response.data) !== null && _103 !== void 0 ? _103 : {};
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation === "list") {
                    try {
                        const collection = this.getNodeParameter("collection", i);
                        requestMethod = "GET";
                        endpoint = `relations/${collection}`;
                        const splitIntoItems = (_104 = this.getNodeParameter("splitIntoItems", i)) !== null && _104 !== void 0 ? _104 : null;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        responseData = (_105 = response.data) !== null && _105 !== void 0 ? _105 : {};
                        const timerLabel = `${resource} | ${operation}`;
                        console.log("Start");
                        console.time(timerLabel);
                        if (splitIntoItems === true && Array.isArray(responseData)) {
                            responseData.forEach((item, index) => {
                                returnItems.push({ json: item });
                            });
                        }
                        else {
                            returnItems.push({ json: responseData });
                        }
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation === "listAll") {
                    try {
                        requestMethod = "GET";
                        endpoint = `relations`;
                        const splitIntoItems = (_106 = this.getNodeParameter("splitIntoItems", i)) !== null && _106 !== void 0 ? _106 : null;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        responseData = (_107 = response.data) !== null && _107 !== void 0 ? _107 : {};
                        if (splitIntoItems === true && Array.isArray(responseData)) {
                            responseData.forEach((item, index) => {
                                returnItems.push({ json: item });
                            });
                        }
                        else {
                            returnItems.push({ json: responseData });
                        }
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation === "update") {
                    try {
                        const collection = this.getNodeParameter("collection", i);
                        const field = this.getNodeParameter("field", i);
                        const data = (_108 = this.getNodeParameter("data", i)) !== null && _108 !== void 0 ? _108 : {};
                        requestMethod = "PATCH";
                        endpoint = `relations/${collection}/${field}`;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        responseData = (_109 = response.data) !== null && _109 !== void 0 ? _109 : {};
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation === "delete") {
                    try {
                        const collection = this.getNodeParameter("collection", i);
                        const field = this.getNodeParameter("field", i);
                        requestMethod = "DELETE";
                        endpoint = `relations/${collection}/${field}`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        responseData = response;
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
            }
            if (resource === "revisions") {
                if (operation == "get") {
                    try {
                        const ID = this.getNodeParameter("id", i);
                        requestMethod = "GET";
                        endpoint = `revisions/${ID}`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_110 = response.data) !== null && _110 !== void 0 ? _110 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "list") {
                    try {
                        returnAll =
                            (_111 = this.getNodeParameter("returnAll", i)) !== null && _111 !== void 0 ? _111 : false;
                        const splitIntoItems = (_112 = this.getNodeParameter("splitIntoItems", i)) !== null && _112 !== void 0 ? _112 : false;
                        const parametersAreJson = (_113 = this.getNodeParameter("jsonParameters", i)) !== null && _113 !== void 0 ? _113 : false;
                        const additionalFields = !parametersAreJson
                            ? this.getNodeParameter("additionalFields", i)
                            : {};
                        if (additionalFields && additionalFields.aggregate) {
                            const aggregation = additionalFields.aggregate.aggregationFunctions;
                            if (aggregation) {
                                aggregation.forEach(a => {
                                    qs[`aggregate[${a.name}]`] = a.value;
                                });
                            }
                        }
                        requestMethod = "GET";
                        endpoint = `revisions`;
                        let response;
                        if (!parametersAreJson && returnAll === true) {
                            qs.limit = -1;
                        }
                        else if (!parametersAreJson) {
                            qs.limit =
                                this.getNodeParameter("limit", i) != undefined
                                    ? this.getNodeParameter("limit", i)
                                    : 10;
                        }
                        else {
                            qs.limit = null;
                        }
                        if (parametersAreJson) {
                            const queryParametersJson = this.getNodeParameter("queryParametersJson", i);
                            if (typeof queryParametersJson == "string") {
                                qs = JSON.parse(queryParametersJson);
                            }
                            else {
                                qs = JSON.parse(JSON.stringify(queryParametersJson));
                            }
                        }
                        else {
                            for (const key in additionalFields) {
                                if (["deep", "filter"].includes(key)) {
                                    const object = additionalFields[key];
                                    if (typeof object == "string") {
                                        qs[key] = JSON.stringify(JSON.parse(object));
                                    }
                                    else {
                                        qs[key] = JSON.stringify(object);
                                    }
                                }
                                else {
                                    qs[key] = additionalFields[key];
                                }
                            }
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_114 = response.data) !== null && _114 !== void 0 ? _114 : {};
                        }
                        const exportType = (_115 = additionalFields.export) !== null && _115 !== void 0 ? _115 : null;
                        const binary = {};
                        if (exportType) {
                            const binaryPropertyName = additionalFields.binaryPropertyName || "data";
                            let fileName = additionalFields.fileName || "export";
                            let binaryData, mimeType, fileExtension;
                            if (exportType == "json") {
                                binaryData = Buffer.from(JSON.stringify(response));
                                mimeType = "application/json";
                                fileExtension = "json";
                                fileName = `${fileName}.${fileExtension}`;
                            }
                            else if (exportType == "csv") {
                                binaryData = Buffer.from(response);
                                mimeType = "text/csv";
                                fileExtension = "csv";
                                fileName = `${fileName}.${fileExtension}`;
                            }
                            else if (exportType == "xml") {
                                binaryData = Buffer.from(response);
                                mimeType = "application/xml";
                                fileExtension = "xml";
                                fileName = `${fileName}.${fileExtension}`;
                            }
                            else {
                                binaryData = Buffer.alloc(0);
                                mimeType = "";
                            }
                            binary[binaryPropertyName] =
                                await this.helpers.prepareBinaryData(binaryData, fileName, mimeType);
                        }
                        if (splitIntoItems === true && Array.isArray(responseData)) {
                            responseData.forEach((item, index) => {
                                if (exportType) {
                                    returnItems.push({ json: item, binary });
                                }
                                else {
                                    returnItems.push({ json: item });
                                }
                            });
                        }
                        else {
                            if (exportType) {
                                returnItems.push({ json: responseData, binary });
                            }
                            else {
                                returnItems.push({ json: responseData });
                            }
                        }
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
            }
            if (resource === "roles") {
                if (operation == "get") {
                    try {
                        const ID = this.getNodeParameter("id", i);
                        requestMethod = "GET";
                        endpoint = `roles/${ID}`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_116 = response.data) !== null && _116 !== void 0 ? _116 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "list") {
                    try {
                        returnAll =
                            (_117 = this.getNodeParameter("returnAll", i)) !== null && _117 !== void 0 ? _117 : false;
                        const splitIntoItems = (_118 = this.getNodeParameter("splitIntoItems", i)) !== null && _118 !== void 0 ? _118 : false;
                        const parametersAreJson = (_119 = this.getNodeParameter("jsonParameters", i)) !== null && _119 !== void 0 ? _119 : false;
                        const additionalFields = !parametersAreJson
                            ? this.getNodeParameter("additionalFields", i)
                            : {};
                        if (additionalFields && additionalFields.aggregate) {
                            const aggregation = additionalFields.aggregate.aggregationFunctions;
                            if (aggregation) {
                                aggregation.forEach(a => {
                                    qs[`aggregate[${a.name}]`] = a.value;
                                });
                            }
                        }
                        requestMethod = "GET";
                        endpoint = `roles`;
                        let response;
                        if (!parametersAreJson && returnAll === true) {
                            qs.limit = -1;
                        }
                        else if (!parametersAreJson) {
                            qs.limit =
                                this.getNodeParameter("limit", i) != undefined
                                    ? this.getNodeParameter("limit", i)
                                    : 10;
                        }
                        else {
                            qs.limit = null;
                        }
                        if (parametersAreJson) {
                            const bodyParametersJson = this.getNodeParameter("bodyParametersJson", i);
                            if (typeof bodyParametersJson == "string") {
                                body = JSON.parse(bodyParametersJson);
                            }
                            else {
                                body = JSON.parse(JSON.stringify(bodyParametersJson));
                            }
                        }
                        else {
                            for (const key in additionalFields) {
                                if (["deep", "filter"].includes(key)) {
                                    const object = additionalFields[key];
                                    if (typeof object == "string") {
                                        qs[key] = JSON.stringify(JSON.parse(object));
                                    }
                                    else {
                                        qs[key] = JSON.stringify(object);
                                    }
                                }
                                else {
                                    qs[key] = additionalFields[key];
                                }
                            }
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_120 = response.data) !== null && _120 !== void 0 ? _120 : {};
                        }
                        const exportType = (_121 = additionalFields.export) !== null && _121 !== void 0 ? _121 : null;
                        const binary = {};
                        if (exportType) {
                            const binaryPropertyName = additionalFields.binaryPropertyName || "data";
                            let fileName = additionalFields.fileName || "export";
                            let binaryData, mimeType, fileExtension;
                            if (exportType == "json") {
                                binaryData = Buffer.from(JSON.stringify(response));
                                mimeType = "application/json";
                                fileExtension = "json";
                                fileName = `${fileName}.${fileExtension}`;
                            }
                            else if (exportType == "csv") {
                                binaryData = Buffer.from(response);
                                mimeType = "text/csv";
                                fileExtension = "csv";
                                fileName = `${fileName}.${fileExtension}`;
                            }
                            else if (exportType == "xml") {
                                binaryData = Buffer.from(response);
                                mimeType = "application/xml";
                                fileExtension = "xml";
                                fileName = `${fileName}.${fileExtension}`;
                            }
                            else {
                                binaryData = Buffer.alloc(0);
                                mimeType = "";
                            }
                            binary[binaryPropertyName] =
                                await this.helpers.prepareBinaryData(binaryData, fileName, mimeType);
                        }
                        if (splitIntoItems === true && Array.isArray(responseData)) {
                            responseData.forEach((item, index) => {
                                if (exportType) {
                                    returnItems.push({ json: item, binary });
                                }
                                else {
                                    returnItems.push({ json: item });
                                }
                            });
                        }
                        else {
                            if (exportType) {
                                returnItems.push({ json: responseData, binary });
                            }
                            else {
                                returnItems.push({ json: responseData });
                            }
                        }
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "create") {
                    try {
                        const parametersAreJson = (_122 = this.getNodeParameter("jsonParameters", i)) !== null && _122 !== void 0 ? _122 : false;
                        requestMethod = "POST";
                        endpoint = `roles`;
                        let response;
                        const data = this.getNodeParameter("bodyParametersJson", i);
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_123 = response.data) !== null && _123 !== void 0 ? _123 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "createMultiple") {
                    try {
                        const data = this.getNodeParameter("data", i);
                        requestMethod = "POST";
                        endpoint = `roles`;
                        let response;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_124 = response.data) !== null && _124 !== void 0 ? _124 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "update") {
                    try {
                        const ID = this.getNodeParameter("id", i);
                        const data = this.getNodeParameter("data", i);
                        requestMethod = "PATCH";
                        endpoint = `roles/${ID}`;
                        let response;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_125 = response.data) !== null && _125 !== void 0 ? _125 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "updateMultiple") {
                    try {
                        const data = this.getNodeParameter("data", i);
                        requestMethod = "PATCH";
                        endpoint = `roles`;
                        let response;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_126 = response.data) !== null && _126 !== void 0 ? _126 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "delete") {
                    try {
                        const ID = this.getNodeParameter("id", i);
                        requestMethod = "DELETE";
                        endpoint = `roles/${ID}`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_127 = response.data) !== null && _127 !== void 0 ? _127 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "deleteMultiple") {
                    try {
                        const data = this.getNodeParameter("keys", i);
                        requestMethod = "DELETE";
                        endpoint = `roles`;
                        let response;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_128 = response.data) !== null && _128 !== void 0 ? _128 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
            }
            if (resource === "server") {
                if (operation == "systemInfo") {
                    try {
                        requestMethod = "GET";
                        endpoint = `server/info`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_129 = response.data) !== null && _129 !== void 0 ? _129 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "pingServer") {
                    try {
                        requestMethod = "GET";
                        endpoint = `server/ping`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = response;
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "getGraphQL") {
                    try {
                        requestMethod = "GET";
                        endpoint = `server/specs/graphql`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = response;
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "getOpenAPI") {
                    try {
                        requestMethod = "GET";
                        endpoint = `server/specs/oas`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = response;
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "serverHealth") {
                    try {
                        requestMethod = "GET";
                        endpoint = `server/health`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = response;
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
            }
            if (resource === "settings") {
                if (operation == "get") {
                    try {
                        const parametersAreJson = (_130 = this.getNodeParameter("jsonParameters", i)) !== null && _130 !== void 0 ? _130 : false;
                        const additionalFields = !parametersAreJson
                            ? this.getNodeParameter("additionalFields", i)
                            : {};
                        requestMethod = "GET";
                        endpoint = `settings`;
                        let response;
                        if (parametersAreJson) {
                            const queryParametersJson = this.getNodeParameter("queryParametersJson", i);
                            if (typeof queryParametersJson == "string") {
                                qs = JSON.parse(queryParametersJson);
                            }
                            else {
                                qs = JSON.parse(JSON.stringify(queryParametersJson));
                            }
                        }
                        else {
                            for (const key in additionalFields) {
                                if (["deep", "filter"].includes(key)) {
                                    const object = additionalFields[key];
                                    if (typeof object == "string") {
                                        qs[key] = JSON.stringify(JSON.parse(object));
                                    }
                                    else {
                                        qs[key] = JSON.stringify(object);
                                    }
                                }
                                else {
                                    qs[key] = additionalFields[key];
                                }
                            }
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_131 = response.data) !== null && _131 !== void 0 ? _131 : {};
                        }
                        const exportType = (_132 = additionalFields.export) !== null && _132 !== void 0 ? _132 : null;
                        const binary = {};
                        if (exportType) {
                            const binaryPropertyName = additionalFields.binaryPropertyName || "data";
                            let fileName = additionalFields.fileName || "export";
                            let binaryData, mimeType, fileExtension;
                            if (exportType == "json") {
                                binaryData = Buffer.from(JSON.stringify(response));
                                mimeType = "application/json";
                                fileExtension = "json";
                                fileName = `${fileName}.${fileExtension}`;
                            }
                            else if (exportType == "csv") {
                                binaryData = Buffer.from(response);
                                mimeType = "text/csv";
                                fileExtension = "csv";
                                fileName = `${fileName}.${fileExtension}`;
                            }
                            else if (exportType == "xml") {
                                binaryData = Buffer.from(response);
                                mimeType = "application/xml";
                                fileExtension = "xml";
                                fileName = `${fileName}.${fileExtension}`;
                            }
                            else {
                                binaryData = Buffer.alloc(0);
                                mimeType = "";
                            }
                            binary[binaryPropertyName] =
                                await this.helpers.prepareBinaryData(binaryData, fileName, mimeType);
                        }
                        if (Array.isArray(responseData)) {
                            responseData.forEach((item, index) => {
                                if (exportType) {
                                    returnItems.push({ json: item, binary });
                                }
                                else {
                                    returnItems.push({ json: item });
                                }
                            });
                        }
                        else {
                            if (exportType) {
                                returnItems.push({ json: responseData, binary });
                            }
                            else {
                                returnItems.push({ json: responseData });
                            }
                        }
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "update") {
                    try {
                        const parametersAreJson = (_133 = this.getNodeParameter("jsonParameters", i)) !== null && _133 !== void 0 ? _133 : false;
                        const additionalFields = !parametersAreJson
                            ? this.getNodeParameter("additionalFields", i)
                            : {};
                        const data = (_134 = this.getNodeParameter("data", i)) !== null && _134 !== void 0 ? _134 : {};
                        requestMethod = "PATCH";
                        endpoint = `settings`;
                        let response;
                        if (parametersAreJson) {
                            const queryParametersJson = this.getNodeParameter("queryParametersJson", i);
                            if (typeof queryParametersJson == "string") {
                                qs = JSON.parse(queryParametersJson);
                            }
                            else {
                                qs = JSON.parse(JSON.stringify(queryParametersJson));
                            }
                        }
                        else {
                            for (const key in additionalFields) {
                                if (["deep", "filter"].includes(key)) {
                                    const object = additionalFields[key];
                                    if (typeof object == "string") {
                                        qs[key] = JSON.stringify(JSON.parse(object));
                                    }
                                    else {
                                        qs[key] = JSON.stringify(object);
                                    }
                                }
                                else {
                                    qs[key] = additionalFields[key];
                                }
                            }
                        }
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_135 = response.data) !== null && _135 !== void 0 ? _135 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
            }
            if (resource === "users") {
                if (operation == "get") {
                    try {
                        const ID = this.getNodeParameter("id", i);
                        requestMethod = "GET";
                        endpoint = `users/${ID}`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_136 = response.data) !== null && _136 !== void 0 ? _136 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "list") {
                    try {
                        returnAll =
                            (_137 = this.getNodeParameter("returnAll", i)) !== null && _137 !== void 0 ? _137 : false;
                        const splitIntoItems = (_138 = this.getNodeParameter("splitIntoItems", i)) !== null && _138 !== void 0 ? _138 : false;
                        const parametersAreJson = (_139 = this.getNodeParameter("jsonParameters", i)) !== null && _139 !== void 0 ? _139 : false;
                        const additionalFields = !parametersAreJson
                            ? this.getNodeParameter("additionalFields", i)
                            : {};
                        if (additionalFields && additionalFields.aggregate) {
                            const aggregation = additionalFields.aggregate.aggregationFunctions;
                            if (aggregation) {
                                aggregation.forEach(a => {
                                    qs[`aggregate[${a.name}]`] = a.value;
                                });
                            }
                        }
                        requestMethod = "GET";
                        endpoint = `users`;
                        let response;
                        if (!parametersAreJson && returnAll === true) {
                            qs.limit = -1;
                        }
                        else if (!parametersAreJson) {
                            qs.limit =
                                this.getNodeParameter("limit", i) != undefined
                                    ? this.getNodeParameter("limit", i)
                                    : 10;
                        }
                        else {
                            qs.limit = null;
                        }
                        if (parametersAreJson) {
                            const queryParametersJson = this.getNodeParameter("queryParametersJson", i);
                            if (typeof queryParametersJson == "string") {
                                qs = JSON.parse(queryParametersJson);
                            }
                            else {
                                qs = JSON.parse(JSON.stringify(queryParametersJson));
                            }
                        }
                        else {
                            for (const key in additionalFields) {
                                if (["deep", "filter"].includes(key)) {
                                    const object = additionalFields[key];
                                    if (typeof object == "string") {
                                        qs[key] = JSON.stringify(JSON.parse(object));
                                    }
                                    else {
                                        qs[key] = JSON.stringify(object);
                                    }
                                }
                                else {
                                    qs[key] = additionalFields[key];
                                }
                            }
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_140 = response.data) !== null && _140 !== void 0 ? _140 : {};
                        }
                        const exportType = (_141 = additionalFields.export) !== null && _141 !== void 0 ? _141 : null;
                        const binary = {};
                        if (exportType) {
                            const binaryPropertyName = additionalFields.binaryPropertyName || "data";
                            let fileName = additionalFields.fileName || "export";
                            let binaryData, mimeType, fileExtension;
                            if (exportType == "json") {
                                binaryData = Buffer.from(JSON.stringify(response));
                                mimeType = "application/json";
                                fileExtension = "json";
                                fileName = `${fileName}.${fileExtension}`;
                            }
                            else if (exportType == "csv") {
                                binaryData = Buffer.from(response);
                                mimeType = "text/csv";
                                fileExtension = "csv";
                                fileName = `${fileName}.${fileExtension}`;
                            }
                            else if (exportType == "xml") {
                                binaryData = Buffer.from(response);
                                mimeType = "application/xml";
                                fileExtension = "xml";
                                fileName = `${fileName}.${fileExtension}`;
                            }
                            else {
                                binaryData = Buffer.alloc(0);
                                mimeType = "";
                            }
                            binary[binaryPropertyName] =
                                await this.helpers.prepareBinaryData(binaryData, fileName, mimeType);
                        }
                        if (splitIntoItems === true && Array.isArray(responseData)) {
                            responseData.forEach((item, index) => {
                                if (exportType) {
                                    returnItems.push({ json: item, binary });
                                }
                                else {
                                    returnItems.push({ json: item });
                                }
                            });
                        }
                        else {
                            if (exportType) {
                                returnItems.push({ json: responseData, binary });
                            }
                            else {
                                returnItems.push({ json: responseData });
                            }
                        }
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "create") {
                    try {
                        const parametersAreJson = (_142 = this.getNodeParameter("jsonParameters", i)) !== null && _142 !== void 0 ? _142 : false;
                        const additionalFields = !parametersAreJson
                            ? this.getNodeParameter("additionalFields", i)
                            : {};
                        requestMethod = "POST";
                        endpoint = `users`;
                        let response;
                        if (parametersAreJson) {
                            const bodyParametersJson = this.getNodeParameter("bodyParametersJson", i);
                            if (typeof bodyParametersJson == "string") {
                                body = JSON.parse(bodyParametersJson);
                            }
                            else {
                                body = JSON.parse(JSON.stringify(bodyParametersJson));
                            }
                        }
                        else {
                            for (const key in additionalFields) {
                                if (["deep", "filter"].includes(key)) {
                                    const object = additionalFields[key];
                                    if (typeof object == "string") {
                                        body[key] = JSON.stringify(JSON.parse(object));
                                    }
                                    else {
                                        body[key] = JSON.stringify(object);
                                    }
                                }
                                else {
                                    body[key] = additionalFields[key];
                                }
                            }
                            body["email"] = this.getNodeParameter("email", i);
                            body["password"] = this.getNodeParameter("password", i);
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_143 = response.data) !== null && _143 !== void 0 ? _143 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "createMultiple") {
                    try {
                        const data = this.getNodeParameter("data", i);
                        requestMethod = "POST";
                        endpoint = `users`;
                        let response;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_144 = response.data) !== null && _144 !== void 0 ? _144 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "update") {
                    try {
                        const ID = this.getNodeParameter("id", i);
                        const data = this.getNodeParameter("data", i);
                        requestMethod = "PATCH";
                        endpoint = `users/${ID}`;
                        let response;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_145 = response.data) !== null && _145 !== void 0 ? _145 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "updateMultiple") {
                    try {
                        const data = this.getNodeParameter("data", i);
                        requestMethod = "PATCH";
                        endpoint = `users`;
                        let response;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_146 = response.data) !== null && _146 !== void 0 ? _146 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "delete") {
                    try {
                        const ID = this.getNodeParameter("id", i);
                        requestMethod = "DELETE";
                        endpoint = `users/${ID}`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_147 = response.data) !== null && _147 !== void 0 ? _147 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "deleteMultiple") {
                    try {
                        const data = this.getNodeParameter("keys", i);
                        requestMethod = "DELETE";
                        endpoint = `users`;
                        let response;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_148 = response.data) !== null && _148 !== void 0 ? _148 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "getCurrent") {
                    try {
                        requestMethod = "GET";
                        endpoint = `users/me`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_149 = response.data) !== null && _149 !== void 0 ? _149 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "updateMe") {
                    try {
                        const data = this.getNodeParameter("data", i);
                        requestMethod = "PATCH";
                        endpoint = `users/me`;
                        let response;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_150 = response.data) !== null && _150 !== void 0 ? _150 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "inviteUser") {
                    try {
                        const email = this.getNodeParameter("email", i);
                        const role = this.getNodeParameter("role", i);
                        const additionalFields = (_151 = this.getNodeParameter("additionalFields", i)) !== null && _151 !== void 0 ? _151 : {};
                        const data = this.getNodeParameter("data", i);
                        requestMethod = "POST";
                        endpoint = `users/invite`;
                        let response;
                        for (const key in additionalFields) {
                            if (["deep", "filter"].includes(key)) {
                                const object = additionalFields[key];
                                if (typeof object == "string") {
                                    body[key] = JSON.stringify(JSON.parse(object));
                                }
                                else {
                                    body[key] = JSON.stringify(object);
                                }
                            }
                            else {
                                body[key] = additionalFields[key];
                            }
                        }
                        body["email"] = email;
                        body["role"] = role;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_152 = response.data) !== null && _152 !== void 0 ? _152 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "acceptUserInvite") {
                    try {
                        const token = this.getNodeParameter("token", i);
                        const password = this.getNodeParameter("password", i);
                        requestMethod = "POST";
                        endpoint = `users/invite/accept`;
                        let response;
                        body = { token, password };
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_153 = response.data) !== null && _153 !== void 0 ? _153 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "generate2FA") {
                    try {
                        const password = this.getNodeParameter("password", i);
                        requestMethod = "POST";
                        endpoint = `users/me/tfa/generate`;
                        let response;
                        body = { password };
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_154 = response.data) !== null && _154 !== void 0 ? _154 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "enable2FA") {
                    try {
                        const secret = this.getNodeParameter("secret", i);
                        const otp = this.getNodeParameter("otp", i);
                        requestMethod = "POST";
                        endpoint = `users/me/tfa/enable`;
                        let response;
                        body = { secret, otp };
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_155 = response.data) !== null && _155 !== void 0 ? _155 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "disable2FA") {
                    try {
                        const otp = this.getNodeParameter("otp", i);
                        requestMethod = "POST";
                        endpoint = `users/me/tfa/disable`;
                        let response;
                        body = { otp };
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_156 = response.data) !== null && _156 !== void 0 ? _156 : {};
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
            }
            if (resource === "utils") {
                if (operation == "clearCache") {
                    try {
                        requestMethod = "POST";
                        endpoint = `utils/cache/clear`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_157 = response.data) !== null && _157 !== void 0 ? _157 : {};
                            if (["string", "number", "boolean"].includes(typeof responseData)) {
                                const temp = responseData;
                                responseData = { result: temp };
                            }
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "generateHash") {
                    try {
                        const String = this.getNodeParameter("string", i);
                        requestMethod = "POST";
                        endpoint = `utils/hash/generate`;
                        let response;
                        body = { string: String };
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        console.log({ response });
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_158 = response.data) !== null && _158 !== void 0 ? _158 : {};
                            if (["string", "number", "boolean"].includes(typeof responseData)) {
                                const temp = responseData;
                                responseData = { result: temp };
                            }
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "getRandomString") {
                    try {
                        const additionalFields = this.getNodeParameter("additionalFields", i);
                        const length = (_159 = additionalFields === null || additionalFields === void 0 ? void 0 : additionalFields["length"]) !== null && _159 !== void 0 ? _159 : null;
                        requestMethod = "GET";
                        endpoint = `utils/random/string`;
                        let response;
                        if (length)
                            qs = { length };
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_160 = response.data) !== null && _160 !== void 0 ? _160 : {};
                            if (["string", "number", "boolean"].includes(typeof responseData)) {
                                const temp = responseData;
                                responseData = { result: temp };
                            }
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "verfiyHash") {
                    try {
                        const String = this.getNodeParameter("string", i);
                        const hash = this.getNodeParameter("hash", i);
                        requestMethod = "POST";
                        endpoint = `utils/hash/verify`;
                        let response;
                        body = {
                            hash,
                            string: String,
                        };
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        console.log(typeof response);
                        console.log(response);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_161 = response.data) !== null && _161 !== void 0 ? _161 : {};
                            if (["string", "number", "boolean"].includes(typeof responseData)) {
                                const temp = responseData;
                                responseData = { result: temp };
                            }
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "sortItems") {
                    try {
                        const item = this.getNodeParameter("item", i);
                        const to = this.getNodeParameter("to", i);
                        const collection = this.getNodeParameter("collection", i);
                        requestMethod = "POST";
                        endpoint = `utils/sort/${collection}`;
                        let response;
                        body = { item, to };
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_162 = response.data) !== null && _162 !== void 0 ? _162 : {};
                            if (["string", "number", "boolean"].includes(typeof responseData)) {
                                const temp = responseData;
                                responseData = { result: temp };
                            }
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "importFileData") {
                    try {
                        const sendBinaryData = true;
                        const collection = this.getNodeParameter("collection", i);
                        requestMethod = "POST";
                        endpoint = `utils/import/${collection}`;
                        let response;
                        if (sendBinaryData) {
                            const item = items[i].binary;
                            const binaryPropertyName = (_163 = this.getNodeParameter("binaryPropertyName", i)) !== null && _163 !== void 0 ? _163 : null;
                            const binaryData = item[binaryPropertyName];
                            const binaryDataBuffer = await this.helpers.getBinaryDataBuffer(i, binaryPropertyName);
                            const formData = {};
                            Object.assign(formData, {
                                file: {
                                    value: binaryDataBuffer,
                                    options: {
                                        filename: binaryData.fileName,
                                        contentType: binaryData.mimeType,
                                    },
                                },
                            });
                            response = await GenericFunctions_1.directusApiFileRequest.call(this, requestMethod, endpoint, formData, body);
                        }
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = JSON.parse(JSON.stringify(response)).data;
                            if (["string", "number", "boolean"].includes(typeof responseData)) {
                                const temp = responseData;
                                responseData = { result: temp };
                            }
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
            }
            if (resource === "webhooks") {
                if (operation == "get") {
                    try {
                        const ID = this.getNodeParameter("id", i);
                        requestMethod = "GET";
                        endpoint = `webhooks/${ID}`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_164 = response.data) !== null && _164 !== void 0 ? _164 : {};
                            if (["string", "number", "boolean"].includes(typeof responseData)) {
                                const temp = responseData;
                                responseData = { result: temp };
                            }
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "list") {
                    try {
                        returnAll =
                            (_165 = this.getNodeParameter("returnAll", i)) !== null && _165 !== void 0 ? _165 : false;
                        const splitIntoItems = (_166 = this.getNodeParameter("splitIntoItems", i)) !== null && _166 !== void 0 ? _166 : false;
                        const parametersAreJson = (_167 = this.getNodeParameter("jsonParameters", i)) !== null && _167 !== void 0 ? _167 : false;
                        const additionalFields = !parametersAreJson
                            ? this.getNodeParameter("additionalFields", i)
                            : {};
                        if (additionalFields && additionalFields.aggregate) {
                            const aggregation = additionalFields.aggregate.aggregationFunctions;
                            if (aggregation) {
                                aggregation.forEach(a => {
                                    qs[`aggregate[${a.name}]`] = a.value;
                                });
                            }
                        }
                        requestMethod = "GET";
                        endpoint = `webhooks`;
                        let response;
                        if (!parametersAreJson && returnAll === true) {
                            qs.limit = -1;
                        }
                        else if (!parametersAreJson) {
                            qs.limit =
                                this.getNodeParameter("limit", i) != undefined
                                    ? this.getNodeParameter("limit", i)
                                    : 10;
                        }
                        else {
                            qs.limit = null;
                        }
                        if (parametersAreJson) {
                            const queryParametersJson = this.getNodeParameter("queryParametersJson", i);
                            if (typeof queryParametersJson == "string") {
                                qs = JSON.parse(queryParametersJson);
                            }
                            else {
                                qs = JSON.parse(JSON.stringify(queryParametersJson));
                            }
                        }
                        else {
                            for (const key in additionalFields) {
                                if (["deep", "filter"].includes(key)) {
                                    const object = additionalFields[key];
                                    if (typeof object == "string") {
                                        qs[key] = JSON.stringify(JSON.parse(object));
                                    }
                                    else {
                                        qs[key] = JSON.stringify(object);
                                    }
                                }
                                else {
                                    qs[key] = additionalFields[key];
                                }
                            }
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_168 = response.data) !== null && _168 !== void 0 ? _168 : {};
                            if (["string", "number", "boolean"].includes(typeof responseData)) {
                                const temp = responseData;
                                responseData = { result: temp };
                            }
                        }
                        const exportType = (_169 = additionalFields.export) !== null && _169 !== void 0 ? _169 : null;
                        const binary = {};
                        if (exportType) {
                            const binaryPropertyName = additionalFields.binaryPropertyName || "data";
                            let fileName = additionalFields.fileName || "export";
                            let binaryData, mimeType, fileExtension;
                            if (exportType == "json") {
                                binaryData = Buffer.from(JSON.stringify(response));
                                mimeType = "application/json";
                                fileExtension = "json";
                                fileName = `${fileName}.${fileExtension}`;
                            }
                            else if (exportType == "csv") {
                                binaryData = Buffer.from(response);
                                mimeType = "text/csv";
                                fileExtension = "csv";
                                fileName = `${fileName}.${fileExtension}`;
                            }
                            else if (exportType == "xml") {
                                binaryData = Buffer.from(response);
                                mimeType = "application/xml";
                                fileExtension = "xml";
                                fileName = `${fileName}.${fileExtension}`;
                            }
                            else {
                                binaryData = Buffer.alloc(0);
                                mimeType = "";
                            }
                            binary[binaryPropertyName] =
                                await this.helpers.prepareBinaryData(binaryData, fileName, mimeType);
                        }
                        if (splitIntoItems === true && Array.isArray(responseData)) {
                            responseData.forEach((item, index) => {
                                if (exportType) {
                                    returnItems.push({ json: item, binary });
                                }
                                else {
                                    returnItems.push({ json: item });
                                }
                            });
                        }
                        else {
                            if (exportType) {
                                returnItems.push({ json: responseData, binary });
                            }
                            else {
                                returnItems.push({ json: responseData });
                            }
                        }
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "create") {
                    try {
                        const parametersAreJson = (_170 = this.getNodeParameter("jsonParameters", i)) !== null && _170 !== void 0 ? _170 : false;
                        requestMethod = "POST";
                        endpoint = `webhooks`;
                        let response;
                        if (parametersAreJson) {
                            const bodyParametersJson = this.getNodeParameter("bodyParametersJson", i);
                            if (typeof bodyParametersJson == "string") {
                                body = JSON.parse(bodyParametersJson);
                            }
                            else {
                                body = JSON.parse(JSON.stringify(bodyParametersJson));
                            }
                        }
                        else {
                            const name = this.getNodeParameter("name", i);
                            const url = this.getNodeParameter("url", i);
                            const actions = this.getNodeParameter("actions", i);
                            const collections = this.getNodeParameter("collections", i);
                            console.log({ name, url, actions, collections });
                            if (typeof actions == "string") {
                                body["actions"] = JSON.parse(actions);
                            }
                            else {
                                body["actions"] = JSON.parse(JSON.stringify(actions));
                            }
                            if (typeof collections == "string") {
                                body["collections"] = JSON.parse(collections);
                            }
                            else {
                                body["collections"] = JSON.parse(JSON.stringify(collections));
                            }
                            body["name"] = name;
                            body["url"] = url;
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_171 = response.data) !== null && _171 !== void 0 ? _171 : {};
                            if (["string", "number", "boolean"].includes(typeof responseData)) {
                                const temp = responseData;
                                responseData = { result: temp };
                            }
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "createMultiple") {
                    try {
                        const data = this.getNodeParameter("data", i);
                        requestMethod = "POST";
                        endpoint = `webhooks`;
                        let response;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_172 = response.data) !== null && _172 !== void 0 ? _172 : {};
                            if (["string", "number", "boolean"].includes(typeof responseData)) {
                                const temp = responseData;
                                responseData = { result: temp };
                            }
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "update") {
                    try {
                        const ID = this.getNodeParameter("id", i);
                        const data = this.getNodeParameter("data", i);
                        requestMethod = "PATCH";
                        endpoint = `webhooks/${ID}`;
                        let response;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_173 = response.data) !== null && _173 !== void 0 ? _173 : {};
                            if (["string", "number", "boolean"].includes(typeof responseData)) {
                                const temp = responseData;
                                responseData = { result: temp };
                            }
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "updateMultiple") {
                    try {
                        const data = this.getNodeParameter("data", i);
                        requestMethod = "PATCH";
                        endpoint = `webhooks`;
                        let response;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_174 = response.data) !== null && _174 !== void 0 ? _174 : {};
                            if (["string", "number", "boolean"].includes(typeof responseData)) {
                                const temp = responseData;
                                responseData = { result: temp };
                            }
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "delete") {
                    try {
                        const ID = this.getNodeParameter("id", i);
                        requestMethod = "DELETE";
                        endpoint = `webhooks/${ID}`;
                        let response;
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_175 = response.data) !== null && _175 !== void 0 ? _175 : {};
                            if (["string", "number", "boolean"].includes(typeof responseData)) {
                                const temp = responseData;
                                responseData = { result: temp };
                            }
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
                if (operation == "deleteMultiple") {
                    try {
                        const data = this.getNodeParameter("data", i);
                        requestMethod = "DELETE";
                        endpoint = `webhooks`;
                        let response;
                        if (typeof data == "string") {
                            body = JSON.parse(data);
                        }
                        else {
                            body = JSON.parse(JSON.stringify(data));
                        }
                        response = await GenericFunctions_1.directusApiRequest.call(this, requestMethod, endpoint, body, qs);
                        if (typeof response != "object") {
                            responseData = { response };
                        }
                        else {
                            responseData = (_176 = response.data) !== null && _176 !== void 0 ? _176 : {};
                            if (["string", "number", "boolean"].includes(typeof responseData)) {
                                const temp = responseData;
                                responseData = { result: temp };
                            }
                        }
                        returnItems.push({ json: responseData });
                    }
                    catch (error) {
                        if (this.continueOnFail()) {
                            returnItems.push({ json: { error: error.message } });
                            continue;
                        }
                        throw error;
                    }
                }
            }
        }
        return this.prepareOutputData(returnItems);
    }
}
exports.Directus = Directus;
//# sourceMappingURL=Directus.node.js.map