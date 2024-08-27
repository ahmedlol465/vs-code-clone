interface IProps {
    src: string
    classname?: string
}



const IconImg = ({src, classname="w-5 h-5"}: IProps) => {
    return <img className={classname} src={src} />
}


export default IconImg