import { useState } from "react"
import { useRef } from "react"

const UncontrolleduseRef = () => {
    const luckyname = useRef (null)
    const [show , setshow] = useState(false)


    const submitform = (e) => {
        e.preventDefault()
        // console.log(luckyname.current.value)
        // setshow(luckyname.current.value)
        const name = luckyname.current.value
        name === "" ? alert("please enter name") : setshow(true)
    }
    return (
        <>
    
            <form action="" onSubmit={submitform} >
                <div>
                    <label htmlFor="">Enter your name</label> <br />
                    <input type="text" ref={luckyname} />
                </div>
                <button >Submit</button>
            </form>
         
            <h3> {show ? `your lucky name is = ${luckyname.current.value}` : ""} </h3>
        </>
    )
}
export default UncontrolleduseRef