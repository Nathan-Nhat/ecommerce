import React from 'react';
import { Link } from 'react-router-dom'
const NavItem = ({name, url}) => {
    return (
        <Link to = {url}>{name}</Link>
    );
};

export default NavItem;