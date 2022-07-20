import SideBar from "../components/SideBar";
import SideHeader from "../components/SideHeader";
import ContactItems from "../components/ContactItems";

const Favorites = (props) => {

    const data = props.data?.filter(function (item, key) {
        if (item.isFavourite) {
            item.key = key;
        }
        return item.isFavourite;
    })

    return (
        <div>
            <div className="container">
                <SideBar />
                <div className="container-section">
                    <SideHeader title="Favorites" data={data} />
                    <ContactItems data={data} />
                </div>
            </div>
        </div>
    );
}

export default Favorites;