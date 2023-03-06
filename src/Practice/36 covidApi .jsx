import React, { useEffect } from "react";
import { useState } from "react";

const CovidApi = () => {

  const [value , setvalue] = useState([])

//   const getdata = async () => {
//     const data = await fetch("https://data.covid19india.org/data.json");
//     const val = await data.json();
//       console.log(val.statewise);
//       setvalue(val.statewise)
//   };
    
  const getdata = async () => {
      fetch("https://data.covid19india.org/data.json")
          .then((res) => {
            return  res.json()
          }).then((respo) => {
              console.log(respo)
              setvalue(respo.statewise)
                console.log(respo.statewise);
          })
    
  };

  useEffect(() => {
    getdata();
  },[]);

  return (
    <>
      <div className=" border table-bordered text-center text-capitalize border-4 text-black-50">
        <table className="table table-hover  ">
          <thead className="fs-4 table-danger">
            <tr>
              <th>state</th>
              <th>active</th>
              <th>confirmed</th>
              <th>deltaconfirmed</th>
              <th>deaths</th>
              <th>lastupdatedtime</th>
            </tr>
          </thead>
                  <tbody>
                      
                      {
                          value.map((cval , index) => {
                              return (
                                <tr key={index}>
                                <td>{cval.state}</td>
                                <td>{cval.active}</td>
                                <td>{cval.confirmed}</td>
                                <td>{cval.deltaconfirmed}</td>
                                <td>{cval.deaths}</td>
                                <td>{cval.lastupdatedtime}</td>
                              </tr>
                              )
                          })
                      }
           
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CovidApi;
