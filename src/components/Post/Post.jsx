import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const {postId, id, name, body} = post;
    const navigate = useNavigate();

    const handleDetailData = () =>{
        navigate(`/comment/${id}`)
    }
    return (
        <div className="each-post">
            <h3>Name: {name}</h3>
            <p>ID: {id}</p>
            <p>Post ID: {postId}</p>
            <p>Body: {body}</p>
            <Link to={`/comment/${id}`}>Show More</Link>
            <button className='btn-detail' onClick={handleDetailData}>Details of Post</button>
        </div>
    );
};

export default Post;