import React from 'react'
import './GridViewItems.css';
import SocialList from "./SocialList";
import ActionList from "./ActionList";
import ContainerModal from "./Form/ContainerModal";

const GridViewItems = (props) => {
    const items = props.data?.map( (item, key) => {
        return (
                <div className="card" key={key}>
                    <ContainerModal isShowButton={true} item={item} triggerText="Edit people" />
                    <div className="content">
                        <div className="img">
                            <img src={item.avatar} alt={item.avatar} />
                        </div>
                        <div className="details">
                            <div className="name">{item.name}</div>
                            <div className="job">{item.company + ', ' + item.position}</div>
                        </div>
                        <SocialList data={item.social_networks} />
                        <div className="details">
                            <div className="city">{ item.city}</div>
                        </div>
                        <ActionList item={item} index={item.index} />
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