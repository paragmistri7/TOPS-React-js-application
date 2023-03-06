import { useState } from "react"

const Statefunction01 = () => {
    const [data, setdata] = useState(1)
    const clickhandle = () => {
        setdata(data +1)
    }
    return (
        <>
            <pre>

            <h2>   {data}</h2>
            </pre>
            <button onClick={clickhandle}>click to change</button>
        
        </>
    )
}
export default Statefunction01