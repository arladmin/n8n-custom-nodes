import {
	INodeProperties,
} from 'n8n-workflow';

export const activityOperations = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    displayOptions: {
      show: {
        resource: [
          'activity'
        ]
      }
    },
    options: [
      {
        name: 'Create',
        value: 'create',
        description: 'Creates a new comment.'
      },
      {
        name: 'Delete',
        value: 'delete',
        description: 'Delete an existing comment. Deleted comments can not be retrieved.'
      },
      {
        name: 'Get',
        value: 'get',
        description: 'Retrieves the details of an existing activity action. Provide the primary key of the activity action and Directus will return the corresponding information.'
      },
      {
        name: 'List',
        value: 'list',
        description: 'Returns a list of activity actions.'
      },
      {
        name: 'Update',
        value: 'update',
        description: 'Update the content of an existing comment.'
      }
    ],
    default: 'list',
    description: 'The operation to perform.'
  }
] as INodeProperties[];

export const activityFields = [
  {
    displayName: 'ID',
    name: 'id',
    type: 'number',
    displayOptions: {
      show: {
        operation: [
          'delete'
        ],
        resource: [
          'activity'
        ]
      }
    },
    placeholder: '1',
    default: 1,
    description: 'Unique identifier for the object.\n',
    required: true,
    typeOptions: {
      minValue: 1
    }
  },
  {
    displayName: 'Item',
    name: 'item',
    type: 'string',
    displayOptions: {
      show: {
        operation: [
          'create'
        ],
        resource: [
          'activity'
        ]
      },
      hide: {
        jsonParameters: [
          true
        ]
      }
    },
    placeholder: '1',
    default: '1\n',
    description: 'Primary Key of the item to comment on.\n',
    required: true,
    typeOptions: {
      minValue: 1
    }
  },
  {
    displayName: 'Comment',
    name: 'comment',
    type: 'string',
    displayOptions: {
      show: {
        operation: [
          'create'
        ],
        resource: [
          'activity'
        ]
      },
      hide: {
        jsonParameters: [
          true
        ]
      }
    },
    placeholder: 'A new comment',
    default: null,
    description: 'The comment content. Supports Markdown.\n',
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
          'activity'
        ]
      },
      hide: {
        jsonParameters: [
          true
        ]
      }
    },
    placeholder: 'projects',
    default: null,
    description: 'Collection in which the item resides.\n',
    required: true,
    typeOptions: {
      loadOptionsMethod: 'getCollections'
    }
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
          'activity'
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
          'activity'
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
    displayName: 'Additional Fields',
    name: 'additionalFields',
    type: 'collection',
    placeholder: 'Add Field',
    default: {},
    displayOptions: {
      show: {
        operation: [
          'create'
        ],
        resource: [
          'activity'
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
        displayName: 'Meta',
        name: 'meta',
        type: 'string',
        placeholder: '',
        default: null,
        description: 'What metadata to return in the response.\n',
        required: false
      }
    ]
  },
  {
    displayName: 'Comment',
    name: 'comment',
    type: 'string',
    displayOptions: {
      show: {
        operation: [
          'update'
        ],
        resource: [
          'activity'
        ]
      }
    },
    placeholder: 'My updated comment',
    default: null,
    description: 'The updated comment content. Supports Markdown.\n',
    required: true
  },
  {
    displayName: 'ID',
    name: 'id',
    type: 'number',
    displayOptions: {
      show: {
        operation: [
          'update'
        ],
        resource: [
          'activity'
        ]
      }
    },
    placeholder: '1',
    default: 1,
    description: 'Index\n',
    required: true,
    typeOptions: {
      minValue: 1
    }
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
          'activity'
        ]
      }
    },
    options: [
      {
        displayName: 'Meta',
        name: 'meta',
        type: 'string',
        placeholder: '',
        default: null,
        description: 'What metadata to return in the response.\n',
        required: false
      }
    ]
  },
  {
    displayName: 'Return All',
    name: 'returnAll',
    type: 'boolean',
    displayOptions: {
      show: {
        resource: [
          'activity'
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
          'activity'
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
          'activity'
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
          'activity'
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
          'activity'
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
          'activity'
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
    displayName: 'ID',
    name: 'id',
    type: 'number',
    displayOptions: {
      show: {
        operation: [
          'get'
        ],
        resource: [
          'activity'
        ]
      }
    },
    placeholder: '1',
    default: 1,
    description: 'Index\n',
    required: true,
    typeOptions: {
      minValue: 1
    }
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
          'activity'
        ]
      }
    },
    options: [
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
        displayName: 'Meta',
        name: 'meta',
        type: 'string',
        placeholder: '',
        default: null,
        description: 'What metadata to return in the response.\n',
        required: false
      }
    ]
  }
] as INodeProperties[];

