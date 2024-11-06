import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <NavLink to='/'>Home</NavLink>
                <NavLink o='/history'>History</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/users'>All users</NavLink>
                <NavLink to='/comments'>All Comments</NavLink>
                <NavLink to='/contact'>Contact</NavLink>

                {/* <Link to='/'>Home</Link>
                <Link to='/history'>History</Link>
                <Link to='/about'>About</Link>
                <Link to='/users'>All users</Link>
                <Link to='/comments'>All Comments</Link>
                <Link to='/contact'>Contact</Link> */}
                {/* <a href="/">Home</a>
                <a href="/history">History</a>
                <a href="/about">About us</a>
                <a href="/contact">Contact us</a> */}
            </nav>
        </div>
    );
};

export default Header;