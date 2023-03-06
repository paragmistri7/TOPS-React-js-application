import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Gettime = () => {

    const navigate = useNavigate()

    const Times = new Date().toTimeString()
    const [date, setdate] = useState(Times)
    
    const updatedate = () => {
        console.log("click")
        return (
            setdate(Times)
        
    )
}
    
    return (
        <>
            <div className='text-center'>

            <h1> {date}</h1>
                <button className='btn btn-warning btn-lg btn-outline-danger' onClick={updatedate} onDoubleClick={()=>{navigate("/example/practice/useparam/parag/gohil")}} >Click here</button>
                <h3>Single click for updated time</h3>
                <h3>Double-click for go to useParam</h3>

            </div>
        </>
    );
};

export default Gettime ;