import React, { useEffect, useState } from "react";
import { BiMessageSquareAdd, BiTrash, BiEdit } from "react-icons/bi";

const localdata = () => {

 let list =  localStorage.getItem("list")
    if (list) {
        return  JSON.parse(localStorage.getItem("list")) 
    }
    else {
        return []
    }
}

const UpdatedTodols = () => {
  const [input, setinput] = useState("");
  const [update, setupdate] = useState(localdata());
  const [toggle, settoggle] = useState(true);
  const [final, setfinal] = useState();

    
  const typedata = (event) => {
    setinput(event.target.value);
  };

  const adddata = () => {
    if (!input) {
      alert("please fill data");
    } else if (input && !toggle) {
      setupdate(
        update.map((val) => {
          if (val.id === final) {
            return { ...val, name: input };
          }
          return val;
        })
      );
      setfinal(null);
      setinput("");
      settoggle(true)
    } else {
      const newdata = { id: new Date().getTime().toString(), name: input };
      setupdate([...update, newdata]);
      setinput("");
    }
  };

  const deleteitem = (id) => {
    const deleteupdate = update.filter((val) => {
      return val.id !== id;
    });
    setupdate(deleteupdate);
  };

  const removeall = () => {
    setupdate([]);
  };

  const updateitem = (id) => {
    const editinput = update.find((val) => {
      return val.id === id;
    });
    setinput(editinput.name);
    settoggle(false);
    setfinal(id);
    };
    
    
    useEffect(() => {
        localStorage.setItem("list" , JSON.stringify(update) )
    }, [update])

  return (
    <div>
      <div className="container">
        <div className="row  d-flex justify-content-center">
          <div className="col-5">
            <div>
              <input
                type="text"
                placeholder="Enter your data"
                value={input}
                onChange={typedata}
              />
              {toggle ? (
                <BiMessageSquareAdd onClick={adddata} />
              ) : (
                <BiEdit onClick={adddata} />
              )}
            </div>
            <div>
              {update.map((val) => {
                return (
                  <ul key={val.id}>
                    <li className="d-inline-block pe-3"> {val.name} </li>

                    <BiEdit onClick={() => updateitem(val.id)} />
                    <BiTrash onClick={() => deleteitem(val.id)} />
                  </ul>
                );
              })}

              {update.length >= 2 ? (
                <button onClick={removeall}>Remove All...!</button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatedTodols;
