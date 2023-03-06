import { Component } from "react";

class Childfile01 extends Component{

    childhandle = (e)=> {
        console.log("child file " + e.target.value )
        this.props.parent(e.target.value)
    }

    render() {

        return (
            <>
               <input onChange={this.childhandle}></input>
            </>
        )
    }
}
export default Childfile01