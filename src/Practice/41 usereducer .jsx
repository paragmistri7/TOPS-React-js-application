import { useReducer } from "react"

const intial = 10

const reducer = (state , action) => {
    console.log(state ,action)
    if (action.type === "INCREMENT") {
        return document.getElementById("diva").innerHTML = '' ,
        state + 1
            
}
    if (action.type === "DECREMENT") {
        if (state >= 1) {
            return state - 1
        } else {
            document.getElementById("diva").innerHTML = "Nagative Value is triggered"
            }
    }
    
    
return state
}

const Usereducer40 = () => {

const [state , dispatch] = useReducer(reducer , intial)

    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-around  ">
                    <div className="col-4 text-center">
                        <h1> {state} </h1>
                        <div>
                            <button onClick={()=>{dispatch({type : "INCREMENT"})}}  >Increment</button>
                            <button onClick={()=>{dispatch({type : "DECREMENT"})}}  >Decrement</button>
                        </div>
                        <p id="diva"  style={{color :"red"}}></p>
                    </div>
                </div>
        </div>
            



        </>
    )
}
export default Usereducer40