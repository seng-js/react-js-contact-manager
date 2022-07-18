import React from 'react'
import './SideBar.css';
import {Link} from "react-router-dom";

const ContactItems = (props) => {
    const contactItems = props.data.map( item => {
        return (
                <div className="card">
                    <div className="content">
                        <div className="img">
                            <img src={item.avatar} alt="" />
                        </div>
                        <div className="details">
                            <div className="name">{item.name}</div>
                            <div className="job">{item.position}</div>
                        </div>
                        <div className="media-icons">
                            <Link to={item.social_networks.facebook}><i className="fa fa-facebook-f"></i></Link>
                            <Link to={item.social_networks.twitter}><i className="fa fa-twitter"></i></Link>
                            <Link to={item.social_networks.instagram}><i className="fa fa-instagram"></i></Link>
                            <Link to={item.social_networks.youtube}><i className="fa fa-youtube"></i></Link>
                        </div>
                        <div className="details">
                            <div className="job">{item.city}</div>
                        </div>
                        <button className="btn btn-danger">Delete from contacts</button>
                        <button className="btn btn-danger">Delete from favorites</button>
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
                        {contactItems}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactItems