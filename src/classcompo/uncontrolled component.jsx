import { createRef } from "react";
import { Component } from "react";

class Uncontrolledcompo extends Component{
    constructor() {
        super()
        this.input = new createRef()
    }
    subdata = (e) => {
        e.preventDefault()
        // console.log(this.input)
        console.log(this.input.current)
        console.log(this.input.current.value)
    }
    render() {
        return (
            
            <>
                <h3>Uncontrolled Component</h3>
                
                <input type="text" ref={this.input}></input>
                <button type="submit" onClick={this.subdata}>Submit</button>

                {/* <h2>{JSON.stringify(this.input.current)}</h2> */}
            </>
        )
    }
}
export default Uncontrolledcompo