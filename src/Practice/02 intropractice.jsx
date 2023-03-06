import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

class Intropractice extends Component {
  render() {
    return (
      <>
    
        <div className="fs-5 container border ">
          <div className="row offset-4 ">
            <div className="col-12 d-flex">
              <div className="col-4">
                <br />

                <li>
                  <Link to="practice01"> Practice 01</Link>
                </li>
                <li>
                  <Link to="practice02"> Practice 02</Link>
                </li>
                <li>
                  <Link to="practice03"> Practice 03</Link>
                </li>
                <li>
                  <Link to="cardprpos"> Card props</Link>
                </li>
                <li>
                  <Link to="slotmachine"> Slot Machine</Link>
                </li>
                <li>
                  <Link to="gettime"> Get Time</Link>
                </li>
                <li>
                  <Link to="digitalclock">Digital Clock</Link>
                </li>
                <li>
                  <Link to="formcontroll">Form Controll</Link>
                </li>
                <li>
                  <Link to="formcontroll02">Form Controll 02</Link>
                </li>
                <li>
                  <Link to="formspread">Form Spread</Link>
                </li>
              </div>

              <div className="col-4">
                <br />
                <li>
                  <Link to="todolist">ToDo List</Link>
                </li>
                <li>
                  <Link to="incredecre">Increment-Decrement</Link>
                </li>
                <li>
                  <Link to="todolist02">ToDo List 02</Link>
                </li>
                <li>
                  <Link to="questionanswer01">Question Answer</Link>
                </li>
                <li>
                  <Link to="notes">Parag's Note</Link>
                </li>
                <li>
                  <Link to="contextapi">Context API & useContext</Link>
                </li>
                <li>
                  <Link to="useeffect">useEffect</Link>
                </li>
                <li>
                  <Link to="covidapi">Covid API</Link>
                </li>
                <li>
                  <Link to="pokemanaxios">Pokeman Axios</Link>
                </li>
                <li>
                  <Link to="useparam/parag/gohil">useParam</Link>
                </li>
              </div>

              <div  className="col-4">
                <br />
              <li>
                  <Link to="searchany">Search Here !</Link>
                </li>
              <li>
                  <Link to="updatedtodo">ToDo list</Link>
                </li>
              <li>
                  <Link to="usereducer40">UseReducer</Link>
                </li>
              <li>
                  <Link to="usecontext44">useContext</Link>
                </li>
              <li>
                  <Link to="UpdatedTodols">UpdatedTodols (local storage)</Link>
                </li>
              <li>
                  <Link to="usecallback01">usecallback</Link>
                </li>
              <li>
                  <Link to="Usememos">Usememo</Link>
                </li>




              </div>

            </div>
          </div>

        <div className="container border p-4">
          <Outlet></Outlet>
        </div>
        </div>

          
      </>
    );
  }
}

export default Intropractice;
