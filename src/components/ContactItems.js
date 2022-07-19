import React from 'react'
import './SideBar.css';
import {Link} from "react-router-dom";

const ContactItems = (props) => {
    const items = props.data.map( item => {
        return (
                <div className="card">
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
                            <button className="btn btn-danger">Delete from contacts</button>
                        ):(
                            <button className="btn btn-success">Add to contacts</button>
                            )}
                        {item.isContact && item.isFavourite ? (
                            <button className="btn btn-danger">Delete from favorites</button>
                        ):(
                            <button className="btn btn-success">Add to favorites</button>
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