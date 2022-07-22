import axios from "axios";

import { getInitData, updateContact } from "./actions";

const FIREBASE_URL = 'https://contact-manager-f189f-default-rtdb.firebaseio.com/';
const FIREBASE_URL_PEOPLE = FIREBASE_URL + 'people';
const FIREBASE_URL_PEOPLE_JSON = FIREBASE_URL + 'people.json';

export const getInitDataHandler = (dispatch) => {
    return axios.get(FIREBASE_URL_PEOPLE_JSON)
        .then((response) => {
            dispatch(getInitData(response.data))
        });
}

export const updateContactHandler = (type, action, index, dispatch) => {
    let data = {};
    const isAdd = action === 'add';
    if (type === 'favorite') {
        data = {'isFavourite': isAdd}
    } else if (type === 'contact') {
        data = {'isContact': isAdd}
    }
    axios.patch(FIREBASE_URL_PEOPLE + '/' + index + '.json', data).then(() => {
        dispatch(updateContact(index, data))
    });
}