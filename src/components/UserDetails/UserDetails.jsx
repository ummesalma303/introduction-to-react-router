import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
    const {id} = useParams();
    console.log(id);
    const navigate=useNavigate()
    const user = useLoaderData();
    const { name, website } = user;
    const handle = () => {
        navigate(-1)
    }
    return (
        <div>
            <h2>name: {name}</h2>
            <h3>website:{website}</h3>
            <button onClick={handle}>Go back</button>

        </div>
    );
};

export default UserDetails;