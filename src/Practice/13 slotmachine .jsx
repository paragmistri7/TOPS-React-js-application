import React, { Component } from 'react';

const Slot = (props) => {
// let x = "👍"
// let y = "👍"
// let z = "👍"
    
 let  {x ,y ,z } = props
    
    if (x === y && y === z) {
        return (
            <>
                <div className="div text-center ">

                <h2>
                   {x} {y} {z} <br />
                        <span>This is Matching 🆗</span>
                        <hr />
                </h2>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="container text-center">

                <h2>
                   {x} {y} {z} <br />
                    <span>This is Not Matching 🚫</span> <hr />
                </h2>
                </div>
            </>
        )
    }
    
}

class Slotmachine  extends Component {
    render() {
        return (
            <>
                <Slot  x = "🍎"   y = '🍎' z = '🍎'/>
                <Slot  x = "🍎"   y = '😋' z = '🍎'/>
                <Slot  x = '🟢'   y = '🟢' z = "🟢"/>
                <Slot  x = '🍌'   y = '🍎' z = "🥇"/>
                
            </>
        );
    }
}

export default Slotmachine ;