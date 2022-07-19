import React from 'react'
import {NavLink, useLocation} from "react-router-dom";
import './SideBar.css';
import {getProfile} from "../util";

const SideBar = () => {

    const location = useLocation();
    const { pathname } = location;
    const profile = getProfile();

    const menuItems = [
        {
            icon: 'fa fa-home',
            link: "/",
            name: "Home",
        },
        {
            icon: 'fa fa-address-book',
            link: "/contacts",
            name: "Contacts",
        },
        {
            icon: 'fa fa-heart',
            link: "/favorites",
            name: "Favorites",
        },
        {
            icon: 'fa fa-user',
            link: "/people",
            name: "People",
        },
        {
            icon: 'fa fa-users',
            link: "/companies",
            name: "Companies",
        }
    ];

    const renderMenuItems= menuItems.map((menu, key) => <li className={pathname === menu.link ? "active" : ""}>
        <NavLink key={key} to={menu.link}><i className={menu.icon} aria-hidden="true"></i><span>{menu.name}</span></NavLink>
    </li>);

    return (
        <>
            <nav className="side-bar">
                <div className="user-p">
                    <img alt="JOHN DOE" src={profile.avatar} />
                        <h4>{profile.name}</h4>
                        <h6>{profile.company}, {profile.position}</h6>
                </div>
                <ul>
                    {renderMenuItems}
                </ul>
            </nav>
        </>
    )
}

export default SideBar