import { useLoaderData } from "react-router-dom";


const Userinfo = () => {
    const users = useLoaderData()
    const {name, username, website, company} = users
    return (
        <div>
            <h3>{name}</h3>
            <h4>Padname: {username}</h4>
            <p>Web: {website}</p>
            <p>company: {company.name}</p>
        </div>
    );
};

export default Userinfo;