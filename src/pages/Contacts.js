import SideBar from "../components/SideBar";
import SideHeader from "../components/SideHeader";
import ContactItems from "../components/ContactItems";
import {useState} from "react";
import {useSelector} from "react-redux";

const Contacts = () => {
    const [isGridView, setIsGridView] = useState(true);
    const state = useSelector(state => state);
    const contacts = state.contacts.filter((contact) => contact.isContact);

    const switchView = (gridViewActive) => {
        setIsGridView(gridViewActive);
    };
    return (
        <div className="container">
            <SideBar />
            <div className="container-section">
                <SideHeader title="Contacts" switchView={switchView} data={contacts}/>
                <ContactItems data={contacts} isGridView={isGridView} />
            </div>
        </div>
    );
}

export default Contacts;