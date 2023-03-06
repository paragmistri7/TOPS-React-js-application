
import { useReducer } from "react"

function init() {
    console.log("init function ")
    return {count : 20 , countx : 30}
}

function reducer(state , action) {
    console.log("reducer function")

   
    switch (action.type) {
        case "increment":
            console.log("logged increment ddd")
            return { count: state.count + 1 }
    
        case "decrement":
           
            return { countx: state.countx - 1 }
    
        default:
            break;
    }
}
const Usereducerexample = ({ inistial }) => {
    console.log("main example")
  const [state , dispatch] = useReducer(reducer , inistial,init)

    return (
        <>
        <button onClick={()=>{dispatch({type : "increment"})}}>click me !{state.count} </button>
        <button onClick={()=>{dispatch({type : "decrement"})}}>click me !{state.countx} </button>
        </>
    )
}
export default Usereducerexample