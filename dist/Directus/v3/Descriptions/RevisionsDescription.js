"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revisionsFields = exports.revisionsOperations = void 0;
exports.revisionsOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: {
            show: {
                resource: [
                    'revisions',
                ],
            },
        },
        options: [
            {
                name: 'Get',
                value: 'get',
                description: 'Retrieve a single revision by unique identifier.',
            },
            {
                name: 'List',
                value: 'list',
                description: 'List the revisions.',
            },
        ],
        default: 'list',
        description: 'The operation to perform.',
    },
];
exports.revisionsFields = [
    {
        displayName: 'Return All',
        name: 'returnAll',
        type: 'boolean',
        displayOptions: {
            show: {
                resource: [
                    'revisions',
                ],
                operation: [
                    'list',
                ],
            },
            hide: {
                jsonParameters: [
                    true,
                ],
            },
        },
        default: true,
        description: 'If all results should be returned or only up to a given limit.',
        required: true,
    },
    {
        displayName: 'Limit',
        name: 'limit',
        type: 'number',
        displayOptions: {
            show: {
                operation: [
                    'list',
                ],
                resource: [
                    'revisions',
                ],
                returnAll: [
                    false,
                ],
            },
            hide: {
                jsonParameters: [
                    true,
                ],
            },
        },
        placeholder: '',
        default: 50,
        description: 'A limit on the number of objects that are returned.\n',
        required: true,
        typeOptions: {
            minValue: 1,
            maxValue: 100,
        },
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
                    'list',
                ],
                resource: [
                    'revisions',
                ],
            },
        },
    },
    {
        displayName: 'JSON/RAW Parameters',
        name: 'jsonParameters',
        type: 'boolean',
        displayOptions: {
            show: {
                operation: [
                    'list',
                ],
                resource: [
                    'revisions',
                ],
            },
        },
        placeholder: '',
        default: false,
        description: 'If the query and/or body parameter should be set via the value-key pair UI or JSON/RAW.\n',
        required: true,
    },
    {
        displayName: 'Query Parameters',
        name: 'queryParametersJson',
        type: 'json',
        required: true,
        displayOptions: {
            show: {
                operation: [
                    'list',
                ],
                resource: [
                    'revisions',
                ],
                jsonParameters: [
                    true,
                ],
            },
        },
        typeOptions: {
            alwaysOpenEditWindow: true,
        },
        default: '',
        description: 'Query parameters as JSON (flat object).',
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
                    'list',
                ],
                resource: [
                    'revisions',
                ],
            },
            hide: {
                jsonParameters: [
                    true,
                ],
            },
        },
        options: [
            {
                displayName: 'Aggregate',
                name: 'aggregate',
                type: 'fixedCollection',
                placeholder: 'Add Aggregation Functions',
                default: '',
                description: 'Aggregate functions allow you to perform calculations on a set of values, returning a single result.\n',
                required: false,
                typeOptions: {
                    multipleValues: true,
                },
                options: [
                    {
                        name: 'aggregationFunctions',
                        displayName: 'Functions',
                        values: [
                            {
                                displayName: 'Name',
                                name: 'name',
                                type: 'options',
                                default: 'count',
                                options: [
                                    {
                                        name: 'Count',
                                        value: 'count',
                                        description: 'Counts how many items there are',
                                    },
                                    {
                                        name: 'Count Distinct',
                                        value: 'countDistinct',
                                        description: 'Counts how many unique items there are',
                                    },
                                    {
                                        name: 'SUM',
                                        value: 'sum',
                                        description: 'Adds together the values in the given field',
                                    },
                                    {
                                        name: 'SUM Distinct',
                                        value: 'sumDistinct',
                                        description: 'Adds together the unique values in the given field',
                                    },
                                    {
                                        name: 'Average',
                                        value: 'avg',
                                        description: 'Get the average value of the given field',
                                    },
                                    {
                                        name: 'Average Distinct',
                                        value: 'avgDistinct',
                                        description: 'Get the average value of the unique values in the given field',
                                    },
                                    {
                                        name: 'Minimum',
                                        value: 'min',
                                        description: 'Return the lowest value in the field',
                                    },
                                    {
                                        name: 'Maximum',
                                        value: 'max',
                                        description: 'Return the highest value in the field',
                                    },
                                ],
                                description: 'Aggregation Function',
                            },
                            {
                                displayName: 'Field',
                                name: 'value',
                                type: 'options',
                                default: '',
                                description: 'Field to apply aggregation on',
                                typeOptions: {
                                    loadOptionsMethod: 'getFieldsInCollection',
                                },
                            },
                        ],
                    },
                ],
            },
            {
                displayName: 'Binary Property for Export Data',
                name: 'binaryPropertyName',
                type: 'string',
                default: 'data',
                description: 'Name of the binary property to download the data to.',
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
                    alwaysOpenEditWindow: true,
                },
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
                        description: 'CSV',
                    },
                    {
                        name: 'JSON',
                        value: 'json',
                        description: 'JSON',
                    },
                    {
                        name: 'XML',
                        value: 'xml',
                        description: 'XML',
                    },
                ],
            },
            {
                displayName: 'Fields',
                name: 'fields',
                type: 'string',
                placeholder: '',
                default: null,
                description: 'Control what fields are being returned in the object.\n',
                required: false,
            },
            {
                displayName: 'File Name for Export Data',
                name: 'fileName',
                type: 'string',
                default: 'export',
                description: 'File Name for the Export data without the extension',
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
                    alwaysOpenEditWindow: true,
                },
            },
            {
                displayName: 'Group By',
                name: 'groupBy',
                type: 'string',
                placeholder: 'author,year(publish_date)',
                default: null,
                description: 'Grouping allows for running the aggregation functions based on a shared value. This allows for things like "Average rating per month" or "Total sales of items in the jeans category".\n',
                required: false,
            },
            {
                displayName: 'Meta',
                name: 'meta',
                type: 'string',
                placeholder: '',
                default: null,
                description: 'What metadata to return in the response.\n',
                required: false,
            },
            {
                displayName: 'Offset',
                name: 'offset',
                type: 'number',
                placeholder: '',
                default: null,
                description: 'How many items to skip when fetching data.\n',
                required: false,
            },
            {
                displayName: 'Search',
                name: 'search',
                type: 'string',
                placeholder: '',
                default: null,
                description: 'Filter by items that contain the given search query in one of their fields.\n',
                required: false,
            },
            {
                displayName: 'Sort',
                name: 'sort',
                type: 'string',
                placeholder: '',
                default: null,
                description: 'How to sort the returned items. \`sort\` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (\` - \`) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a \` ? \` to sort randomly.\n',
                required: false,
            },
        ],
    },
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
        displayOptions: {
            show: {
                operation: [
                    'get',
                ],
                resource: [
                    'revisions',
                ],
            },
        },
        placeholder: '368',
        default: null,
        description: 'Primary key of the revision.\n',
        required: true,
    },
];
//# sourceMappingURL=RevisionsDescription.js.map