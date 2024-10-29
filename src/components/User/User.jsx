import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const User = ({ user }) => {
    const {id,name,email} = user;
    return (
        <div style={{border:'2px solid blue'}}>
            <h2>Name: { name}</h2>
            <h3>email: {email}</h3>
            <NavLink to={`user${id}`}>Details</NavLink>
        </div>
    );
};

User.propTypes = {
    user:PropTypes.object.isRequired
};

export default User;