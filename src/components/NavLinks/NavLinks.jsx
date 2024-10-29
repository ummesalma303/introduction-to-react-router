import { Link } from "react-router-dom";

const NavLinks = () => {
    return (
        <div>
              {/* <NavLink to={'/'}>Home</NavLink> */}
              <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
        </div>
    );
};

export default NavLinks;