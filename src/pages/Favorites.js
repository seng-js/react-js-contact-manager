import SideBar from "../components/SideBar";
import SideHeader from "../components/SideHeader";
import ContactItems from "../components/ContactItems";
import {useState} from "react";
import {useSelector} from "react-redux";

const Favorites = () => {
    const [isGridView, setIsGridView] = useState(true);
    const state = useSelector(state => state);
    const contacts = state.contacts.filter((contact) => contact.isFavorite);

    const switchView = (gridViewActive) => {
        setIsGridView(gridViewActive);
    };

    return (
        <div className="container">
            <SideBar />
            <div className="container-section">
                <SideHeader title="Favorites" switchView={switchView} data={contacts} />
                <ContactItems isGridView={isGridView} data={contacts} />
            </div>
        </div>
    );
}

export default Favorites;