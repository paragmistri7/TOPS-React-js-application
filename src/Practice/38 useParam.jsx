import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const UseParam01 = () => {
  const { fname, lname } = useParams();

  const location = useLocation();
  const navigates = useNavigate();

  console.log(navigates);
  // console.log(location)
  return (
    <>
      <div className="text-center">
        <h3>UseParam </h3>
        <h4>
          My Name is {fname} {lname}
        </h4>
        {location.pathname}
        <br />
        {location.pathname === "/example/practice/useparam/parag/gohil" ? (
          <button
            onClick={() => {
              navigates("/example/practice/gettime");
            }}
          >
            Go to Get-Time
          </button>
        ) : null}
      </div>
    </>
  );
};

export default UseParam01;
