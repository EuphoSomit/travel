import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <div className="container">
            <Link className="navbar-brand" to="/">Travel</Link>
        </div>
    </nav>
)

export default Header;