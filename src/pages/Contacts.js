import SideBar from "../components/SideBar";
import SideHeader from "../components/SideHeader";
import ContactItems from "../components/ContactItems";

const Contacts = (props) => {

    const data = props.data?.filter(function (item) {
        return item.isContact;
    })

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