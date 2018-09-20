import React from 'react';
import { NavLink }  from 'react-router-dom';
// import {connect} from 'react-redux';
//this should be dynamic so that new categories which are added, still work
let SideBar = () => {
    return (
        <ul>
            <li>
                <NavLink to="/categories/Hats" activeClassName="selected">Hats</NavLink>
            </li>
            <li>
                <NavLink to="/categories/Boots" activeClassName="selected">Boots</NavLink>
            </li>
            <li>
                <NavLink to="/categories/Belts" activeClassName="selected">Belts</NavLink>
            </li>
        </ul>
    )
}

export default SideBar