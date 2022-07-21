import React, {useState} from 'react'
import './SideHeader.css';
import {Link} from "react-router-dom";
import {getLocationsByData, getProfile, getSetting} from "../util";

const SideHeader = (props) => {
    const [gridViewActive, setGridViewActive] = useState('grid-view-active-true');
    const [listViewActive, setListViewActive] = useState('list-view-active-false')
    const {title} = props;
    const profile = getProfile();
    const {locationFilter} = getSetting();

    const locations = props.data === undefined ? [] : getLocationsByData(props.data);
    const renderLocationOptions = locations.map((location, key) => {
        return <option value={location.toString()} key={key}>{location}</option>
    });

    const switchView = (active) => {
        setGridViewActive('grid-view-active-' + (active).toString());
        setListViewActive('list-view-active-'+ (!active).toString());
        props.switchView(active);
    };

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
                        <li className={gridViewActive} onClick={() => switchView(true)}></li>
                        <li className={listViewActive} onClick={() => switchView(false)}></li>
                    </ul>
                </div>
                <div>
                    <img alt={locationFilter} src={locationFilter} />
                    <select id="location" className="location">
                        <option value="">Filter locations</option>
                        {renderLocationOptions}
                    </select>
                </div>
            </div>
        </>
    )
}

export default SideHeader