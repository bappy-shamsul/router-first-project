import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {
    const users = useLoaderData()
    // console.log(users)
    return (
        <div>
            <h3>Our Total Users: {users.length}</h3>
            <h4>Here are all users </h4>
            <div className="users">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;