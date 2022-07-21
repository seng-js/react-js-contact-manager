const getProfile = () => {
    return {
        "avatar": "img/img6.jpg",
        "city": "Ukraine, Lviv",
        "company": "Logical",
        "id": 6,
        "isContact": true,
        "isFavourite": false,
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

const getLocationsByData = (data) => {
    let locations = data.map(item => item.city);
    return Array.from(new Set(locations));
}

export {
    getProfile,
    getLocationsByData,
    getSetting
}