const getProfile = () => {
    return {
        "id":8,
        "name":"Justin Chung",
        "city":"Ukraine, Lviv",
        "avatar":"img/img6.jpeg",
        "social_networks":{
            "facebook":"#",
            "twitter":"#",
            "instagram":"#",
            "youtube":"#"
        },
        "company":"HandyCode",
        "position":"UI Designer",
        "isFavourite":false,
        "isContact":false
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

export {
    getProfile,
    getSetting
}