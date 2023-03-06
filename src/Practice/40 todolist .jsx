import React, { useState } from "react";
import note from "../photos/note.png";
import { IoIosAddCircle } from "react-icons/io";
import { FaTrash, FaEdit } from "react-icons/fa";

const Updatedtodo = () => {

  const [input, setinput] = useState("");
  const [add, setadd] = useState([]);
  const [toggle, settoggle] = useState(true);
  const [iseditdata, setiseditdata] = useState();

  const inputdata = () => {
    if (!input) {
      alert("Plese fill data");
    } else if (input && !toggle) {
        setadd(
            add.map((pelem) => {
          if (pelem.id === iseditdata) {
            return { ...pelem, name: input };
            }
            return pelem
        })
        );
        setinput("")
        settoggle(true)
        setiseditdata(null)
    } else {
      const newdata = { id: new Date().getTime().toString(), name: input };

      setadd([...add, newdata]);
      setinput("");
    }
  };

  const deleteitem = (elem) => {
    const deletedata = add.filter((cval) => {
      return elem !== cval.id;
    });
    setadd(deletedata);
  };

  const removeall = () => {
    setadd([]);
    };
    
  const updateitem = (elem) => {
    const neweditdata = add.find((cval) => {
      return elem === cval.id;
    });

    setinput(neweditdata.name);
    settoggle(false);
    setiseditdata(elem);
  };

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center border">
          <div className="col-5 border text-center">
            <figure>
              <img src={note} alt="parag" />
              <figcaption>notes</figcaption>
            </figure>

            <div>
              <input
                type="text"
                placeholder="✍️ Add Notes...."
                value={input}
                onChange={(e) => {
                  setinput(e.target.value);
                }}
              />
              {toggle ? (
                <IoIosAddCircle onClick={inputdata} />
              ) : (
                <FaEdit onClick={inputdata} />
              )}
            </div>



            {add.map((elem) => {
              return (
                
                  <div key={elem.id}>
                    {elem.name}

                    <FaEdit onClick={() => updateitem(elem.id)} />

                    <FaTrash onClick={() => deleteitem(elem.id)} />
                  </div>
                
              );
            })}


            <button className="btn btn-primary" type="" onClick={removeall}>
              Remove all
            </button>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Updatedtodo;
