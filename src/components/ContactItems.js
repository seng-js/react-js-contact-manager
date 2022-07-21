import React from 'react'
import './SideBar.css';
import ContactGridViewItems from "./ContactGridViewItems";
import ContactListViewItems from "./ContactListViewItems";

const ContactItems = (props) => {
    const isGridView = props.isGridView === undefined ? true : props.isGridView;
    return (
        <>
            {isGridView ? (
                <ContactGridViewItems data={props.data} />
            ):(
                <ContactListViewItems data={props.data} />
            )}
        </>
    )
}

export default ContactItems