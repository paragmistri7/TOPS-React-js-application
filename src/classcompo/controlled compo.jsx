import { Component } from "react";

class Controlledcompo extends Component{

    constructor() {
        super()
        this.state = {data : ""}
    }
    changedata = (e) => {
        console.log(e)
        console.log(e.target)
        console.log(e.target.value)

        this.setState ({data :e.target.value})
    }
    render() {
        return (
            <>
            
                <h1>Controlled Component</h1>

                
                <input type="text" value={this.state.data} onChange={this.changedata}></input>
            </>
        )
    }
}
export default Controlledcompo