import React, { Component } from 'react';
import {sum ,sub ,mul ,div} from "./06 importexport "

class Practice03 extends Component {
    render() {
        return (
            <>
                <h2>the value of sum =  {sum (4 , 9)}  </h2>
                <h2>the value of sub =  {sub (4 , 9)}  </h2>
                <h2>the value of mul =  {mul (4 , 9)}  </h2>
                <h2>the value of div =  {div (4 , 9)}  </h2>
            </>
        );
    }
}

export default Practice03;