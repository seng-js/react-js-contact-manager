const getDefaultData = () => {
    return {
        "avatar": "img/img1.jpg",
        "city": "",
        "company": "",
        "isContact": false,
        "isFavorite": false,
        "name": "",
        "position": "",
        "social_networks": {
            "facebook": "",
            "instagram": "",
            "twitter": "",
            "youtube": ""
        }
    }
}

const getProfile = () => {
    return {
        "avatar": "img/img6.jpg",
        "city": "Ukraine, Lviv",
        "company": "Logical",
        "id": 6,
        "isContact": true,
        "isFavorite": false,
        "name": "Andrew Neil",
        "position": "Web Designer",
        "social_networks": {
            "facebook": "#",
            "instagram": "#",
            "twitter": "#",
            "youtube": "#"
        }
    }
}

const getSetting = () => {
    return {
        "gridViewActive": "img/grid-view-active.png",
        "gridViewInactive": "img/grid-view-inactive.png",
        "listViewActive": "img/list-view-active.png",
        "listViewInactive": "img/list-view-inactive.png",
        "locationFilter": "img/location-filter.png"
    }
}

const menuItems = [
    {
        icon: 'fa fa-home',
        link: "/",
        name: "Home",
    },
    {
        icon: 'fa fa-address-book',
        link: "/contacts",
        name: "Contacts",
    },
    {
        icon: 'fa fa-heart',
        link: "/favorites",
        name: "Favorites",
    },
    {
        icon: 'fa fa-user',
        link: "/people",
        name: "People",
    },
    {
        icon: 'fa fa-users',
        link: "/companies",
        name: "Companies",
    }
];

const avatars =  [
    'img/img1.jpg',
    'img/img2.jpg',
    'img/img3.jpg',
    'img/img4.jpg',
    'img/img5.jpg',
    'img/img6.jpg',
    'img/img7.jpg',
    'img/img8.jpg'
];

const listPosition = [
    'Select Position',
    'Web Designer',
    'UI Designer'
];

const listCity = [
    'Select City',
    'Ukraine, Kyiv',
    'Ukraine, Kharkiv',
    'Ukraine, Odessa',
    'Ukraine, Dnipro',
    'Ukraine, Lviv'
];

const getLocationsByData = (data) => {
    let locations = data.map(item => item.city);
    return Array.from(new Set(locations));
}

export {
    getProfile,
    getLocationsByData,
    getDefaultData,
    menuItems,
    avatars,
    listPosition,
    listCity,
    getSetting
}