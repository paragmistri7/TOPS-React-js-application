import React, { useContext } from "react";
import { Firstname, Lastname } from "./31 usecontextAPI ";

{/* ============================================== */}

const UsecontextAPI04 = () => {
  let fname = useContext(Firstname  )
  let lname = useContext(Lastname  )

{/* ============================================== */}

  return (
    <>
      {/* <Firstname.Consumer>
        {(fname) => {
          return (
            <Lastname.Consumer>
              {(lname) => {
                return (
                  <>
                    <h1>
                      my name is {fname} {lname}
                    </h1>
                  </>
                );
              }}
            </Lastname.Consumer>
          );
        }}
      </Firstname.Consumer> */}
      {/* {Firstname} */}

{/* ============================================== */}

      <h1 className="textsusecontext"> {fname}  {lname}</h1>
      
{/* ============================================== */}

    </>
  );
};

export default UsecontextAPI04;
