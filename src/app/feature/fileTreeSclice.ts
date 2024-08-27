import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFiles } from "../../interfaces";

interface IClickedFile {
    activeTabId: string | null,
    filename: string
    fileContent: string  | undefined
}

export interface IInitiallState {
    openedFile: IFiles[]
    clickedFile: IClickedFile
    tabIdToRemove: string | null
}

const initialState: IInitiallState = {
    openedFile: [],
    clickedFile: {
        activeTabId: null,
        filename: "",
        fileContent: "",
    },
    tabIdToRemove: null
}


 const fileTreeSlice = createSlice({
    name: 'fileTree',
    initialState,
    reducers: {
        setOpenedFileAction: (state, action: PayloadAction<IFiles[]>) => {
            state.openedFile = action.payload
        },
         setClickFilesAction: (state, action: PayloadAction<IClickedFile>) => {

            state.clickedFile = action.payload
        },
         setTabIdToRemoveAction: (state, action: PayloadAction<string | null>) => {
            state.tabIdToRemove = action.payload
        }
    }
})

export const { setOpenedFileAction, setClickFilesAction, setTabIdToRemoveAction }  = fileTreeSlice.actions


export default fileTreeSlice.reducer