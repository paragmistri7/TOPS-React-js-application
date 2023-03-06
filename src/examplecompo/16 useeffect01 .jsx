import { useState } from "react"
import { useEffect } from "react"

const UseEffect01 = () => {
    const [data , setdata] = useState(0)

    console.log("useeffect outside 1")

    useEffect(() => {
        console.log("use effect in 1")

        if (data >= 1) {
            document.title = `Update :- (${data})`
        } else {
            document.title = `Update`
            
        }
    }, [data])

    useEffect(() => {
       console.log("use effect in 2")
    }, [])


    console.log("useeffect outside 2")
    
    return (
        <>
            <br />

            <h2>Counter :- {data}</h2>
            <button onClick={() => {
                    setdata(data + 1)
                }
            } >click</button>
        </>
    )
}
export default UseEffect01