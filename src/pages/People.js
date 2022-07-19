import SideBar from "../components/SideBar";
import SideHeader from "../components/SideHeader";
import ContactItems from "../components/ContactItems";

const People = (props) => {

    const handleUpdateData = (type, action, id) => {
        props.handleUpdateData(type, action, id);
    }

    return (
        <div>
            <div className="container">
                <SideBar />
                <div className="container-section">
                    <SideHeader title="People" />
                    <ContactItems handleUpdateData={handleUpdateData} data={props.data} />
                </div>
            </div>
        </div>
    );
}

export default People;