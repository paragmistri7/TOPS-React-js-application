import React from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Noteheader = () => {
    return (

        <>
            <div className='noteheaderdiv white josefinSans fw-bold'>
               <MenuBookIcon sx={{ fontSize: "80px" }}  className='menubookicon' />
               <span className='noteheader'  >Parag's Note</span>
            </div>
        </>

    );
};

export default Noteheader;