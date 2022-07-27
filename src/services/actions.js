export const CREATE_CONTACT = 'CREATE_CONTACT';
export const PATCH_CONTACT = 'PATCH_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const GET_INIT_DATA = 'GET_INIT_DATA';
export const GET_FILTER_DATA = 'GET_FILTER_DATA';

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

export const patchContact = (index, data) => {
    return {
        type: PATCH_CONTACT,
        payload: {index: index, data: data}
    };
};

export const createContact = (data) => {
    return {
        type: CREATE_CONTACT,
        payload: {data: data}
    };
};

export const updateContact = (index, data) => {
    return {
        type: UPDATE_CONTACT,
        payload: {data: data}
    };
};

export const getFilterData = (payload) => {
    return {
        type: GET_FILTER_DATA,
        payload: payload
    };
}