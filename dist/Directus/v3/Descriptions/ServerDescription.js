"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverFields = exports.serverOperations = void 0;
exports.serverOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: {
            show: {
                resource: [
                    'server',
                ],
            },
        },
        options: [
            {
                name: 'Get GraphQL',
                value: 'getGraphQL',
                description: 'Retrieve the GraphQL SDL for the current project.',
            },
            {
                name: 'Get OpenAPI',
                value: 'getOpenAPI',
                description: 'Retrieve the OpenAPI spec for the current project.',
            },
            {
                name: 'Ping Server',
                value: 'pingServer',
                description: 'Ping... pong! 🏓',
            },
            {
                name: 'Server Health',
                value: 'serverHealth',
                description: 'Get the current health status of the server.',
            },
            {
                name: 'System Info',
                value: 'systemInfo',
                description: 'Information about the current installation.',
            },
        ],
        default: 'getGraphQL',
        description: 'The operation to perform.',
    },
];
exports.serverFields = [];
//# sourceMappingURL=ServerDescription.js.map