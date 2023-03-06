import { useReducer } from "react"

const initial = 0

const reducer = (state ,action) => {
    // console.log(state, action)
    // return state
    if (action.type === "increment") { 
       return  state + 1
    }
    if (action.type === "decrement") { 
       return  state - 1
    }
    

} 

const Usereducer01 = () => {
    const [state ,dispatch] = useReducer(reducer , initial)
    return (
        <div className="container offset-6">
        <h3> <pre>        {state} </pre></h3>  
        <button onClick={ ()=>{dispatch({type : "increment"})}}>Increment</button>
        <button onClick={ ()=>{dispatch({type : "decrement"})}}>Decrement</button>
        <br />
        <br />
        <br />
        <br />
        </div>
    )
}
export default Usereducer01