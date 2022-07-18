import SideBar from "../components/SideBar";
import SideHeader from "../components/SideHeader";
import ContactItems from "../components/ContactItems";
import {getContactStorage} from "../util";

const People = () => {
    const data = getContactStorage();
    return (
        <div>
            <div className="container">
                <SideBar />
                <div className="container-section">
                    <SideHeader title="People" />
                    <ContactItems data={data} />
                </div>
            </div>
        </div>
    );
}

export default People;