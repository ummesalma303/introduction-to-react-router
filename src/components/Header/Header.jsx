import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

const Header = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
           <Footer></Footer> 
        </div>
    );
};

export default Header;