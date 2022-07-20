import axios from "axios";

const FIREBASE_URL = 'https://contact-manager-f189f-default-rtdb.firebaseio.com/';
const FIREBASE_URL_PEOPLE = FIREBASE_URL + 'people';
const FIREBASE_URL_PEOPLE_JSON = FIREBASE_URL + 'people.json';

const getData = () => {
    return axios.get(FIREBASE_URL_PEOPLE_JSON);
}

const updateData = async (id, action, type) => {
    let data = {};
    if (type === 'favorite') {
        data = {isFavourite: action === 'add'}
    } else if (type === 'contact') {
        data = {isContact: action === 'add'}
    }

    await axios.patch(FIREBASE_URL_PEOPLE + '/' + id + '.json', data)
}

export {
    getData,
    updateData,
    FIREBASE_URL_PEOPLE,
    FIREBASE_URL_PEOPLE_JSON
}