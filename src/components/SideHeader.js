import React from 'react'
import './SideBar.css';
import {Link} from "react-router-dom";

const SideHeader = (props) => {
    const {title} = props;
    return (
        <>
            <div className="row">
                <div>
                    <input type="text" id="search" placeholder="Search..." />
                </div>
                <div>
                    <Link className="nav-link nav-profile" to="#" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="img/img6.jpeg" alt="Profile" className="rounded-circle" />
                        <span className="login-name">John Doe</span>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="filter-option">
                    <ul>
                        <li><h1 className="filter-label">{title}</h1></li>
                        <li><Link to="#"><img alt="" src="img/grid-view-active.png" /></Link></li>
                        <li><Link to="#"><img alt="" src="img/list-view-inactive.png" /></Link></li>
                    </ul>
                </div>
                <div>
                    <img alt="" src="img/location-filter.png" /><select id="location" className="location">
                        <option>Ukraine, Lviv</option>
                        <option>Cambodia, Phnom Penh</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default SideHeader