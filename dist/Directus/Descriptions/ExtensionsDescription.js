"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extensionsFields = exports.extensionsOperations = void 0;
exports.extensionsOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: {
            show: {
                resource: [
                    'extensions'
                ]
            }
        },
        options: [
            {
                name: 'List',
                value: 'list',
                description: 'List the available extensions in the project. The types of extensions that you can list are interfaces, displays, layouts, modules.'
            }
        ],
        default: 'list',
        description: 'The operation to perform.'
    }
];
exports.extensionsFields = [
    {
        displayName: 'Type',
        name: 'type',
        type: 'options',
        displayOptions: {
            show: {
                operation: [
                    'list'
                ],
                resource: [
                    'extensions'
                ]
            }
        },
        placeholder: 'Select an option',
        default: 'displays',
        description: 'Type',
        required: true,
        options: [
            {
                name: 'Displays',
                value: 'displays',
                description: 'Displays'
            },
            {
                name: 'Interfaces',
                value: 'interfaces',
                description: 'Interfaces'
            },
            {
                name: 'Layouts',
                value: 'layouts',
                description: 'Layouts'
            },
            {
                name: 'Modules',
                value: 'modules',
                description: 'Modules'
            }
        ]
    },
    {
        displayName: 'Split Into Items',
        name: 'splitIntoItems',
        type: 'boolean',
        default: false,
        description: 'Outputs each element of an array as own item.',
        required: true,
        displayOptions: {
            show: {
                operation: [
                    'list'
                ],
                resource: [
                    'extensions'
                ]
            }
        }
    }
];
//# sourceMappingURL=ExtensionsDescription.js.map