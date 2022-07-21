import axios from "axios";

const FIREBASE_URL = 'https://contact-manager-f189f-default-rtdb.firebaseio.com/';
const FIREBASE_URL_PEOPLE = FIREBASE_URL + 'people';
const FIREBASE_URL_PEOPLE_JSON = FIREBASE_URL + 'people.json';

const getData = () => {
    return axios.get(FIREBASE_URL_PEOPLE_JSON);
}

const updateData = async (type, action, index) => {
    let data = {};
    const isAdd = action === 'add';
    if (type === 'favorite') {
        data = {'isFavourite': isAdd}
    } else if (type === 'contact') {
        data = {'isContact': isAdd}
    }

    await axios.patch(FIREBASE_URL_PEOPLE + '/' + index + '.json', data)
}

export {
    getData,
    updateData,
    FIREBASE_URL_PEOPLE,
    FIREBASE_URL_PEOPLE_JSON
}