import { useSelector } from "react-redux"
import FileSyntaxHighLigter from "./FileSyntaxHighLigter"
import OpenedFilesBar from "./OpenedFileBar"
import { RootState } from "../app/store"


const Preview = () => {

    const {  clickedFile } = useSelector((state: RootState) => state.tree)

    return (

        <>
            <OpenedFilesBar/>
            <FileSyntaxHighLigter content={clickedFile.fileContent || ""} />
        </>
    )
}

export default Preview


