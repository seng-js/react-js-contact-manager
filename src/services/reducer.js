import {GET_FILTER_DATA, GET_INIT_DATA, UPDATE_CONTACT} from "./actions"

const initialState = {
    selectedFilterByName: '',
    selectedFilterByLocation: '',
    contacts: []
}

const reducer = (state = initialState, action) => {
    let contacts = [];
    switch (action.type) {
        case GET_INIT_DATA:
            return {
                ...state,
                contacts: action.payload,
                tempContacts: action.payload};
        case UPDATE_CONTACT:
            contacts = state.contacts.map((contact) => {
                if (contact.index === action.payload.index) {
                    Object.assign(contact, action.payload.data)
                }

                return contact;
            });
            return {
                ...state,
                contacts: contacts,
                tempContacts: state.tempContacts
            };
        case GET_FILTER_DATA:
            if (action.payload.filter_by_location !== undefined
                && action.payload.filter_by_location.length > 0) {
                contacts = state.tempContacts.filter(contact => {
                    return contact.city.toLowerCase() === action.payload.filter_by_location.toLowerCase();
                });
            } else if (action.payload.filter_by_name !== undefined
                && action.payload.filter_by_name.length > 0) {
                contacts = state.tempContacts.filter(contact => {
                    const fullSearchQuery = `${contact.name.toLowerCase()} ${contact.company.toLowerCase()} ${contact.position.toLowerCase()}`;
                    return fullSearchQuery.toLowerCase().includes(action.payload.filter_by_name.toLowerCase());
                });
            } else {
                contacts = state.tempContacts;
            }
            return {
                ...state,
                contacts: contacts,
                tempContacts: state.tempContacts,
                selectedFilterByName: action.payload?.filter_by_name,
                selectedFilterByLocation: action.payload?.filter_by_location
            };
        default:
            return {
                ...state,
                contacts: [],
                tempContacts:[]
            };
    }
}

export default reducer;