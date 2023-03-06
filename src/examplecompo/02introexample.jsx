import { Component } from "react";
import { Link, Outlet } from "react-router-dom";

class Introexample02 extends Component {
  render() {
    return (
      <>
        <div className="fs-5 container" >
          <div className="row">
            <div className="col-6">

          <br />
          <li>
            <Link to="example01"> State setstate</Link>
          </li>
          <li>
            <Link to="conditionalrendering"> Conditional Rendering</Link>
          </li>
          
          <li>
            <Link to="conditionalrendering03"> Conditional Rendering 03</Link>
          </li>
          <li>
            <Link to="arrayexample">Array  ( map function)</Link>
          </li>
          <li>
            <Link to="arrayexample01">Array and key method ( map function) </Link>
          </li>
          <li>
            <Link to="objectspread">Object spread</Link>
          </li>
          <li>
            <Link to="removefilter">Remove with Filter</Link>
          </li>
          <li>
            <Link to="compositioninheritance">Composition inheritance ( map function) </Link>
          </li>
          <li>
            <Link to="controlledcompo01">Form ( controlled component )</Link>
              </li>
          <li>
            <Link to="shortckt">Short circuit evalution</Link>
              </li>
          <li>
            <Link to="basicform">Basic Form</Link>
              </li>
          <li>
            <Link to="useeffect01">UseEffect 01</Link>
              </li>
          <li>
            <Link to="useeffect02">UseEffect 02 (clean up function)</Link>
              </li>

            </div>
            


              <div className="col-6">

              <br />
          <li>
            <Link to="unconrolledref">Uncontrolled useRef </Link>
          </li>
          <li>
            <Link to="usereducer01">Usereducer  </Link>
          </li>
          <li>
            <Link to="usecontext01">Usecontext  </Link>
          </li>
          <li>
            <Link to="api01">API calling 01 </Link>
          </li>
          <li>
            <Link to="api02">API calling 02 </Link>
          </li>
         
              </div>

              
          </div>
              <Outlet />
        </div>
      </>
    );
  }
}
export default Introexample02;
