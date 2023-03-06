import React from "react";
import { useState } from "react";

const Formspread = () => {
  const [input, setinput] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const inputdata = (event) => {
    // console.log(event.target .value)
    setinput((preval) => {
      let { name, value } = event.target;
      console.log(preval);
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div className="container text-center">
        <h4>
          Name : {input.fname} {input.lname} <br />
          Email : {input.email} <br />
          Mobile : {input.phone}
        </h4>
        <hr />
        <input
          type="text"
          name="fname"
          placeholder="Enter Your First Name"
          onChange={inputdata}
        />
        <br />
        <input
          type="text "
          name="lname"
          placeholder="Enter Your Last Name"
          onChange={inputdata}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enater Your Email"
          onChange={inputdata}
        />
        <br />
        <input
          type="number"
          name="phone"
          placeholder="Enter Your Mobile Number"
          onChange={inputdata}
        />
        <br />
        <button>Submit</button>
      </div>
    </>
  );
};
export default Formspread;
