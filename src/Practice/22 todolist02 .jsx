import React from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

const Todolist02 = () => {
  const [item, setitem] = useState();
    const [data, setdata] = useState([]);
    const [line , setline] = useState(false)


  const Additem = (e) => {
    setitem(e.target.value);
  };

  const updated = (e) => {
    setdata((prevalue) => {
      return [...prevalue, item];
    });
    setitem(" ");
    };
    
    const deletedata = () => {
 setline(true)
    }

  return (
    <>
      <div className="todomain_div m">
        <div className="todocenter_div">
          <h1>ToDo List</h1>
          <input
            onChange={Additem}
            type="text"
            value={item}
            placeholder="Add an Items"
          />

          <IconButton
            aria-label="fingerprint"
            size="medium"
            color="success"
            onClick={updated}
          >
            <AddIcon className="btntodo" fontSize="50px" size="large" />
          </IconButton>
        

          {data.map((cvalue, index) => {
            return (
              <>
                <IconButton aria-label="delete" size="large">
                  <DeleteIcon  className="deletebtn" onClick={deletedata} fontSize="inherit" />
                </IconButton>
                    <span className="fs-5 fw-bold" style={{textDecoration: line ? 'line-through' : "none"}} key={index}>{cvalue} </span>
                    <br />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Todolist02;
