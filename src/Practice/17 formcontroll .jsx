import React from "react";
import { useState } from "react";

const Formcontroll02 = () => {
  const [data, setdata] = useState({ Fname: "", Lname: "", Email: "" });

  const inputdata = (event) => {
    // console.log(event.target.name);

    // let name = event.target.name;
    // let value = event.target.value;

      let { name, value } = event.target
      
    setdata((prevalue) => {
      // console.log(prevalue)
      if (name === "fname") {
          return {
              Fname: value,
              Lname: prevalue.Lname,
              Email : prevalue.Email
          };
      } else if (name === "lname") {
        return {
          Fname: prevalue.Fname,
            Lname: value,
            Email : prevalue.Email
          
        };
      } else if (name === "email") {
        return {
            Fname: prevalue.Fname,
            Lname: prevalue.Lname,           
            Email: value,
        };
      }
    });
  };

  const dataupdate = (e) => {
      e.preventDefault();
      alert ("form submitted")
  };

  return (
    <>
      <div className="container text-center">
        <form>
          <h4>
            Name : {data.Fname} <br /> Surname : {data.Lname} <br /> Email :
            {data.Email}
                  </h4>
                  <hr />
          <input
            type="text"
            name="fname"
            // value={data.Fname}
            placeholder="Enter Your First Name "
            onChange={inputdata}
          />
          <br /><br />
          <input
            type="text"
            name="lname"
            // value={data.Lname}
            placeholder="Enter Your Last Name "
            onChange={inputdata}
          />
          <br /> <br />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            onChange={inputdata}
          />
          <br /><br />
          <button onClick={dataupdate}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Formcontroll02;
