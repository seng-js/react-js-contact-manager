import {NavLink, useLocation} from "react-router-dom";
import {menuItems} from "../util";
import './SideBar.css';
import {useSelector} from "react-redux";
import {useState} from "react";

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
    const renderMenuItems= menuItems.map((menu, key) => <li key={key} className={pathname === menu.link ? "active" : ""}>
        <NavLink to={menu.link}><i className={menu.icon} aria-hidden="true"></i><span>{menu.name}</span></NavLink>
    </li>);

    const state = useSelector(state => state);

    setTimeout(() => {
        setProfile(state?.tempContacts[0]);
    });

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