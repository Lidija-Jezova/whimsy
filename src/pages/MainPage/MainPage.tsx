import React from 'react';
import {Link} from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About us</Link>
            MAIN PAGE
        </div>
    );
};

export default MainPage;