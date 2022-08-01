import SocialList from "./SocialList";
import ActionList from "./ActionList";
import ContainerModal from "./Form/ContainerModal";

const GridViewItems = ({data = []}) => {
    const items = data.map( (item, key) => {
        const {avatar, name, company, position, city, social_networks, index} = item;
        return (
                <div className="card" key={key}>
                    <ContainerModal item={item} />
                    <div className="content">
                        <div className="img">
                            <img src={avatar} alt={avatar} />
                        </div>
                        <div className="details">
                            <div className="name">{name}</div>
                            <div className="job">{company + ', ' + position}</div>
                        </div>
                        <SocialList data={social_networks} />
                        <div className="details">
                            <div className="city">{ city}</div>
                        </div>
                        <ActionList item={item} index={index} />
                    </div>
                </div>
            )
        }
    );

    return (
        <>
            <section className="section-1">
                <div className="main-card">
                    <div className="cards">
                        {items}
                    </div>
                </div>
            </section>
        </>
    )
}

export default GridViewItems