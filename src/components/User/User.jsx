import PropTypes from 'prop-types';
import { NavLink, useNavigate} from 'react-router-dom';

const User = ({ user }) => {
    
    const { id, name, email } = user;
    const navigate= useNavigate()
    const handleButton = () => {
        navigate(`/user/${id}`)
    }
    return (
        <div style={{border:'2px solid blue'}}>
            <h2>Name: { name}</h2>
            <h3>email: {email}</h3>
            <NavLink to={`/user/${id}`}>Details</NavLink>
            <NavLink to={`/user/${id}`}> <button>Details</button> </NavLink>
            <button onClick={handleButton}>Click</button>
        
        </div>
    );
};

User.propTypes = {
    user:PropTypes.object.isRequired
};

export default User;