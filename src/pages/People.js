import SideBar from "../components/SideBar";
import SideHeader from "../components/SideHeader";
import ContactItems from "../components/ContactItems";

const People = (props) => {

    return (
        <div>
            <div className="container">
                <SideBar />
                <div className="container-section">
                    <SideHeader title="People" data={props.data} />
                    <ContactItems data={props.data} />
                </div>
            </div>
        </div>
    );
}

export default People;