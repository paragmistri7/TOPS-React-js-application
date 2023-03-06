import React from "react";
import { memo } from "react";

const Usecallbach02 = ({ todo, additem }) => {
  console.log("usecallback 02");
  return (
    <>
          <button onClick={additem}>add</button>

      {todo.map((val , index) => {
        return (
          
            <ul key={index}>
              <li>{val}  {index} </li>
            </ul>
          
        );
      })}

    </>
  );
};

export default memo(Usecallbach02);
