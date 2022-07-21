import React from 'react'
import './ListViewItems.css';
import SocialList from "./SocialList";
import ActionList from "./ActionList";

const ListViewItems = (props) => {
    const items = props.data?.map( (item, key) => {
        const index = item.key === undefined ? key : item.key;
        return (
                <div className="list-card" key={key}>
                    <div className="content">
                        <div className="img">
                            <img src={item.avatar} alt={item.avatar} />
                        </div>
                        <div className="details">
                            <div className="name">{item.name}</div>
                            <div className="job">{item.company + ', ' + item.position}</div>
                            <div className="city">{item.city}</div>
                            <SocialList data={item.social_networks} />
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

export default ListViewItems