import { useContext } from "react"
import { myContext } from "../hooks/useContext"

export const TextContainer = () => {
    const ctx = useContext(myContext);
    console.log(ctx);

    return <span style = {{background: ctx.theme === 'dark' ? 'black' : 'pink'}}>
        {ctx.info + ' TEXT'}   
    </span>
}