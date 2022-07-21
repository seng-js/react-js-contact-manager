import SideBar from "../components/SideBar";
import SideHeader from "../components/SideHeader";
import ContactItems from "../components/ContactItems";
import {useState} from "react";

const People = (props) => {
    const [isGridView, setIsGridView] = useState(true);
    const switchView = (gridViewActive) => {
        setIsGridView(gridViewActive);
    };

    return (
        <div className="container">
            <SideBar />
            <div className="container-section">
                <SideHeader title="People" switchView={switchView} data={props.data} />
                <ContactItems isGridView={isGridView} data={props.data} />
            </div>
        </div>
    );
}

export default People;