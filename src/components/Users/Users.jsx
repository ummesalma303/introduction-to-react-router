import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const data = useLoaderData()
    // console.log(data)
    return (
        <>
        <div>
            <h2>Total Data: {data.length}</h2>
            </div>
            <div className="user">
                {
                    data.map(user=><User key={user.id} user={user} ></User>)
                }
            </div>
        </>
    );
};

export default Users;