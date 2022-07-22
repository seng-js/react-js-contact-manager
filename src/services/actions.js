export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const GET_INIT_DATA = 'GET_INIT_DATA';

export const getInitData = (contacts) => {
    contacts.map((contact, index) => {
        contact.index = index;
        return contact;
    });

    return {
        type: GET_INIT_DATA,
        payload: contacts,
    };
};

export const updateContact = (index, data) => {
    return {
        type: UPDATE_CONTACT,
        payload: {index: index, data: data}
    };
};