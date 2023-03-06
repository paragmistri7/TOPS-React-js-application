import { Component } from "react";
import Childfile01 from "./17 child lifting ";

class Mainfile01 extends Component{

    parenthandel =(c)=> {
        console.log("parent file " + c)
    }

    render() {
        return (
            <>
                
                <Childfile01 parent = {this.parenthandel} />
            </>
        )
    }
}
export default Mainfile01