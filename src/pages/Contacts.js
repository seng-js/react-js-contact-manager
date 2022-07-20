import SideBar from "../components/SideBar";
import SideHeader from "../components/SideHeader";
import ContactItems from "../components/ContactItems";

const Contacts = (props) => {
    const data = props.data?.filter(function (item, key) {
        if (item.isContact) {
            item.key = key;
        }
        return item.isContact;
    })

    return (
        <div>
            <div className="container">
                <SideBar/>
                <div className="container-section">
                    <SideHeader title="Contacts" data={data}/>
                    <ContactItems data={data}/>
                </div>
            </div>
        </div>
    );
}

export default Contacts;