import React from 'react'
import {updateData} from "../services";

const ActionList = (props) => {
    const item = props.item;
    const index = props.index;
    return (
        <div className="list-action">
            {item.isContact ? (
                <button onClick={() => updateData('contact', 'delete', index)} className="btn btn-danger">Delete from contacts</button>
            ):(
                <button onClick={() => updateData('contact', 'add', index)} className="btn btn-success">Add to contacts</button>
            )}
            {item.isFavourite ? (
                <button onClick={() => updateData('favorite', 'delete', index)} className="btn btn-danger">Delete from favorites</button>
            ):(
                <button onClick={() => updateData('favorite', 'add', index)} className="btn btn-success">Add to favorites</button>
            )}
        </div>
    )
}

export default ActionList