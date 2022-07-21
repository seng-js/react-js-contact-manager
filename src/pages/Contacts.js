import SideBar from "../components/SideBar";
import SideHeader from "../components/SideHeader";
import ContactItems from "../components/ContactItems";
import {useState} from "react";

const Contacts = (props) => {
    const [isGridView, setIsGridView] = useState(true);
    const data = props.data?.filter(function (item, key) {
        if (item.isContact) {
            item.key = key;
        }
        return item.isContact;
    })

    const switchView = (gridViewActive) => {
        setIsGridView(gridViewActive);
    };
    return (
        <div className="container">
            <SideBar />
            <div className="container-section">
                <SideHeader title="Contacts" switchView={switchView} data={data}/>
                <ContactItems data={data} isGridView={isGridView} />
            </div>
        </div>
    );
}

export default Contacts;