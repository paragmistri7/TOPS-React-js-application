import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

 const Apifun = () => {
    const [user, setUser] = useState({});

    const fetchData = () => {
        return fetch("https://jsonplaceholder.typicode.com/users")
          
            .then((response) => response.json())
            .then((data) => {

                console.log(data)    
                setUser(data)
            } 
        );
    }
  
    useEffect(() => {
        fetchData();
    },[])
  
     return (
        
      <main>
         <h1>All Data</h1>
         {JSON.stringify(user)}
         
         <ul>
           <br />
           

          {/* {user && user.length > 0 && user.map((h) => (
            <li>{h.name}</li>
            
          ))} */}
           
          {user && user.length > 0 && user.map((h) => (
            <li>{h.name}</li>            
          ))}
           
           {Object.entries(user).map((h, i) => {
             // console.log("key", ky, "value", val);
             return (
              //  <Link   key={i} className=" nav-link" to={ky}>{val} </Link>
               JSON.stringify(user[4].address)
             );
           })}

        </ul>
      </main>
    );
  }
 
 export default Apifun;
