import { Component } from "react";
import { Outlet } from "react-router-dom";

class JSXcompo extends Component {
  render() {
      let data = "parag gohil"
    return (
        <>
            <h1>JSX Component</h1>
            
            <h3>data</h3>
            <h3>{data}</h3>
        </>
    );
    }
    
}
export default JSXcompo