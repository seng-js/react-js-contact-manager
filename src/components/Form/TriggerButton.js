import React from 'react';
const TriggerButton = ({ triggerText, buttonRef, showModal }) => {
    const iconButton = triggerText === 'Add people' ? 'fa-plus-circle' : 'fa-pencil-square-o';
    const textButton = triggerText === 'Edit people' ? '' : 'Add people';
    return (
        <button
            className="btn btn-lg center modal-button"
            ref={buttonRef}
            onClick={showModal}><i className={"fa " + iconButton} aria-hidden="true"></i> {textButton}</button>
    );
};
export default TriggerButton;
