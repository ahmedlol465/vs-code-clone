import { IFiles } from "../interfaces"




export const doesObjectExist = (object: IFiles[], id: string) => {
    return object.some(obj => obj.id === id);
}