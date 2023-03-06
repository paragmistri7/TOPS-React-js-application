import { useEffect } from "react"
import { useState } from "react"

const Useeffect02 = () => {

    const [windowscreen, setwindowscreen] = useState(window.screen.width)
    
    const setscreen = () => {
        setwindowscreen (window.innerWidth)
    }

    useEffect(() => {
        console.log("use effect")

        window.addEventListener("resize", setscreen)
 
        // clean up function = clear memory
        return () => {
            console.log("clean up")
        window.removeEventListener("resize", setscreen)         
        }
    })
    return (
        <>
        <h2>your window screen is : -</h2>
        <h2> <pre>          {windowscreen} </pre> </h2>
        </>
    )
}
export default Useeffect02