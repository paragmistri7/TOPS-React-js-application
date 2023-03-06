import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";

const Questionanswer02 = ({ question, answer }) => {
  const [show, setshow] = useState(false);

  const updateicon = () => {
    setshow(!show);
  };

  return (
    <>
      <p className="question">
       
        <span onClick={updateicon}>
          {show ? (
            <Button size="small" variant="outlined" color="error">
            
              <RemoveIcon className="qabtn"/>
            </Button>
          ) : (
            <Button variant="outlined" size="small" color="success">
            
              <AddIcon className="qabtn"/>
            </Button>
          )}
        </span>
        {question}
      </p>
      <p className="answer">{show && answer}</p>
    </>
  );
};

export default Questionanswer02;
