import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Constructor from "./constructor";
import Introclass from "./introclass";
import State from "./state.jsx";
import Props from "./props.jsx";
import Lifecyclecomponent from "./lifecyclecomponent.jsx";
import JSXcompo from "./JSXcompo";
import Conditionrender from "./condition rendering";
import Controlledcompo from "./controlled compo";
import Uncontrolledcompo from "./uncontrolled component";
import Spreadvsrest from "./11 spreadvsrest";
import Composition from "./12 comositionvsinheritance";
import Arrayexample from "./13 Array exaple ";
import Csscompo from "./14 Css component ";
import Mainfile01 from "./16 main lifting ";
import Mainhoccompo from "./18 main hoc compo"

export default class Classrouter extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Introclass/>}>
            <Route path="constructor"element={<Constructor/>}></Route>
            <Route path="state" element={<State/>}></Route>
            <Route path="props" element={<Props/>}></Route>
            <Route path="lifecycle"  element={<Lifecyclecomponent/>}></Route>
            <Route path="jsxcompo"  element={<JSXcompo/>}></Route>
            <Route path="conditionrender"  element={<Conditionrender/>}></Route>
            <Route path="controlledcompo"  element={<Controlledcompo/>}></Route>
            <Route path="uncontrolledcompo"  element={<Uncontrolledcompo/>}></Route>
            <Route path="spreadvsrest"  element={<Spreadvsrest/>}></Route>
            <Route path="compositionvsinheritance"  element={<Composition/>}></Route>
            <Route path="arrayexample"  element={<Arrayexample/>}></Route>
            <Route path="csscompo"  element={<Csscompo/>}></Route>
            <Route path="statelifting"  element={<Mainfile01/>}></Route>
            <Route path="hoccomponent"  element={<Mainhoccompo/>}></Route>
          </Route>
        </Routes>
      </>
    );
  }
}
