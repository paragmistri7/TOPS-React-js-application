import React from 'react';
import { useState } from 'react';

const Digitalclock = () => {
    let clock = new Date().toLocaleTimeString()
    const [time, settimed] = useState(clock)
    
    const Updatetime = () => {

        clock = new Date().toLocaleTimeString();
         settimed (clock)
    
    }
    setInterval(Updatetime  , 1000);


    return (
        <div className='text-center'>
            <h1  >{time}</h1>             
        </div>
    );
};

export default Digitalclock ;