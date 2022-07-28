import {useState} from 'react'
import './SideHeader.css';
import {Link} from "react-router-dom";
import {getLocationsByData, getSetting} from "../util";
import {useDispatch, useSelector} from "react-redux";
import {getFilterData} from "../services/actions";
import {ContainerModal} from "./Form/ContainerModal";

const SideHeader = (props) => {
    const dispatch = useDispatch();
    const [profile, setProfile] = useState(
        {
            avatar: '',
            name: ''
        }
    );
    const [gridViewActive, setGridViewActive] = useState('active');
    const [listViewActive, setListViewActive] = useState('')
    const {title} = props;
    const {locationFilter} = getSetting();

    const state = useSelector(state => state);

    setTimeout(() => {
        setProfile(state?.tempContacts[0]);
    });

    const renderLocationOptions = getLocationsByData(state?.tempContacts).map((location, key) => {
        return <option value={location.toString()} key={key}>{location}</option>
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
                    <input type="search" id="search" value={state.selectedFilterByName} placeholder="Search..."
                           onChange={(event) => dispatch(getFilterData({filter_by_name: event.target.value, filter_by_location:state.selectedFilterByLocation}))} />
                </div>
                <div>
                    <Link className="nav-link nav-profile" to="#" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={profile?.avatar} alt={profile?.avatar} className="rounded-circle" />
                        <span className="login-name">{profile?.name}</span>
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
                    {title === 'People' && (<ContainerModal isShowButton={true} triggerText="Add people" />)}
                </div>
                <div>
                    <img alt={locationFilter} src={locationFilter} />
                    <select id="location"
                            value={state.selectedFilterByLocation}
                            className="location"
                            onChange={(event) => dispatch(getFilterData({filter_by_location: event.target.value, filter_by_name: state.selectedFilterByName}))} >
                        <option value="">Filter locations</option>
                        {renderLocationOptions}
                    </select>
                </div>
            </div>
        </>
    )
}

export default SideHeader