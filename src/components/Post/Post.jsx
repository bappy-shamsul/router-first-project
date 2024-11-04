import { Link } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const {postId, id, name, body} = post;
    return (
        <div className="each-post">
            <h3>Name: {name}</h3>
            <p>ID: {id}</p>
            <p>Post ID: {postId}</p>
            <p>Body: {body}</p>
            <Link to={`/comments/${id}`}>Show More</Link>
        </div>
    );
};

export default Post;