import { useLoaderData } from "react-router-dom";
import User from './../User/User';





const Users = () => {

    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h1>Our Users: {users.length}</h1>

            <div className="users">
            {
                users.map((user,index) => <User key={index.id} user={user}></User>)
            }
            </div>
        </div>
    );
};

export default Users;