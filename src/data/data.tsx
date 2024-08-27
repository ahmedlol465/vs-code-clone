import { IFiles } from '../interfaces/index'
import {v4 as uuid} from "uuid"

export const fileTree: IFiles = {
        id: uuid(),
        name: 'Vs Code Clone',
        isFolder: true,
        children: [
            {
                id: uuid(),
                name: 'node_modules',
                isFolder: true,
                children: [{
                    id: uuid(),
                    name: ".vite", isFolder: true,
                    children: [
                        {id: uuid(), name: "react.jsx", isFolder: false },
                        {id: uuid(), name: "react.tsx", isFolder: false }
                    ]
                }]
            },
            {
                id: uuid(),
                name: 'index.html',
                isFolder: false
            }, {
                id: uuid(),
                name: "public",
                isFolder: true,
                children: [{
                    id: uuid(),
                    name: 'index.html',
                    isFolder: false,
                    content: "button file content"
                }] 
            }
        ]
    
}