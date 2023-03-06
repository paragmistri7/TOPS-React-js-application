import { border } from "@mui/system";
import axios from "axios";
import React from "react";
import { useState } from "react";

const SearchAny = () => {
  const [data, setdata] = useState();
  const [result, setresult] = useState([]);

  console.log(result);
  const inputdata = (e) => {
    setdata(e.target.value);

    const getdata = () => {
      axios
        .get(
          `https://api.unsplash.com/search/photos?page=1&query=${data}&client_id=4UhQL7IdZ55_AGB-WhQQNVlxTwun4XNQI0lXn6L-gqM`
        )
        .then((res) => {
          // setdata(res.data.results)

          setresult(res.data.results);
          console.log(res.data, "getdata");
        });
    };

    getdata();
  };

  return (
      <>
          <div style={{ minHeight : '500px' }}>
              
      <div className="d-flex justify-content-center m-5  ">
        <input 
          style={{ width: "400px", border: "none", padding: "10px"  }}
          type="text"
          placeholder="Search Here !"
          value={data}
          onChange={inputdata}
                  />
      </div>
                  <hr />
          {/* <button onClick={getdata}>click</button> */}

          {
              data === "" ? null :<div className="d-flex flex-wrap justify-content-around ">
                  {result.map((value) => {
                      console.log(value);
                      return (
                          <img className="w-25 h-25 m-4" src={value.urls.small} alt="" />
                          );
                        })}
            </div>
             }
      
             </div>
    </>
  );
};

export default SearchAny;
