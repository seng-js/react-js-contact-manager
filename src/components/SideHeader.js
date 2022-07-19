import React from 'react'
import './SideBar.css';
import {Link} from "react-router-dom";
import {getProfile, getSetting} from "../util";

const SideHeader = (props) => {
    const {title} = props;
    const profile = getProfile();
    const setting = getSetting();

    return (
        <>
            <div className="row">
                <div>
                    <input type="text" id="search" placeholder="Search..." />
                </div>
                <div>
                    <Link className="nav-link nav-profile" to="#" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={profile.avatar} alt={profile.avatar} className="rounded-circle" />
                        <span className="login-name">{profile.name}</span>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="filter-option">
                    <ul>
                        <li><h1 className="filter-label">{title}</h1></li>
                        <li><Link to="#"><img alt={setting.gridViewActive} src={setting.gridViewActive} /></Link></li>
                        <li><Link to="#"><img alt={setting.listViewInactive} src={setting.listViewInactive} /></Link></li>
                    </ul>
                </div>
                <div>
                    <img alt={setting.locationFilter} src={setting.locationFilter} />
                    <select id="location" className="location">
                        <option>Ukraine, Lviv</option>
                        <option>Cambodia, Phnom Penh</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default SideHeader