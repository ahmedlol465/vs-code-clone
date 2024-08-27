import { useDispatch, useSelector } from "react-redux"
import { IFiles } from "../interfaces"
import RenderFileIcone from "./RenderFileIcone"
import {  setClickFilesAction, setOpenedFileAction, setTabIdToRemoveAction } from "../app/feature/fileTreeSclice"
import { RootState } from '../app/store'
import CloseIcon from "./SVG/CloseIcon"


interface IProps {
    file: IFiles
}


const OpenedFileBartab = ({file}: IProps) => {



    const dispatch = useDispatch()

    
    const { openedFile ,clickedFile: { activeTabId } } = useSelector((state: RootState) => state.tree);

    const onClick = () => {
        dispatch(setClickFilesAction({filename: file.name, fileContent: file.content, activeTabId: file.id}))
    }

    const onRemove = (id: string) => {
        const filtered = openedFile.filter(filer => filer.id !== id)
        const lastTab = filtered[filtered.length - 1]
        if (!lastTab) {
            dispatch(setOpenedFileAction([]))
            dispatch(setClickFilesAction({filename: "", fileContent: "", activeTabId: null}))

            return
        }
        dispatch(setOpenedFileAction(filtered))
        dispatch(setClickFilesAction({filename: lastTab.name, fileContent: lastTab.content, activeTabId: lastTab.id}))

    }







    
    
    return (
        <div className={`flex items-center  p-2 border-t-2 
            ${file.id === activeTabId ? "border-[#936c93]" : "border-transparent"}

            `} onClick={onClick}
            onContextMenu={e => {
                e.preventDefault()
                dispatch(setTabIdToRemoveAction(file.id))
            }}
        //     style={{
        //     borderTop: file.id === activeTabId ? "2px solid red" : "2px solid transparent"
            // }}
            

        >

                <RenderFileIcone filename={file.name}/>

            <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mr-2 p-2 rounded-md" style={{ color: "black"}}>{file.name}</span>
            <span className="cursor-pointer bg-slate-900 hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md"
                onClick={
                    e => {
                        e.stopPropagation()
                        onRemove(file.id)
                    }
                    }
            >
                <CloseIcon/>
            </span>

            
        </div>
    )
}
export default OpenedFileBartab