export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const GET_INIT_DATA = 'GET_INIT_DATA';
export const FILTER_BY_LOCATION = 'FILTER_BY_LOCATION';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';

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

export const getDataFilterByLocation = (location) => {
    return {
        type: FILTER_BY_LOCATION,
        payload: {location: location}
    };
}