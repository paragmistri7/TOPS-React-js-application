import React from 'react';

const Notefooter = () => {
    let year = new Date().getFullYear()

    return (
        <>
            <footer className='notefooter white'>
              copyright  &copy; {year} 
            </footer>
        </>
    );
};

export default Notefooter ;