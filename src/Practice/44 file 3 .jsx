import React, { useContext } from 'react';
import { biodata } from './42 File1 ';
const File3 = () => {
    
    const context = useContext(biodata)

    return (
        <div>
            hello
            {context.name}
            {context.surname}


        </div>
    );
};

export default File3 ;