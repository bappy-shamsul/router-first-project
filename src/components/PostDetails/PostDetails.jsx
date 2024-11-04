import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const posts = useLoaderData()
    const{id, body} = posts;
    return (
        <div>
            <h3>Id: {id}</h3>
            <h3>Info: {body}</h3>
        </div>
    );
};

export default PostDetails;