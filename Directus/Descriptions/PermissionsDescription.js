"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissionsFields = exports.permissionsOperations = void 0;
exports.permissionsOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: {
            show: {
                resource: [
                    'permissions'
                ]
            }
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                description: 'Create a new permission.'
            },
            {
                name: 'Create Multiple',
                value: 'createMultiple',
                description: 'Create Multiple Permission Rules'
            },
            {
                name: 'Delete',
                value: 'delete',
                description: 'Delete an existing permission'
            },
            {
                name: 'Delete Multiple',
                value: 'deleteMultiple',
                description: 'Delete Multiple Permissions'
            },
            {
                name: 'Get',
                value: 'get',
                description: 'Retrieve a single permissions object by unique identifier.'
            },
            {
                name: 'List',
                value: 'list',
                description: 'List all permissions.'
            },
            {
                name: 'Update',
                value: 'update',
                description: 'Update an existing permission'
            },
            {
                name: 'Update Multiple',
                value: 'updateMultiple',
                description: 'Update Multiple Permissions'
            }
        ],
        default: 'list',
        description: 'The operation to perform.'
    }
];
exports.permissionsFields = [
    {
        displayName: 'Keys (JSON)',
        name: 'keys',
        type: 'json',
        displayOptions: {
            show: {
                operation: [
                    'deleteMultiple'
                ],
                resource: [
                    'permissions'
                ]
            }
        },
        placeholder: '[34, 64]',
        default: null,
        description: 'An array of permission primary keys\n',
        required: true,
        typeOptions: {
            alwaysOpenEditWindow: true
        }
    },
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        displayOptions: {
            show: {
                operation: [
                    'update'
                ],
                resource: [
                    'permissions'
                ]
            }
        },
        placeholder: '34',
        default: null,
        description: 'Primary key of the permission rule.\n',
        required: true
    },
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
                    'permissions'
                ]
            }
        },
        placeholder: '{\n	"fields": ["id", "title", "body"]\n}',
        default: null,
        description: 'A partial [permissions object](https://docs.directus.io/reference/api/system/permissions/#the-permission-object).\n',
        required: true,
        typeOptions: {
            alwaysOpenEditWindow: true
        }
    },
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        displayOptions: {
            show: {
                operation: [
                    'delete'
                ],
                resource: [
                    'permissions'
                ]
            }
        },
        placeholder: '34',
        default: null,
        description: 'Primary key of the permission rule.\n',
        required: true
    },
    {
        displayName: 'Collection',
        name: 'collection',
        type: 'options',
        displayOptions: {
            show: {
                operation: [
                    'create'
                ],
                resource: [
                    'permissions'
                ]
            },
            hide: {
                jsonParameters: [
                    true
                ]
            }
        },
        placeholder: 'customers',
        default: null,
        description: 'What collection this permission applies to.\n',
        required: true,
        typeOptions: {
            loadOptionsMethod: 'getCollections'
        }
    },
    {
        displayName: 'Action',
        name: 'action',
        type: 'options',
        displayOptions: {
            show: {
                operation: [
                    'create'
                ],
                resource: [
                    'permissions'
                ]
            },
            hide: {
                jsonParameters: [
                    true
                ]
            }
        },
        placeholder: 'create',
        default: 'create',
        description: 'What CRUD operation this permission rule applies to. One of `create`, `read`, `update`, `delete`.\n',
        required: true,
        options: [
            {
                name: 'Create',
                value: 'create',
                description: 'Create'
            },
            {
                name: 'Delete',
                value: 'delete',
                description: 'Delete'
            },
            {
                name: 'Read',
                value: 'read',
                description: 'Read'
            },
            {
                name: 'Update',
                value: 'update',
                description: 'Update'
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
                    'create'
                ],
                resource: [
                    'permissions'
                ]
            }
        },
        placeholder: '',
        default: false,
        description: 'If the query and/or body parameter should be set via the value-key pair UI or JSON/RAW.\n',
        required: true
    },
    {
        displayName: 'Body Parameters',
        name: 'bodyParametersJson',
        type: 'json',
        required: true,
        displayOptions: {
            show: {
                operation: [
                    'create'
                ],
                resource: [
                    'permissions'
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
        description: 'Body parameters as JSON or RAW.'
    },
    {
        displayName: 'Data (JSON)',
        name: 'data',
        type: 'json',
        displayOptions: {
            show: {
                operation: [
                    'updateMultiple'
                ],
                resource: [
                    'permissions'
                ]
            }
        },
        placeholder: '{\n	"keys": [34, 65],\n	"data": {\n		"fields": ["id", "title", "body"]\n	}\n}',
        default: null,
        description: 'Required:\n- keys [Array of primary keys of the permissions you\'d like to update.]\n- data [Any of [the permission object](https://docs.directus.io/reference/api/system/permissions/#the-permission-object)\'s properties.]\n',
        required: true,
        typeOptions: {
            alwaysOpenEditWindow: true
        }
    },
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        displayOptions: {
            show: {
                operation: [
                    'get'
                ],
                resource: [
                    'permissions'
                ]
            }
        },
        placeholder: '34',
        default: null,
        description: 'Primary key of the permission rule.\n',
        required: true
    },
    {
        displayName: 'Return All',
        name: 'returnAll',
        type: 'boolean',
        displayOptions: {
            show: {
                resource: [
                    'permissions'
                ],
                operation: [
                    'list'
                ]
            },
            hide: {
                jsonParameters: [
                    true
                ]
            }
        },
        default: true,
        description: 'If all results should be returned or only up to a given limit.',
        required: true
    },
    {
        displayName: 'Limit',
        name: 'limit',
        type: 'number',
        displayOptions: {
            show: {
                operation: [
                    'list'
                ],
                resource: [
                    'permissions'
                ],
                returnAll: [
                    false
                ]
            },
            hide: {
                jsonParameters: [
                    true
                ]
            }
        },
        placeholder: '',
        default: 50,
        description: 'A limit on the number of objects that are returned.\n',
        required: true,
        typeOptions: {
            minValue: 1,
            maxValue: 100
        }
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
                    'permissions'
                ]
            }
        }
    },
    {
        displayName: 'JSON/RAW Parameters',
        name: 'jsonParameters',
        type: 'boolean',
        displayOptions: {
            show: {
                operation: [
                    'list'
                ],
                resource: [
                    'permissions'
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
                    'list'
                ],
                resource: [
                    'permissions'
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
                    'list'
                ],
                resource: [
                    'permissions'
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
        displayName: 'Data (JSON)',
        name: 'data',
        type: 'json',
        displayOptions: {
            show: {
                operation: [
                    'createMultiple'
                ],
                resource: [
                    'permissions'
                ]
            }
        },
        placeholder: '[\n	{\n		"collection": "pages",\n		"action": "read",\n		"role": "c86c2761-65d3-43c3-897f-6f74ad6a5bd7",\n		"fields": ["id", "title"]\n	},\n	{\n		"collection": "pages",\n		"action": "create",\n		"role": "c86c2761-65d3-43c3-897f-6f74ad6a5bd7",\n		"fields": ["id", "title"]\n	}\n]',
        default: null,
        description: 'An array of partial [permissions objects](https://docs.directus.io/reference/api/system/permissions/#the-permission-object). `action` and `collection` are required.\n',
        required: true,
        typeOptions: {
            alwaysOpenEditWindow: true
        }
    }
];
//# sourceMappingURL=PermissionsDescription.js.map