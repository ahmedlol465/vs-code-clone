import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { setOpenedFileAction } from "../../app/feature/fileTreeSclice"


interface IProps {
    position: {
        x: number 
        y: number
    }
    setShowMenu: (val: boolean) => void
}




const DropMenu = ({position, setShowMenu}: IProps) => {
    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if(menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setShowMenu(false)
            }
        }
       window.addEventListener("click", handleClickOutside) // when clicking outside of the menuw 
        return () => {
            window.addEventListener("click", handleClickOutside)
        }
    }, [setShowMenu])



    const dispatch = useDispatch()


    const CloseAll = () => {
        dispatch(setOpenedFileAction([]))
        setShowMenu(false)

    }

    const { openedFile, tabIdToRemove } = useSelector((state: RootState) => state.tree);


    const Close = () => {
        const filtered = openedFile.filter(filer => filer.id !== tabIdToRemove)
        dispatch(setOpenedFileAction(filtered))
        setShowMenu(false)
    }


    return (
        <div ref={menuRef}>
             <ul className="bg-white text-black w-fit px-7 py-2 rounded-md"
            style={{
                position: "absolute",
                top: position.y,
                left: position.x
            }}
        >
                <li className="cursor-pointer text gray-700 block px-4 py-2 text-sm hover:bg-gray-300 duration-300 rounded-sm" onClick={Close}
                    >Close</li>
                <li className="cursor-pointer text gray-700 block px-4 py-2 text-sm hover:bg-gray-300 duration-300 rounded-sm" onClick={CloseAll}>Close All</li>
            </ul>
       </div>
    )
}

export default DropMenu