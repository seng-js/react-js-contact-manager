import React from 'react'
import { NavLink } from 'react-router-dom'
import './SideBar.css';

const SideBar = () => {

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

    const listItem = menuItems.map((menu, key) => <li><NavLink key={key} to={menu.link}><i className={menu.icon} aria-hidden="true"></i><span>{menu.name}</span></NavLink></li>);

    return (
        <>
            <nav className="side-bar">
                <div className="user-p">
                    <img alt="JOHN DOE" src="img/img6.jpeg" />
                        <h4>JOHN DOE</h4>
                        <h6>SunScript, CEO</h6>
                </div>
                <ul>
                    {listItem}
                </ul>
            </nav>
        </>
    )
}

export default SideBar