import React from "react";
import { useState } from "react";

const Formcontrolled = () => {
  const [data, setdata] = useState();
  const [update, setupdate] = useState();

  const [name, setname] = useState();
  const [lastname, setlastname] = useState();

  const changedata = (event) => {
    setdata(event.target.value);
  };

  const changedatatwo = (e) => {
    setname(e.target.value);
  };

  const updatdata = (em) => {
    em.preventDefault();
    setupdate(data);
    setlastname(name);
  };

  return (
    <>
      <form onSubmit={updatdata}>
        <div className="container text-center">
          <h2>
            Hello {update} {lastname}
          </h2>
          <input
            className="px-3 m-3"
            placeholder="Enter Your Name"
            type="text"
            onChange={changedata}
          />
          <br />

          <input
            className="px-3 m-3"
            placeholder="Enter Your Last Name"
            type="text"
            onChange={changedatatwo}
          />
          <br />

          <button onClick={updatdata}> Click here </button>
        </div>
      </form>
    </>
  );
};

export default Formcontrolled;
