import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <div>
                <a href="/Banner">HOME</a>
                <a href="/Reviews">REVIEWS</a>
                <a href="/Deshboard">DESHBOARD</a>
                <a href="/Blogs">BLOGS</a>
                <a href="/About">ABOUT</a>
            </div>
        </nav>
    );
};

export default Header;