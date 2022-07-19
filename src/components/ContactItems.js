import React from 'react'
import './SideBar.css';
import {Link} from "react-router-dom";

const ContactItems = (props) => {
    
    const handleUpdateData = (type, action, id) => {
        props.handleUpdateData(type, action, id);
    }
    
    const items = props.data?.map( (item, key) => {
        return (
                <div className="card" key={key}>
                    <div className="content">
                        <div className="img">
                            <img src={item.avatar} alt={item.avatar} />
                        </div>
                        <div className="details">
                            <div className="name">{item.name}</div>
                            <div className="job">{item.company + ', ' + item.position}</div>
                        </div>
                        <div className="media-icons">
                            {item.social_networks.facebook?.length > 0 && (
                                <Link to={item.social_networks.facebook}><i className="fa fa-facebook-f"></i></Link>
                            )}
                            {item.social_networks.twitter?.length > 0 && (
                                <Link to={item.social_networks.twitter}><i className="fa fa-twitter"></i></Link>
                            )}
                            {item.social_networks.instagram?.length > 0 && (
                                <Link to={item.social_networks.instagram}><i className="fa fa-instagram"></i></Link>
                            )}
                            {item.social_networks.youtube?.length > 0 && (
                                <Link to={item.social_networks.youtube}><i className="fa fa-youtube"></i></Link>
                            )}
                        </div>
                        <div className="details">
                            <div className="job">{ item.city}</div>
                        </div>
                        {item.isContact ? (
                            <button onClick={() => handleUpdateData('contact', 'delete', item.id)} className="btn btn-danger">Delete from contacts</button>
                        ):(
                            <button onClick={() => handleUpdateData('contact', 'add', item.id)} className="btn btn-success">Add to contacts</button>
                            )}
                        {item.isFavourite ? (
                            <button onClick={() => handleUpdateData('favorite', 'delete', item.id)} className="btn btn-danger">Delete from favorites</button>
                        ):(
                            <button onClick={() => handleUpdateData('favorite', 'add', item.id)} className="btn btn-success">Add to favorites</button>
                        )}
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

export default ContactItems