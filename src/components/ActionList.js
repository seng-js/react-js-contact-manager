import React from 'react'
import {useDispatch} from "react-redux";
import {updateContactHandler} from "../services";

const ActionList = (props) => {
    const dispatch = useDispatch();
    const item = props.item;
    const index = props.index;
    const updateData = (type, action) => {
        updateContactHandler(type, action, index, dispatch);
    }
    return (
        <div className="list-action">
            {item.isContact ? (
                <button onClick={() => updateData('contact', 'delete')} className="btn btn-danger">Delete from contacts</button>
            ):(
                <button onClick={() => updateData('contact', 'add')} className="btn btn-success">Add to contacts</button>
            )}
            {item.isFavourite ? (
                <button onClick={() => updateData('favorite', 'delete')} className="btn btn-danger">Delete from favorites</button>
            ):(
                <button onClick={() => updateData('favorite', 'add')} className="btn btn-success">Add to favorites</button>
            )}
        </div>
    )
}

export default ActionList