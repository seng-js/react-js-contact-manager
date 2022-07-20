import SideBar from "../components/SideBar";
import SideHeader from "../components/SideHeader";
import ContactItems from "../components/ContactItems";

const Companies = (props) => {

    return (
        <div className="container">
            <SideBar />
            <div className="container-section">
                <SideHeader title="Companies" data={props.data} />
                <ContactItems data={props.data} />
            </div>
        </div>
    );
}

export default Companies;