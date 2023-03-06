import React, { createContext } from 'react';
import File2 from './43 file 2 ';

const biodata = createContext()
const File1 = () => {
    

    return (
        <div>
            <biodata.Provider  value={{name : "parag" , surname : " gohil"}}>

            <File2/>
            </biodata.Provider>
        </div>
    );
};

export default File1;
export {biodata}