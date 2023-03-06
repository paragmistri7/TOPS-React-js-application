import { Component } from "react";


class Composition extends Component{
    render() {
        return (
            <>
            <div className="container">
                    <div className="row">
                        <div className="col">
                            <p> React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.</p>

                            <p> In this section, we will consider a few problems where developers new to React often reach for inheritance, and show how we can solve them with composition.</p>
                        </div>
                    </div>
                </div>


                <Childfunc name="what is your name">
                    your name is parag
                    <br />
        
                </Childfunc>

            </>
        )
    }
}
function Childfunc(e) {
    return (
        <>
            {e.name} <br/>
            {e.children}
        </>
    )
}
export default Composition