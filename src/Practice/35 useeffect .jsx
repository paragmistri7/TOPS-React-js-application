import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

const Useeffect = () => {
  const [data, setdata] = useState(0);
  const [value, setvalue] = useState(0);

  useEffect(() => {
    // alert("useeffect");
  }, [data]);
  console.log("alert uncomment")

  return (
    <>
      <div className="text-center">
        <h1> useEffect </h1>
        <Button
          className="border p-3"
          onClick={() => {
            setdata(data + 1);
          }}
        >
          <h3> click here {data} </h3>
              </Button>
              
        <br /> <br />
        
        <Button
          className="border p-3"
          onClick={() => {
            setvalue(value + 1);
          }}
        > 
          <h3> click here {value}</h3>
        </Button>
      </div>
    </>
  );
};
export default Useeffect;
