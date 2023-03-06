import { Component } from "react";

function Arryexample01(props) {
    const list = props.name
    console.log(props)
    const updatedList = list.map((i) => {
        
          return <li>{i}</li>
        
    })
    return <ul>{updatedList}</ul>
}

const ab = [11,12,13,14,15]

class Arrayexample extends Component{
    render() {
        return (
            <>
            
                <Arryexample01 name={ab } />
            
            </>
        )
    }
}
export default Arrayexample