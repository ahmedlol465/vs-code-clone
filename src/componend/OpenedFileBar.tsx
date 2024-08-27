import { RootState } from '../app/store'
 import { useSelector } from 'react-redux'
import OpenedFileBartab from './OpnedFileBarTab'
import DropMenu from './ui/dropMenu'
import { useState } from 'react'

interface IProps {

}


const OpenedFilesBar = ({}: IProps) => {
    const  [menuPosition, setMenuPosition] = useState<{x: number, y: number}>({x: 0, y: 0})
    const  [showMenu, setShowMenu] = useState(false)

    const { openedFile } = useSelector((state: RootState) => state.tree)

    return (
        <div className='w-fit'>
            <div

                className='flex items-center border-b-[1px] border-[#ffffff1f]'
            onContextMenu={e => {
                e.preventDefault()
                setMenuPosition({x: e.clientX, y: e.clientY})
                setShowMenu(true)
            }
            }
            >
                    {openedFile.map(file => <OpenedFileBartab key={file.id} file={file}/>

    )}

              
            </div>
            {showMenu && <DropMenu position={menuPosition} setShowMenu={setShowMenu}/>}

        </div>
    )
}   

export default OpenedFilesBar