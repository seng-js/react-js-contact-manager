import axios from "axios";
import {createContact, getInitData, patchContact, updateContact} from "./actions";

const FIREBASE_URL = 'https://contact-manager-f189f-default-rtdb.firebaseio.com/';
const FIREBASE_URL_PEOPLE = FIREBASE_URL + 'people';
const FIREBASE_URL_PEOPLE_JSON = FIREBASE_URL + 'people.json';

export const getInitDataHandler = (dispatch) => {
    return axios.get(FIREBASE_URL_PEOPLE_JSON)
        .then((response) => {
            let contacts = [];
            Object.entries(response.data).forEach(([index, value]) => {
                contacts.push({ ...value, key: index });
            });
            dispatch(getInitData(contacts))
        }).catch((error) => {
            console.log('Error: ' + error);
        });
}

export const updateContactHandler = (type, action, index, dispatch) => {
    let data = {};
    const isAdd = action === 'add';
    if (type === 'favorite') {
        data = {'isFavourite': isAdd}
    } else if (type === 'contact') {
        data = {'isContact': isAdd}
        if (isAdd === false) {
            data = {'isContact': false, 'isFavourite': false}
        }
    }
    axios.patch(FIREBASE_URL_PEOPLE + '/' + index + '.json', data).then(() => {
        dispatch(patchContact(index, data))
    });
}

export const saveContactHandler = (data, dispatch) => {
    axios.post(FIREBASE_URL_PEOPLE_JSON, data).then(() => {
        dispatch(createContact(data))
    });
}