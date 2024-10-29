import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div id="sidebar" className='anchor-container'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='about'>About</NavLink>
            <NavLink to='users'>Users</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </div>
    );
};

export default Nav;