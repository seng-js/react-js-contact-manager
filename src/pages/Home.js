import SideBar from "../components/SideBar";
import SideHeader from "../components/SideHeader";
import ContactItems from "../components/ContactItems";

const Home = (props) => {
    return (
        <div className="container">
            <SideBar />
            <div className="container-section">
                <SideHeader title="Home" />
                <ContactItems data={props.data} />
            </div>
        </div>
    );
}

export default Home;