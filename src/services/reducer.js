import {GET_FILTER_DATA, GET_INIT_DATA, UPDATE_CONTACT} from "./actions"

const initialState = {
    selectedFilterByName: '',
    selectedFilterByLocation: '',
    contacts: []
}

const reducer = (state = initialState, action) => {
    let contacts = [];
    let payload = action.payload;
    switch (action.type) {
        case GET_INIT_DATA:
            return {
                ...state,
                contacts: payload,
                tempContacts: payload};
        case UPDATE_CONTACT:
            contacts = state.contacts.map((contact) => {
                if (contact.index === payload.index) {
                    Object.assign(contact, payload.data)
                }

                return contact;
            });
            return {
                ...state,
                contacts: contacts,
                tempContacts: state.tempContacts
            };
        case GET_FILTER_DATA:
            if (payload.filter_by_location !== undefined &&
                payload.filter_by_location.length > 0 &&
                payload.filter_by_name !== undefined &&
                payload.filter_by_name.length > 0
            ) {
                contacts = state.tempContacts.filter(contact => {
                    const fullSearchQuery = `${contact.name.toLowerCase()} ${contact.company.toLowerCase()} ${contact.position.toLowerCase()}`;
                    return fullSearchQuery.toLowerCase().includes(payload.filter_by_name.toLowerCase()) &&
                        contact.city.toLowerCase() === payload.filter_by_location.toLowerCase();
                });
            } else if (payload.filter_by_location !== undefined
                && payload.filter_by_location.length > 0) {
                contacts = state.tempContacts.filter(contact => {
                    return contact.city.toLowerCase() === payload.filter_by_location.toLowerCase();
                });
            } else if (payload.filter_by_name !== undefined
                && payload.filter_by_name.length > 0) {
                contacts = state.tempContacts.filter(contact => {
                    const fullSearchQuery = `${contact.name.toLowerCase()} ${contact.company.toLowerCase()} ${contact.position.toLowerCase()}`;
                    return fullSearchQuery.toLowerCase().includes(payload.filter_by_name.toLowerCase());
                });
            } else {
                contacts = state.tempContacts;
            }
            return {
                ...state,
                contacts: contacts,
                tempContacts: state.tempContacts,
                selectedFilterByName: payload.filter_by_name,
                selectedFilterByLocation: payload.filter_by_location
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