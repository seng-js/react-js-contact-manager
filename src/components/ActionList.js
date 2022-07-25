import React from 'react'
import {useDispatch} from "react-redux";
import {updateContactHandler} from "../services";

const ActionList = (props) => {
    const dispatch = useDispatch();
    const item = props.item;
    const updateData = (type, action) => {
        updateContactHandler(type, action, props.index, dispatch);
    }
    return (
        <div className="list-action">
            {item.isContact ? (
                <button onClick={() => updateData('contact', 'delete')} className="btn btn-danger">Delete from contacts</button>
            ):(
                <button onClick={() => updateData('contact', 'add')} className="btn btn-success">Add to contacts</button>
            )}
            {item.isContact === true && item.isFavourite === false && (
                <button onClick={() => updateData('favorite', 'add')} className="btn btn-success">Add to favorites</button>
            )}
            {item.isFavourite === true && (
                <button onClick={() => updateData('favorite', 'delete')} className="btn btn-danger">Delete from favorites</button>
            )}
        </div>
    )
}

export default ActionList