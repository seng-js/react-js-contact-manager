import SideBar from "../components/SideBar";
import SideHeader from "../components/SideHeader";
import ContactItems from "../components/ContactItems";
import {useState} from "react";

const Favorites = (props) => {
    const [isGridView, setIsGridView] = useState(true);
    const data = props.data?.filter(function (item, key) {
        if (item.isFavourite) {
            item.key = key;
        }
        return item.isFavourite;
    })

    const switchView = (gridViewActive) => {
        setIsGridView(gridViewActive);
    };

    return (
        <div className="container">
            <SideBar />
            <div className="container-section">
                <SideHeader title="Favorites" switchView={switchView} data={data} />
                <ContactItems isGridView={isGridView} data={data} />
            </div>
        </div>
    );
}

export default Favorites;