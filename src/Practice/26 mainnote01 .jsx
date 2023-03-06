import React, { useState } from "react";
import Createnote02 from "./27 createnote02 ";
import Addnote03 from "./28 addnote03 ";
import Noteheader from "./29 noteheader";
import Notefooter from "./30 notefooter ";

const Note = () => {
  const [save, setsave] = useState([]);

  const addnote = (input) => {
    console.log(input);
    setsave((predata) => {
      return [...predata, input];
    });
  };

    const deletedata = (id) => {
        // console.log(id)
        setsave((preval) => {
           return preval.filter((cval, indexs) => {
                return id !== indexs
            })
        })
    } 
  return (
    <>
          <Noteheader />
          <div className="mainnotediv01 josefinSans">
              
          <Createnote02 passnote={addnote} />
          
      
          <div className="addnotesdiv">
          {save.map((prevdata, index) => {
              return (
                  <>
                    <div className="addnotecenterdiv">
                <Addnote03
                  key={index}
                  id={index}
                  title={prevdata.title}
                  content={prevdata.content}
                  ondelete = {deletedata}
                  />
                        </div>
                            
              </>
            );
        })}
        </div>
       
        </div>
          

      <Notefooter />
    </>
  );
};

export default Note;
