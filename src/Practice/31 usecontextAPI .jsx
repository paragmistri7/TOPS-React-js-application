import React, { createContext } from "react";
import UsecontextAPI02 from "./32 usecontextAPI ";

let Firstname = createContext();
let Lastname = createContext();

const UsecontextAPI = () => {
  return (
    <>
      <Firstname.Provider value={"PARAG"}>
        <Lastname.Provider value={"GOHIL"}>
          <UsecontextAPI02 />
        </Lastname.Provider>
      </Firstname.Provider>
    </>
  );
};

export default UsecontextAPI;
export { Firstname, Lastname };
