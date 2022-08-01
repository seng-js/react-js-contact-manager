import {NavLink, useLocation} from "react-router-dom";
import './SideBar.css';
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {menuItems} from "../util/constants";

const SideBar = () => {
    const [profile, setProfile] = useState(
        {
            avatar: '',
            name: '',
            company: '',
            position: ''
        }
    );

    const location = useLocation();
    const { pathname } = location;
    const renderMenuItems= menuItems.map(({link, icon, name}, key) => <li key={key} className={pathname === link ? "active" : ""}>
        <NavLink to={link}><i className={icon} aria-hidden="true"></i><span>{name}</span></NavLink>
    </li>);

    const state = useSelector(state => state);

    useEffect(() => {
        setProfile(state?.tempContacts[0]);
    }, [state?.tempContacts])

    return (
        <>
            <nav className="side-bar">
                <div className="user-p">
                    <img alt={profile?.avatar} src={profile?.avatar} />
                        <h4>{profile?.name}</h4>
                        <h6>{profile?.company}, {profile?.position}</h6>
                </div>
                <ul>
                    {renderMenuItems}
                </ul>
            </nav>
        </>
    )
}

export default SideBar