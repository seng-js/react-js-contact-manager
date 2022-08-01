import {CREATE_CONTACT, GET_FILTER_DATA, GET_INIT_DATA, UPDATE_CONTACT} from "./actions"

import {
    isFilterByLocation, isFilterByName, isValidInput
} from "../util";

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
                tempContacts: payload
            };
        case CREATE_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, payload.data],
                tempContacts: state.contacts
            };
        case UPDATE_CONTACT:
            contacts = state.contacts.map((contact) => {
                if (contact.index === payload.index) {
                    return {...contact, ...payload.data}
                }

                return contact;
            });
            return {
                ...state,
                contacts: contacts
            };
        case GET_FILTER_DATA:
            if (isValidInput(payload.filterByLocation) &&
                isValidInput(payload.filterByName)) {
                contacts = state.tempContacts.filter(contact => {
                    return isFilterByName(payload.filterByName, contact) &&
                        isFilterByLocation(payload.filterByLocation, contact);
                });
            } else if (isValidInput(payload.filterByLocation)) {
                contacts = state.tempContacts.filter(contact => {
                    return isFilterByLocation(payload.filterByLocation, contact);
                });
            } else if (isValidInput(payload.filterByName)) {
                contacts = state.tempContacts.filter(contact => {
                    return isFilterByName(payload.filterByLocation, contact);
                });
            } else {
                contacts = state.tempContacts;
            }
            return {
                ...state,
                contacts,
                tempContacts: state.tempContacts,
                selectedFilterByName: payload.filterByName,
                selectedFilterByLocation: payload.filterByLocation
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