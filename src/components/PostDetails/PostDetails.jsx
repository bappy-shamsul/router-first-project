import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData()
    const{id, body} = post;
    return (
        <div>
            <h3>Id: {id}</h3>
            <h3>Info: {body}</h3>
        </div>
    );
};

export default PostDetails;