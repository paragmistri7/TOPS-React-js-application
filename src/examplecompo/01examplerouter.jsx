import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Introexample02 from "./02introexample";
import Example01 from "./03 example state setstate ";
import LoginControl from "./04 conditional rendering";

import Page from "./06 conditionalrendering";
import Arrayexample from "./08 array list key";
import Objectspread from "./09  object spread ";
import Keymethod from "./09 array ";
import Removefilter from "./09 remove with filter ";
import SignUpDialog from "./10 composition inheritance ";
import EssayForm from "./11 controlled component ";
import Calculator from "./12 state lifiting01 ";
import Api01 from "./31 api";
import UseEffectAPI from "./32 api calling02 ";
import Shortcktevl from "./14 short circuit evalution ";
import Basicform from "./15 basic form ";
import UseEffect01 from "./16 useeffect01 ";
import Useeffect02 from "./17 useeffect 02 ";
import UncontrolleduseRef from "./18 uncontrolled ref ";
import Usereducer01 from "./19 usereducer ";
import Usecontext01 from "./20 usecontext01 ";
import Practice from "../Practice/03 practice01";



class Examplerouter extends Component{
    render() {
        return (
            <>

                <Routes>
                    <Route path="/" element={<Introexample02 />}>
                        <Route path="example01" element = {<Example01/>} />
                        <Route path="conditionalrendering" element = {<LoginControl/>} />                     
                        <Route path="conditionalrendering03" element = {<Page/>} />
                        <Route path="arrayexample" element = {<Arrayexample/>} />
                        <Route path="arrayexample01" element = {<Keymethod/>} />
                        <Route path="objectspread" element = {<Objectspread/>} />
                        <Route path="removefilter" element = {<Removefilter/>} />
                        <Route path="compositioninheritance" element = {<SignUpDialog/>} />
                        <Route path="controlledcompo01" element = {<EssayForm/>} />
                        <Route path="statelifting" element = {<Calculator/>} />
                        <Route path="shortckt" element = {<Shortcktevl/>} />
                        <Route path="basicform" element={<Basicform />} />
                        <Route path="useeffect01" element={<UseEffect01/>} />
                        <Route path="useeffect02" element={<Useeffect02/>} />
                        
                        <Route path="unconrolledref" element = {<UncontrolleduseRef/>} />
                        <Route path="usereducer01" element = {<Usereducer01/>} />
                        <Route path="usecontext01" element = {<Usecontext01/>} />
                        <Route path="api01" element = {<Api01/>} />
                        <Route path="api02" element = {<UseEffectAPI/>} />
                        
                       
                    </Route>
                </Routes>
            </>
        )
    }
}
export default Examplerouter