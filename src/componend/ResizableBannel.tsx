import { ReactNode } from "react"
import { Panel, PanelGroup, PanelResizeHandle} from "react-resizable-panels"


interface IProps {
    defaultLayout?: number[] | undefined
    leftPanel: ReactNode
    rightPanel: ReactNode
    showLeftPanel: boolean
}
const ResizableBannel = ({defaultLayout = [33, 67], leftPanel, rightPanel, showLeftPanel}: IProps) => {

    const onLayout = (size: number[]) => {
        document.cookie =  `react-resizable-panels:layout=${JSON.stringify(size)}`
    }



    return (
        <PanelGroup direction="horizontal" onLayout={onLayout} autoSaveId="condition" >
            {showLeftPanel && (
                <>

                    <Panel collapsible defaultSize={defaultLayout[0]}>
                        {leftPanel}
                    </Panel>

                    <PanelResizeHandle className="border-r-2 border-[#b5b2b2] "/>


                </>
            )}
   
        <Panel defaultSize={defaultLayout[1]}>
            {rightPanel}
        </Panel>
      </PanelGroup>
    )
}



export default ResizableBannel