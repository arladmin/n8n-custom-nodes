import { IExecuteFunctions } from "n8n-core";
import { ILoadOptionsFunctions, INodeExecutionData, INodePropertyOptions, INodeType, INodeTypeDescription } from "n8n-workflow";
export declare class Directus implements INodeType {
    description: INodeTypeDescription;
    methods: {
        loadOptions: {
            getCollections(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]>;
            getCustomCollections(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]>;
            getRelationalFields(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]>;
            getFieldsInCollection(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]>;
            getRoles(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]>;
        };
    };
    execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]>;
}
