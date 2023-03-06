import React from "react";
import { useState } from "react";
import { QueApi } from "./23 questionanswerApi";
import Questionanswer02 from "./25 questionanswer02";

const Questionanswers01 = () => {
  const [data, setdata] = useState(QueApi);
  return (
    <>
      <div className="qamain_div">
        <div className="qacenter_div">
          
                  {data.map((cvalue) => {
                      let { id, question } = cvalue;
                                  
                      return <Questionanswer02 key={id} {...cvalue} />;
                  })}
                  
        </div>
      </div>
    </>
  );
};

export default Questionanswers01;
