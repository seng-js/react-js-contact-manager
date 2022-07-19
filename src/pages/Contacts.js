import {useEffect, useState} from 'react';
import SideBar from "../components/SideBar";
import SideHeader from "../components/SideHeader";
import ContactItems from "../components/ContactItems";
import axios from "axios"
import {FIREBASE_URL_PEOPLE_JSON} from "../util";

const Contacts = (props) => {
    const [data, setData] = useState([]);
    const fetchData = () => {
        return axios.get(FIREBASE_URL_PEOPLE_JSON).then(res => {
            setData(res.data?.filter(function (item) {
                return item.isContact;
            }));
        });
    }

    useEffect(() => {
        fetchData();
    }, [data]);


    const handleUpdateData = (type, action, id) => {
        props.handleUpdateData(type, action, id);
    }

    return (
        <div>
            <div className="container">
                <SideBar/>
                <div className="container-section">
                    <SideHeader title="Contacts"/>
                    <ContactItems handleUpdateData={handleUpdateData} data={data}/>
                </div>
            </div>
        </div>
    );
}

export default Contacts;