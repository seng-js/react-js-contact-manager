const getContactStorage = () => {
    return [
        {
            "id":1,
            "name":"Andrew Neil",
            "city":"Ukraine, Lviv",
            "avatar":"img/img1.jpg",
            "social_networks":{
                "twitter":"#",
                "instagram":"#",
                "youtube":"#"
            },
            "company":"Logical",
            "position":"Web Designer",
            "isFavourite":true,
            "isContact":false
        },
        {
            "id":2,
            "name":"Jasmine Carter",
            "city":"Ukraine, Lviv",
            "avatar":"img/img2.jpg",
            "social_networks":{
                "facebook":"#",
                "twitter":"#",
                "youtube":"#"
            },
            "company":"Logical",
            "position":"UI Designer",
            "isFavourite":false,
            "isContact":true
        },
        {
            "id":3,
            "name":"Justin Chung",
            "city":"Ukraine, Lviv",
            "avatar":"img/img3.jpg",
            "social_networks":{
                "facebook":"#",
                "twitter":"#",
                "instagram":"#",
            },
            "company":"HandyCode",
            "position":"UI Designer",
            "isFavourite":false,
            "isContact":false
        },
        {
            "id":4,
            "name":"Appolo Reef",
            "city":"Ukraine, Lviv",
            "avatar":"img/img5.jpg",
            "social_networks":{
                "facebook":"#",
                "youtube":"#"
            },
            "company":"PerfectCode",
            "position":"Web Designer",
            "isFavourite":false,
            "isContact":false
        },
        {
            "id":5,
            "name":"Adrina Calvo",
            "city":"Ukraine, Lviv",
            "avatar":"img/img5.jpg",
            "social_networks":{
                "facebook":"#",
                "youtube":"#"
            },
            "company":"PerfectCode",
            "position":"UI Designer",
            "isFavourite":false,
            "isContact":false
        },
        {
            "id":6,
            "name":"Andrew Neil",
            "city":"Ukraine, Lviv",
            "avatar":"img/img1.jpg",
            "social_networks":{
                "youtube":"#"
            },
            "company":"Logical",
            "position":"Web Designer",
            "isFavourite":false,
            "isContact":false
        },
        {
            "id":7,
            "name":"Jasmine Carter",
            "city":"Ukraine, Lviv",
            "avatar":"img/img2.jpg",
            "social_networks":{
                "facebook":"#",
                "twitter":"#",
                "instagram":"#",
                "youtube":"#"
            },
            "company":"Logical",
            "position":"UI Designer",
            "isFavourite":false,
            "isContact":false
        },
        {
            "id":8,
            "name":"Justin Chung",
            "city":"Ukraine, Lviv",
            "avatar":"img/img3.jpg",
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
    ];
}

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
    getContactStorage,
    getProfile,
    getSetting
}