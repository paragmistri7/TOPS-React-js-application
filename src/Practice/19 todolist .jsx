import { useState } from "react"
import ToDolists from "./20 todolists "

const Todolist = () => { 

    const [input, setinput] = useState("")
    const [update , setupdate] = useState([])
    
    const inputdata = (event) => {
        setinput (event.target.value)
    }

    const dataprint = () => {
        setupdate((preval) => {
            return [ ...preval , input]
        })
        setinput("")
    }

    const deletedata = (id) => {
        console.log("delete")

        setupdate((prevalue) => {
           return prevalue.filter((ctvalue , index) => {
                return index !== id
            })
        })
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1 className="todo_heading">ToDo List</h1>
                    <br />
                    <input className="todoinput" type="text" placeholder="Add a Note" onChange={inputdata} value={input} />
                    <button onClick={dataprint}> + </button>
                    <br />

                    <p>{update.map((cvalue ,index) => {
                        return (
                            <>
                            <ToDolists key={index} id={index} text={cvalue} onselect = {deletedata}  />
                            </>
                        )
                    })
                    } </p>

                </div>
            </div>
        </>
    )
}
export default Todolist
