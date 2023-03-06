import { createContext } from "react"
import Usecontext02 from "./21 usecontext02 "

const Name1 = createContext()

const Usecontext01 = () => {


    return (
        <>
            <Name1.Provider value={"parag gohil"}>
         <Usecontext02/>
                parag mistry
                <br /><br /> <br />
           </Name1.Provider>
        </>
    )
}
export default Usecontext01 
export  {Name1}