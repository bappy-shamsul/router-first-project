import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <Link to='/'>Home</Link>
                <Link to='/history'>History</Link>
                <Link to='/about'>About</Link>
                <Link to='/users'>All users</Link>
                <Link to='/comments'>All Comments</Link>
                <Link to='/contact'>Contact</Link>
                {/* <a href="/">Home</a>
                <a href="/history">History</a>
                <a href="/about">About us</a>
                <a href="/contact">Contact us</a> */}
            </nav>
        </div>
    );
};

export default Header;