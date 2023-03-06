import { useContext } from "react";
import { Name1 } from "./20 usecontext01 ";

const Usecontext03 = () => {
  const Name2 = useContext(Name1);

  return (
    <>
      <br />
      <div className="container offset-6">
      <h3> {Name2} </h3>
      {/* <h3> {children} </h3> */}
      Usecontext03
      <br />
      <br />
              <br />
              </div>
    </>
  );
};
export default Usecontext03;
