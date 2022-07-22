import SideBar from "../components/SideBar";
import SideHeader from "../components/SideHeader";
import ContactItems from "../components/ContactItems";
import {useState} from "react";
import {useSelector} from "react-redux";

const People = () => {
    const [isGridView, setIsGridView] = useState(true);
    const state = useSelector(state => state);
    const contacts = state.contacts;

    const switchView = (gridViewActive) => {
        setIsGridView(gridViewActive);
    };

    return (
        <div className="container">
            <SideBar />
            <div className="container-section">
                <SideHeader title="People" switchView={switchView} data={contacts} />
                <ContactItems isGridView={isGridView} data={contacts} />
            </div>
        </div>
    );
}

export default People;