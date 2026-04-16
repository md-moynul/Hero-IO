import React from 'react';
import { NavLink } from 'react-router';

const NavbarLinks = ({ to, children }) => {
    return (
        <NavLink className={({ isActive }) => `${isActive ? ' text-purple-500 border-b border-purple-500 ' : ''} font-semibold p-2`} to={to}>{children} </NavLink>
    );
};

export default NavbarLinks;