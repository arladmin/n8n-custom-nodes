"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsFields = exports.settingsOperations = void 0;
exports.settingsOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: {
            show: {
                resource: [
                    'settings'
                ]
            }
        },
        options: [
            {
                name: 'Get',
                value: 'get',
                description: 'Retrieve Settings'
            },
            {
                name: 'Update',
                value: 'update',
                description: 'Update the settings'
            }
        ],
        default: 'get',
        description: 'The operation to perform.'
    }
];
exports.settingsFields = [
    {
        displayName: 'Data (JSON)',
        name: 'data',
        type: 'json',
        displayOptions: {
            show: {
                operation: [
                    'update'
                ],
                resource: [
                    'settings'
                ]
            }
        },
        placeholder: '{\n	"project_url": "https://example.com/"\n}',
        default: null,
        description: 'A partial [settings object](https://docs.directus.io/reference/api/system/settings/#the-settings-object).\n',
        required: true,
        typeOptions: {
            alwaysOpenEditWindow: true
        }
    },
    {
        displayName: 'JSON/RAW Parameters',
        name: 'jsonParameters',
        type: 'boolean',
        displayOptions: {
            show: {
                operation: [
                    'update'
                ],
                resource: [
                    'settings'
                ]
            }
        },
        placeholder: '',
        default: false,
        description: 'If the query and/or body parameter should be set via the value-key pair UI or JSON/RAW.\n',
        required: true
    },
    {
        displayName: 'Query Parameters',
        name: 'queryParametersJson',
        type: 'json',
        required: true,
        displayOptions: {
            show: {
                operation: [
                    'update'
                ],
                resource: [
                    'settings'
                ],
                jsonParameters: [
                    true
                ]
            }
        },
        typeOptions: {
            alwaysOpenEditWindow: true
        },
        default: '',
        description: 'Query parameters as JSON (flat object).'
    },
    {
        displayName: 'Update Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                operation: [
                    'update'
                ],
                resource: [
                    'settings'
                ]
            },
            hide: {
                jsonParameters: [
                    true
                ]
            }
        },
        options: [
            {
                displayName: 'Binary Property for Export Data',
                name: 'binaryPropertyName',
                type: 'string',
                default: 'data',
                description: 'Name of the binary property to download the data to.'
            },
            {
                displayName: 'Deep (JSON)',
                name: 'deep',
                type: 'json',
                placeholder: '',
                default: null,
                description: 'Deep allows you to set any of the other query parameters on a nested relational dataset.\n',
                required: false,
                typeOptions: {
                    alwaysOpenEditWindow: true
                }
            },
            {
                displayName: 'Export',
                name: 'export',
                type: 'options',
                placeholder: 'Select an option',
                default: 'csv',
                description: 'Saves the API response to a file. Accepts one of json, csv, xml.\n',
                required: false,
                options: [
                    {
                        name: 'CSV',
                        value: 'csv',
                        description: 'CSV'
                    },
                    {
                        name: 'JSON',
                        value: 'json',
                        description: 'JSON'
                    },
                    {
                        name: 'XML',
                        value: 'xml',
                        description: 'XML'
                    }
                ]
            },
            {
                displayName: 'Fields',
                name: 'fields',
                type: 'string',
                placeholder: '',
                default: null,
                description: 'Control what fields are being returned in the object.\n',
                required: false
            },
            {
                displayName: 'File Name for Export Data',
                name: 'fileName',
                type: 'string',
                default: 'export',
                description: 'File Name for the Export data without the extension'
            },
            {
                displayName: 'Filter (JSON)',
                name: 'filter',
                type: 'json',
                placeholder: '',
                default: null,
                description: 'Select items in collection by given conditions.\n',
                required: false,
                typeOptions: {
                    alwaysOpenEditWindow: true
                }
            },
            {
                displayName: 'Meta',
                name: 'meta',
                type: 'string',
                placeholder: '',
                default: null,
                description: 'What metadata to return in the response.\n',
                required: false
            },
            {
                displayName: 'Offset',
                name: 'offset',
                type: 'number',
                placeholder: '',
                default: null,
                description: 'How many items to skip when fetching data.\n',
                required: false
            },
            {
                displayName: 'Search',
                name: 'search',
                type: 'string',
                placeholder: '',
                default: null,
                description: 'Filter by items that contain the given search query in one of their fields.\n',
                required: false
            },
            {
                displayName: 'Sort',
                name: 'sort',
                type: 'string',
                placeholder: '',
                default: null,
                description: 'How to sort the returned items. \`sort\` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (\` - \`) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a \` ? \` to sort randomly.\n',
                required: false
            }
        ]
    },
    {
        displayName: 'JSON/RAW Parameters',
        name: 'jsonParameters',
        type: 'boolean',
        displayOptions: {
            show: {
                operation: [
                    'get'
                ],
                resource: [
                    'settings'
                ]
            }
        },
        placeholder: '',
        default: false,
        description: 'If the query and/or body parameter should be set via the value-key pair UI or JSON/RAW.\n',
        required: true
    },
    {
        displayName: 'Query Parameters',
        name: 'queryParametersJson',
        type: 'json',
        required: true,
        displayOptions: {
            show: {
                operation: [
                    'get'
                ],
                resource: [
                    'settings'
                ],
                jsonParameters: [
                    true
                ]
            }
        },
        typeOptions: {
            alwaysOpenEditWindow: true
        },
        default: '',
        description: 'Query parameters as JSON (flat object).'
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                operation: [
                    'get'
                ],
                resource: [
                    'settings'
                ]
            },
            hide: {
                jsonParameters: [
                    true
                ]
            }
        },
        options: [
            {
                displayName: 'Binary Property for Export Data',
                name: 'binaryPropertyName',
                type: 'string',
                default: 'data',
                description: 'Name of the binary property to download the data to.'
            },
            {
                displayName: 'Deep (JSON)',
                name: 'deep',
                type: 'json',
                placeholder: '',
                default: null,
                description: 'Deep allows you to set any of the other query parameters on a nested relational dataset.\n',
                required: false,
                typeOptions: {
                    alwaysOpenEditWindow: true
                }
            },
            {
                displayName: 'Export',
                name: 'export',
                type: 'options',
                placeholder: 'Select an option',
                default: 'csv',
                description: 'Saves the API response to a file. Accepts one of json, csv, xml.\n',
                required: false,
                options: [
                    {
                        name: 'CSV',
                        value: 'csv',
                        description: 'CSV'
                    },
                    {
                        name: 'JSON',
                        value: 'json',
                        description: 'JSON'
                    },
                    {
                        name: 'XML',
                        value: 'xml',
                        description: 'XML'
                    }
                ]
            },
            {
                displayName: 'Fields',
                name: 'fields',
                type: 'string',
                placeholder: '',
                default: null,
                description: 'Control what fields are being returned in the object.\n',
                required: false
            },
            {
                displayName: 'File Name for Export Data',
                name: 'fileName',
                type: 'string',
                default: 'export',
                description: 'File Name for the Export data without the extension'
            },
            {
                displayName: 'Filter (JSON)',
                name: 'filter',
                type: 'json',
                placeholder: '',
                default: null,
                description: 'Select items in collection by given conditions.\n',
                required: false,
                typeOptions: {
                    alwaysOpenEditWindow: true
                }
            },
            {
                displayName: 'Meta',
                name: 'meta',
                type: 'string',
                placeholder: '',
                default: null,
                description: 'What metadata to return in the response.\n',
                required: false
            },
            {
                displayName: 'Offset',
                name: 'offset',
                type: 'number',
                placeholder: '',
                default: null,
                description: 'How many items to skip when fetching data.\n',
                required: false
            },
            {
                displayName: 'Search',
                name: 'search',
                type: 'string',
                placeholder: '',
                default: null,
                description: 'Filter by items that contain the given search query in one of their fields.\n',
                required: false
            },
            {
                displayName: 'Sort',
                name: 'sort',
                type: 'string',
                placeholder: '',
                default: null,
                description: 'How to sort the returned items. \`sort\` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (\` - \`) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a \` ? \` to sort randomly.\n',
                required: false
            }
        ]
    }
];
//# sourceMappingURL=SettingsDescription.js.map