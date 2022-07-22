import {FILTER_BY_LOCATION, GET_INIT_DATA, UPDATE_CONTACT} from "./actions";

const initialState = {
    contacts: []
}

const reducer = (state = initialState, action) => {
    let contacts = [];
    switch (action.type) {
        case GET_INIT_DATA:
            return {
                ...state,
                contacts: action.payload
            };
        case UPDATE_CONTACT:
            contacts = state.contacts.map((contact) => {
                if (contact.index === action.payload.index) {
                    contact = Object.assign(contact, action.payload.data)
                }

                return contact;
            });
            return {
                ...state,
                contacts: contacts
            };
        case FILTER_BY_LOCATION:
            if (action.payload.location.length === 0) {
                contacts = state.contacts;
            } else {
                contacts = state.contacts.filter(contact => {
                    if (contact.city === action.payload.location) {
                        return contact;
                    }
                });
            }

            return {
                ...state,
                contacts: contacts
            };
        default:
            return {
                ...state,
                contacts: []
            };
    }
}

export default reducer;