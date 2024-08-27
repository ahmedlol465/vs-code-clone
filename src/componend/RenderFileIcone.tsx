import IconeImg from './IconImg'
import FileIcon from './SVG/File'


interface IProps {
    filename: string
    isOpen?: boolean
    isFolder?: boolean
}


const extentionIconePath: Record<string, string> = {
    //  files
    tsx: "/icons/react_ts",
    jsx: "/icons/javascript",
    html: "/icons/html",
    css: "/icons/css",
    json: "/icons/json",
    js: "/icons/javascript",
    ts: "/icons/typescript",
    svg: "/icons/svg",
    


    // folders
    node_modules: "/icons/folder-node",
    public: "/icons/folder-public",
    src: "/icons/folder-src",
    components: "/icons/folder-components",
   
}



const RenderFileIcone = ({filename, isFolder, isOpen}: IProps) => {
    const extension = filename.split('.').pop();
    

    if (extension && Object.prototype.hasOwnProperty.call(extentionIconePath, extension)) {
        const iconePath = isFolder
            ? isOpen
                ? `${extentionIconePath[extension]}-open.svg`
                : `${extentionIconePath[extension]}.svg`
            : `${extentionIconePath[extension]}.svg`;

        
        return <IconeImg src={iconePath} />
    }





    // if(extension === "tsx") return <IconeImg src="/icons/react_ts.svg" />
    // if(extension === "jsx") return <IconeImg src="/icons/javascript.svg" />
    // if(extension === "html") return <IconeImg src="/icons/html.svg" />
    // if (extension === "css") return <IconeImg src="/icons/css.svg" />
    // if (extension === "json") return <IconeImg src="/icons/json.svg" />
    // if (extension === "js") return <IconeImg src="/icons/javascript.svg" />
    // if (extension === "ts") return <IconeImg src="/icons/typescript.svg" />
    // if (extension === "md") return <IconeImg src="/icons/markdown.svg" />
    // if (extension === "png") return <IconeImg src="/icons/png.svg" />
    // if (extension === "jpg") return <IconeImg src="/icons/jpg.svg" />
    // if (extension === "jpeg") return <IconeImg src="/icons/jpeg.svg" />
    // if (extension === "svg") return <IconeImg src="/icons/svg.svg" />
    // if (extension === "vite") return <IconeImg src="/icons/vite.svg" />
    

    // if (extension === "node_modules" && isFolder) return  isOpen ? (<IconeImg src="/icons/folder-node-open.svg" />
    // ) : ( 
    //     <IconeImg src="/icons/folder-node.svg" />
    // ) 


    // if (extension === "public" && isFolder) return isOpen ? (<IconeImg src="/icons/folder-public-open.svg" />
    // ) : ( 
    //     <IconeImg src="/icons/folder-public.svg" />
    // ) 


    // if (extension === "src") return isFolder && isOpen ? (<IconeImg src="/icons/folder-src-open.svg" />
    // ) : ( 
    //     <IconeImg src="/icons/folder-src.svg" />
    // ) 


    // if (extension === "components") return isFolder && isOpen ? (<IconeImg src="/icons/folder-components-open.svg" />
    // ) : ( 
    //     <IconeImg src="/icons/folder-components.svg" />
    // ) 

    if(isFolder && isOpen) return <IconeImg src="/icons/folder-default-open.svg" />
    if(isFolder && !isOpen) return <IconeImg src="/icons/folder-default.svg" />

    return <FileIcon/>
    
    
}

export default RenderFileIcone