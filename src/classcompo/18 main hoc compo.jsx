import React, { Component } from 'react';
import Childcompo11 from './19 childhoccompo';

class Mainhoccompo extends Component {
    render() {
        const {show , click} = this.props
        return (
            <div>
                <h4>click to update</h4>
                <pre><h3>    <button onClick={click}>{show}</button></h3></pre>
                
            </div>
        );
    }
}

export default Childcompo11(Mainhoccompo);