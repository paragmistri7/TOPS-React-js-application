import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

export default class Introclass extends Component {
  render() {
    return (
      <>
        <div className="container">

        <br />
        <div className="row offset-3 fs-5 ">
          <li>
            <Link to="constructor"> Constructor</Link>
          </li>
          <li>
            <Link to="state"> State</Link>
          </li>
          <li>
            <Link to="props">Props</Link>
          </li>
          <li>
            <Link to="lifecycle">Life cycle</Link>
          </li>
          <li>
            <Link to="jsxcompo">JSX</Link>
          </li>
          <li>
            <Link to="conditionrender">Condition Rendering</Link>
          </li>
          <li>
            <Link to="controlledcompo">Controlled Component</Link>
          </li>
          <li>
            <Link to="uncontrolledcompo">Uncontrolled Component</Link>
          </li>
          <li>
            <Link to="spreadvsrest">Spread vs Rest</Link>
          </li>
          <li>
            <Link to="compositionvsinheritance">Composition Vs Inheritance</Link>
          </li>
          <li>
            <Link to="arrayexample">Array Example</Link>
          </li>
          <li>
            <Link to="csscompo">CSS Component</Link>
          </li>
          <li>
            <Link to="statelifting">State Lifting</Link>
          </li>
          <li>
            <Link to="hoccomponent">HOC Component</Link>
          </li>
          
        </div>

        </div>
        <div className="container p-3">
        <Outlet></Outlet>

        </div>
      </>
    );
  }
}
