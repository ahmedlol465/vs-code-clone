export interface IFiles {
    id: string;
    name: string;
    isFolder: boolean;
    children?: IFiles[]
    content?: string
}

