import {NavLink, useLocation} from "react-router-dom";
import {getProfile, menuItems} from "../util";
import './SideBar.css';

const SideBar = () => {
    const location = useLocation();
    const { pathname } = location;
    const profile = getProfile();
    const renderMenuItems= menuItems.map((menu, key) => <li key={key} className={pathname === menu.link ? "active" : ""}>
        <NavLink to={menu.link}><i className={menu.icon} aria-hidden="true"></i><span>{menu.name}</span></NavLink>
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