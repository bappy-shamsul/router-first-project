import { Link } from 'react-router-dom';
import './User.css'

const User = ({user}) => {
    const {id, name, phone, email} = user
    return (
        <div className="each-user">
            <h3>{id} {name}</h3>
            <p>Phone: {phone}</p>
            <p>E-mail: {email}</p>
            <Link to={`/user/${id}`}>Show details</Link>
            <Link to={`/user/${phone}`}><button>Click Here</button></Link>
        </div>
    );
};

export default User;