import { Component } from "react"

const Childcompo11 = (OriginalComponent) => {
    
    class Newcompo22 extends Component{
        constructor() {
            super()
            this.state = {count : 1}
        }
        clicked = () => {
            this.setState({count : this.state.count + 1})
        }
        render() {
            return (
                <>
                <OriginalComponent click = {this.clicked} show = {this.state.count}  />
                </>
            )
        }
    }
    return Newcompo22
}
export default Childcompo11