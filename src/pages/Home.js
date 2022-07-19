import SideBar from "../components/SideBar";
import SideHeader from "../components/SideHeader";
import ContactItems from "../components/ContactItems";
import {FIREBASE_URL_PEOPLE_JSON} from "../util";
import {useEffect, useState} from "react";
import axios from "axios";

const Home = () => {
    const [data, setData] = useState([]);
    const fetchData = () => {
        return axios.get(FIREBASE_URL_PEOPLE_JSON)
            .then((response) => setData(response.data));}

    useEffect(() => {
        fetchData();
    }, [data]);
    return (
        <div>
            <div className="container">
                <SideBar />
                <div className="container-section">
                    <SideHeader title="Home" />
                    <ContactItems data={data} />
                </div>
            </div>
        </div>
    );
}

export default Home;