import React, { useMemo } from 'react';
import { useState } from 'react';

const Usememos = () => {

    const [count, setcount] = useState(0)
    const [show , setshow] = useState(false)
    

    const update = () => {
        setcount ( count + 1)
    }

    
    const getvalue = (num) => {
        console.log(num)
        for (let i = 0; i <= 600000000; i++){
        }
        return num
    }
    // const updatedvalue = getvalue(count)


    const updatedvalue = useMemo(() => {
        return  getvalue(count)  
} , [count])


    return (
        <>
            <button onClick={update} >click here </button>
            <h2> updated dta :  {updatedvalue} </h2>
            <button onClick={ ( ) => setshow(!show)} > {  show ? "show" : "not show"}  </button>
        </>
    );
};

export default Usememos ;