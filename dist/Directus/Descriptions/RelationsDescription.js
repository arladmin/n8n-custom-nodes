"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.relationsFields = exports.relationsOperations = void 0;
exports.relationsOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: {
            show: {
                resource: [
                    'relations'
                ]
            }
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                description: 'Create a new relation.'
            },
            {
                name: 'Delete',
                value: 'delete',
                description: 'Delete an existing relation.'
            },
            {
                name: 'Get',
                value: 'get',
                description: 'Retrieve a single relation by unique identifier.'
            },
            {
                name: 'List',
                value: 'list',
                description: 'Get Relations in a Collection'
            },
            {
                name: 'List All',
                value: 'listAll',
                description: 'List all relations that exist in Directus.'
            },
            {
                name: 'Update',
                value: 'update',
                description: 'Update an existing relation'
            }
        ],
        default: 'list',
        description: 'The operation to perform.'
    }
];
exports.relationsFields = [
    {
        displayName: 'Collection',
        name: 'collection',
        type: 'options',
        displayOptions: {
            show: {
                operation: [
                    'delete'
                ],
                resource: [
                    'relations'
                ]
            }
        },
        placeholder: 'books',
        default: null,
        description: 'Unique name of the parent collection\n',
        required: true,
        typeOptions: {
            loadOptionsMethod: 'getCollections'
        }
    },
    {
        displayName: 'Field',
        name: 'field',
        type: 'options',
        displayOptions: {
            show: {
                operation: [
                    'delete'
                ],
                resource: [
                    'relations'
                ]
            }
        },
        placeholder: 'author',
        default: null,
        description: 'Name of the field that holds the related primary key. This matches the column name in the database.\n',
        required: true,
        typeOptions: {
            loadOptionsMethod: 'getRelationalFields',
            loadOptionsDependsOn: [
                'collection'
            ]
        }
    },
    {
        displayName: 'Data (JSON)',
        name: 'data',
        type: 'json',
        displayOptions: {
            show: {
                operation: [
                    'create'
                ],
                resource: [
                    'relations'
                ]
            }
        },
        placeholder: '{\n	"collection": "articles",\n	"field": "featured_image",\n	"related_collection": "directus_files"\n}',
        default: null,
        description: 'A partial [relation object](https://docs.directus.io/reference/api/system/relations/#the-relation-object).\n',
        required: true,
        typeOptions: {
            alwaysOpenEditWindow: true
        }
    },
    {
        displayName: 'Collection',
        name: 'collection',
        type: 'options',
        displayOptions: {
            show: {
                operation: [
                    'list'
                ],
                resource: [
                    'relations'
                ]
            }
        },
        placeholder: 'articles',
        default: null,
        description: 'Unique name of the parent collection\n',
        required: true,
        typeOptions: {
            loadOptionsMethod: 'getCollections'
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
                    'relations'
                ]
            }
        }
    },
    {
        displayName: 'Collection',
        name: 'collection',
        type: 'options',
        displayOptions: {
            show: {
                operation: [
                    'get'
                ],
                resource: [
                    'relations'
                ]
            }
        },
        placeholder: 'books',
        default: null,
        description: 'Unique name of the parent collection\n',
        required: true,
        typeOptions: {
            loadOptionsMethod: 'getCollections'
        }
    },
    {
        displayName: 'Field',
        name: 'field',
        type: 'options',
        displayOptions: {
            show: {
                operation: [
                    'get'
                ],
                resource: [
                    'relations'
                ]
            }
        },
        placeholder: 'author',
        default: null,
        description: 'Name of the field that holds the related primary key. This matches the column name in the database.\n',
        required: true,
        typeOptions: {
            loadOptionsMethod: 'getRelationalFields',
            loadOptionsDependsOn: [
                'collection'
            ]
        }
    },
    {
        displayName: 'Collection',
        name: 'collection',
        type: 'options',
        displayOptions: {
            show: {
                operation: [
                    'update'
                ],
                resource: [
                    'relations'
                ]
            }
        },
        placeholder: 'books',
        default: null,
        description: 'Unique name of the parent collection\n',
        required: true,
        typeOptions: {
            loadOptionsMethod: 'getCollections'
        }
    },
    {
        displayName: 'Field',
        name: 'field',
        type: 'options',
        displayOptions: {
            show: {
                operation: [
                    'update'
                ],
                resource: [
                    'relations'
                ]
            }
        },
        placeholder: 'author',
        default: null,
        description: 'Name of the field that holds the related primary key. This matches the column name in the database.\n',
        required: true,
        typeOptions: {
            loadOptionsMethod: 'getRelationalFields',
            loadOptionsDependsOn: [
                'collection'
            ]
        }
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
                    'relations'
                ]
            }
        },
        placeholder: '{\n	"meta": {\n		"one_field": "articles"\n	}\n}',
        default: null,
        description: 'A partial [relation object](https://docs.directus.io/reference/api/system/relations/#the-relation-object).\n',
        required: true,
        typeOptions: {
            alwaysOpenEditWindow: true
        }
    },
    {
        displayName: 'Return All',
        name: 'returnAll',
        type: 'boolean',
        displayOptions: {
            show: {
                resource: [
                    'relations'
                ],
                operation: [
                    'listAll'
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
                    'listAll'
                ],
                resource: [
                    'relations'
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
                    'listAll'
                ],
                resource: [
                    'relations'
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
                    'listAll'
                ],
                resource: [
                    'relations'
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
                    'listAll'
                ],
                resource: [
                    'relations'
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
                    'listAll'
                ],
                resource: [
                    'relations'
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
//# sourceMappingURL=RelationsDescription.js.map