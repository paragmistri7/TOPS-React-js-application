import React, { useCallback, useState } from 'react';
import Usecallbach02 from './46 usecallbach02 ';

const Usecallback01 = () => {

    const [count, setcount] = useState(0)
    const [todos , settodo] = useState([])
    

    const increment = () => {
        setcount( count + 1)
    }

    const additem = useCallback(() => {
        settodo((pvalue) => [...pvalue, `new item`])
    },[todos]);

    // const additem = () => {
    //     settodo((pvalue) => {
    //         return [...todo , `new item`]
    //     })
    // }

    return (
        <>
            
          <Usecallbach02   todo={todos} additem = {additem} />

            <h1>{count}  </h1>
            <button onClick={increment}>  click here  </button>
        </>
    );
};

export default Usecallback01 ;