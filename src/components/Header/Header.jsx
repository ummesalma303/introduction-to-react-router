// import React from 'react';

import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavLinks from "../NavLinks/NavLinks";

// import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="anchor-container">
            {/* <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link> */}
            <NavLinks></NavLinks>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Header;