import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to="/">CRUD</Link>
            <Link to="/">Home</Link>
            <Link to="addStudent">Add Student</Link>
        </header>
    )
}

export default Header;
