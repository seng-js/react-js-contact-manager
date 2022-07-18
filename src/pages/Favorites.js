import React from 'react';
import SideBar from "../components/SideBar";
import SideHeader from "../components/SideHeader";
import ContactItems from "../components/ContactItems";
import {getContactStorage} from "../util";

const Favorites = () => {
    const data = getContactStorage();
    return (
        <div>
            <div className="container">
                <SideBar />
                <div className="container-section">
                    <SideHeader title="Favorites" />
                    <ContactItems data={data} />
                </div>
            </div>
        </div>
    );
}

export default Favorites;