import React from 'react';
import { NavLink } from 'react-router-dom';

const Errorpage  = () => {
    return (       
        <div>
            <h1>Errorpage</h1>
            <NavLink to="/">Go Home </NavLink>
        </div>
    );
};

export default Errorpage ;