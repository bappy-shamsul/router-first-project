import { useLoaderData, useNavigate } from "react-router-dom";
import './PostDetails.css'
const PostDetails = () => {
    const posts = useLoaderData()
    const{id, body} = posts;
    const navigate = useNavigate();

    const handleGoBack = () =>{
        navigate(-1);
    }
    return (
        <div>
            <h3>Id: {id}</h3>
            <h3>Info: {body}</h3>
            <button className="btn-goback" onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;