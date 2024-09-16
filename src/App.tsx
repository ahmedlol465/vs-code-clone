import { fileTree } from "./data/data"
import RecursiveComponand from './componend/recursiveComponed'
// import OpenedFilesBar from "./componend/OpenedFileBar"
import ResizableBannel from "./componend/ResizableBannel"
import Preview from "./componend/Preview"
import { useSelector } from "react-redux"
import { RootState } from "./app/store"
import WelcomeTab from "./componend/WelcomeTab"





const App = () => {

  const {openedFile} = useSelector(({tree}: RootState) => tree)
  
  
  return (
    

    <div className="dark:bg-zinc-950 text-white">
      <div className="flex h-screen">
        
        <ResizableBannel
        
          showLeftPanel
          
          leftPanel={
          <div className="w-64 p-2">
            <RecursiveComponand fileTree={fileTree} />
          </div>
        } rightPanel={
          openedFile.length ?  <Preview/> : <WelcomeTab/>
        }/>
        </div>
    </div>
  )
}

export default App
