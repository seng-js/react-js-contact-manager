import React, {useState} from 'react'
import './SideHeader.css';
import {Link} from "react-router-dom";
import {getLocationsByData, getProfile, getSetting} from "../util";
import {useDispatch, useSelector} from "react-redux";
import {getFilterData} from "../services/actions";

const SideHeader = (props) => {
    const dispatch = useDispatch();
    const [gridViewActive, setGridViewActive] = useState('active');
    const [listViewActive, setListViewActive] = useState('')
    const {title} = props;
    const {locationFilter} = getSetting();

    const state = useSelector(state => state);
    const profile = getProfile();
    const locations = props?.data === undefined ? [] : getLocationsByData(state?.tempContacts);
    const renderLocationOptions = locations.map((location, key) => {
        return <option selected={state.selectedFilterByLocation === location} value={location.toString()} key={key}>{location}</option>
    });

    const switchView = (active) => {
        setGridViewActive(active ? 'active' : '');
        setListViewActive(!active ? 'active' : '');
        props.switchView(active);
    };

    return (
        <>
            <div className="row">
                <div>
                    <input type="search" id="search" value={state.selectedFilterByName} placeholder="Search..." onChange={(event) => dispatch(getFilterData({filter_by_name: event.target.value}))} />
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
                        <li onClick={() => switchView(true)}><i className={"fa fa-th-large " + gridViewActive}></i></li>
                        <li onClick={() => switchView(false)}><i className={"fa fa-bars " + listViewActive}></i></li>
                    </ul>
                </div>
                <div>
                    <img alt={locationFilter} src={locationFilter} />
                    <select id="location" className="location" onChange={(event) => dispatch(getFilterData({filter_by_location: event.target.value}))} >
                        <option value="">Filter locations</option>
                        {renderLocationOptions}
                    </select>
                </div>
            </div>
        </>
    )
}

export default SideHeader