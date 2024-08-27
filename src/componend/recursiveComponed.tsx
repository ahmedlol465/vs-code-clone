import { IFiles } from "../interfaces"
import RightArrowIcon from "./SVG/Right"
import  { useState } from "react"
import BottomArrowIcon from "./SVG/Bottom"
import RenderFileIcone from "./RenderFileIcone"
import { useDispatch, useSelector } from "react-redux"
import {  setClickFilesAction, setOpenedFileAction } from "../app/feature/fileTreeSclice"
import { RootState } from "../app/store"
import { doesObjectExist } from "../utils/functionValidation"

interface IProps {
    fileTree: IFiles

}



const RecursiveComponand = ({fileTree}: IProps) => {

    const dispatch = useDispatch()
    const { openedFile } = useSelector((state: RootState) => state.tree)

    const [isOpen, setIsOpen] = useState<boolean>(false)
    
    const toggle = () => setIsOpen(prev => !prev)

    const onFileClick = () => {
        
        const exists = doesObjectExist(openedFile, fileTree.id)

        dispatch(setClickFilesAction({filename: fileTree.name, fileContent: fileTree.content, activeTabId: fileTree.id}))
        if(exists) return
        dispatch(setOpenedFileAction([...openedFile, fileTree]))

    }
    
    
    return (
        <div className="mb-2 ml-1 cursor-pointer" >            
            <div className="flex items-center mb-1.5">
                {fileTree.isFolder ? (
                    <div className="flex items-center" onClick={toggle}>
                        {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
                        <RenderFileIcone filename={fileTree.name}  isOpen={isOpen} isFolder={fileTree.isFolder} />
                        <span className="ml-2" style={{ color: "black"}}>{fileTree.name}</span>
                    </div>
                ) : (
                        <div className="flex items-center mr-2" onClick={onFileClick}>
                            <RenderFileIcone filename={fileTree.name}/>
                            <span className="ml-2" style={{ color: "black"}}>{fileTree.name}</span>
                        </div>
                    )}
            </div>
            
            {isOpen && fileTree.children && fileTree.children.map((file, index) => (
              <RecursiveComponand fileTree={file} key={index}/>
        ))}

        </div>
    )
}




export default RecursiveComponand



