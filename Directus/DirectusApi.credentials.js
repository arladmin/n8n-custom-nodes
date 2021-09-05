"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectusApi = void 0;
class DirectusApi {
    constructor() {
        this.name = 'directusApi';
        this.displayName = 'Directus Api';
        this.documentationUrl = 'directus';
        this.properties = [
            {
                displayName: 'Directus Instance URL',
                name: 'url',
                type: 'string',
                default: '',
                placeholder: 'https://my-directus-server or http://directus:8055 (for local docker compose container)',
                description: 'The complete URL of the host with which your Directus instance can be accessed',
                required: true,
            },
            {
                displayName: 'Access Token',
                name: 'accessToken',
                type: 'string',
                default: '',
                placeholder: 'fc529da1-cda4-430f-992c-8b40d145fad0',
                description: 'The Static Token of the user',
                required: true,
            },
        ];
    }
}
exports.DirectusApi = DirectusApi;
//# sourceMappingURL=DirectusApi.credentials.js.map