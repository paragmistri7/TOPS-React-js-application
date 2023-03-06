import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const Createnote02 = (props) => {
  const [input, setinput] = useState({
    title: "",
    content: ""
  });
    
    const [expand, setexpand] = useState(false)
  
    const opened = () => {
        setexpand (true)
    }
    const closed = () => {
        setexpand (false)
    }

  const inputdata = (event) => {
    // let name = event.target.name
    // let value = event.target.value

    let {name, value} = event.target;

    setinput((predata) => {
      return {
        ...predata,
        [name]: value,
      };
    });
    };
    const addevent = () => { 
        props.passnote(input)
        setinput({
            title: "",
            content: ""
          });
    }

  return (
    <>
      <div className="createnote_main" onDoubleClick={closed} >
              <div className="createnote_center">
                  
         { expand ? <input
            value = {input.title}
            name="title"
            type="text"
            placeholder="Title"
            onChange={inputdata}
                  />
                  : null} 
                  
          <br />
          <textarea
              value={input.content}
            name="content"
            cols=""
            rows=""
            placeholder="Write a note..."
                      onChange={inputdata}
                      onClick={opened}
                  />
                  
                  {expand ?
                      <button className="noteaddbtn white" onClick={addevent}>
        
            <AddIcon sx={{ fontSize: "40px" }} />
                  </button>
               : null   }
                  
        </div>
      </div>
    </>
  );
};

export default Createnote02;
