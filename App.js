import React from "react";
import ReactDOM from "react-dom/client";


/** 
 * 
 Header
 -logo
 -nav items(about, contacts)
 -cart 
 Body 
    -serach
    -restaurants cantainer
    -restaurants card
        -restarurant image
        -cusions
        -ratings
        -estimated time
        -price for two
 Footer
    -copyright
    -contact no
    -address of the company 
    -links(Instagram, fb, twiter)

*/

const resList = [
    {
        "info": {
            "id": "648211",
            "name": "KFC",
            "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
            "locality": "Kanke Road",
            "areaName": "Gandhi Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
            ],
            "avgRating": 4.2,
            "feeDetails": {
                "restaurantId": "648211",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4900
            },
            "parentId": "547",
            "avgRatingString": "4.2",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 6.6,
                "serviceability": "SERVICEABLE",
                "slaString": "33 mins",
                "lastMileTravelString": "6.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-27 01:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "EVERY ITEM",
                "subHeader": "@ ₹179"
            },
            "loyaltyDiscoverPresentationInfo": {
                "badgeType": "BADGE_TYPE_OFFER_PACK",
                "offerSubText": "with offer pack",
                "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-e813e655-ff9b-48ba-8a94-6f10c3852b72"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-kanke-road-gandhi-nagar-ranchi-648211",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "657477",
            "name": "Burger King",
            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            "locality": "Nucleus Mall",
            "areaName": "Lalpur",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Burgers",
                "American"
            ],
            "avgRating": 3.9,
            "feeDetails": {
                "restaurantId": "657477",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 7000
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 7000
            },
            "parentId": "166",
            "avgRatingString": "3.9",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 58,
                "lastMileTravel": 10.6,
                "serviceability": "SERVICEABLE",
                "slaString": "58 mins",
                "lastMileTravelString": "10.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-27 00:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-e813e655-ff9b-48ba-8a94-6f10c3852b72"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/burger-king-nucleus-mall-lalpur-ranchi-657477",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "625182",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "locality": "Nucleus Mall",
            "areaName": "Gandhi Nagar",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 3.9,
            "feeDetails": {
                "restaurantId": "625182",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 5000
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 5000
            },
            "parentId": "721",
            "avgRatingString": "3.9",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 38,
                "lastMileTravel": 6.6,
                "serviceability": "SERVICEABLE",
                "slaString": "38 mins",
                "lastMileTravelString": "6.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-26 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "loyaltyDiscoverPresentationInfo": {
                "badgeType": "BADGE_TYPE_OFFER_PACK",
                "offerSubText": "with offer pack",
                "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-e813e655-ff9b-48ba-8a94-6f10c3852b72"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-hut-nucleus-mall-gandhi-nagar-ranchi-625182",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "448094",
            "name": "La Pino'z Pizza",
            "cloudinaryImageId": "zwzlgcpqnnc0wpc8lnli",
            "locality": "Hatma",
            "areaName": "Ahirtoli",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 3.8,
            "feeDetails": {
                "restaurantId": "448094",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 5000
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 5000
            },
            "parentId": "4961",
            "avgRatingString": "3.8",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 38,
                "lastMileTravel": 7.7,
                "serviceability": "SERVICEABLE",
                "slaString": "38 mins",
                "lastMileTravelString": "7.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-27 01:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "loyaltyDiscoverPresentationInfo": {
                "badgeType": "BADGE_TYPE_OFFER_PACK",
                "offerSubText": "with offer pack",
                "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-e813e655-ff9b-48ba-8a94-6f10c3852b72"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-hatma-ahirtoli-ranchi-448094",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "727850",
            "name": "The Belgian Waffle Co.",
            "cloudinaryImageId": "8cb220fa3997a3b928d2ffb6c098acaf",
            "locality": "52 Circular road",
            "areaName": "LALPUR",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Waffle",
                "Desserts",
                "Ice Cream"
            ],
            "avgRating": 4.4,
            "veg": true,
            "feeDetails": {
                "restaurantId": "727850",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 7000
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 7000
            },
            "parentId": "2233",
            "avgRatingString": "4.4",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 55,
                "lastMileTravel": 11.5,
                "serviceability": "SERVICEABLE",
                "slaString": "55 mins",
                "lastMileTravelString": "11.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-27 00:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-e813e655-ff9b-48ba-8a94-6f10c3852b72"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-52-circular-road-lalpur-ranchi-727850",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "363841",
            "name": "Faasos - Wraps & Rolls",
            "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
            "locality": "HB Road",
            "areaName": "Kokar",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Kebabs",
                "Fast Food",
                "Snacks",
                "North Indian",
                "American",
                "Healthy Food",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "363841",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 7000
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 7000
            },
            "parentId": "21809",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 59,
                "lastMileTravel": 12.4,
                "serviceability": "SERVICEABLE",
                "slaString": "59 mins",
                "lastMileTravelString": "12.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-26 23:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-e813e655-ff9b-48ba-8a94-6f10c3852b72"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-hb-road-kokar-ranchi-363841",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "644123",
            "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
            "cloudinaryImageId": "e2ee93694dd952629beeea1f2433cdd6",
            "locality": "Morabadi\n",
            "areaName": "Kanka",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Desserts",
                "Ice Cream",
                "Ice Cream Cakes"
            ],
            "avgRating": 4.4,
            "veg": true,
            "feeDetails": {
                "restaurantId": "644123",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 6000
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 6000
            },
            "parentId": "582",
            "avgRatingString": "4.4",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 41,
                "lastMileTravel": 9,
                "serviceability": "SERVICEABLE",
                "slaString": "41 mins",
                "lastMileTravelString": "9.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-26 22:30:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "loyaltyDiscoverPresentationInfo": {
                "badgeType": "BADGE_TYPE_OFFER_PACK",
                "offerSubText": "with offer pack",
                "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-e813e655-ff9b-48ba-8a94-6f10c3852b72"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-morabadi-kanka-ranchi-644123",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "702073",
            "name": "Biggies Burger",
            "cloudinaryImageId": "c7ff60087322d366c1e91a1bf84ac78f",
            "locality": "Adarsh Nagar",
            "areaName": "Kanke",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "American",
                "Fast Food",
                "Beverages"
            ],
            "avgRating": 4,
            "feeDetails": {
                "restaurantId": "702073",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 5000
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 5000
            },
            "parentId": "45723",
            "avgRatingString": "4.0",
            "totalRatingsString": "50+",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 6.9,
                "serviceability": "SERVICEABLE",
                "slaString": "35 mins",
                "lastMileTravelString": "6.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-26 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "loyaltyDiscoverPresentationInfo": {
                "badgeType": "BADGE_TYPE_OFFER_PACK",
                "offerSubText": "with offer pack",
                "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-e813e655-ff9b-48ba-8a94-6f10c3852b72"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/biggies-burger-adarsh-nagar-kanke-ranchi-702073",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "363843",
            "name": "Oven Story Pizza - Standout Toppings",
            "cloudinaryImageId": "ab979bffbd658e74de650a15ca0092a3",
            "locality": "HB Road",
            "areaName": "Kokar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 3.9,
            "feeDetails": {
                "restaurantId": "363843",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 7000
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 7000
            },
            "parentId": "3534",
            "avgRatingString": "3.9",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 63,
                "lastMileTravel": 12.4,
                "serviceability": "SERVICEABLE",
                "slaString": "63 mins",
                "lastMileTravelString": "12.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-26 23:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-e813e655-ff9b-48ba-8a94-6f10c3852b72"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/oven-story-pizza-standout-toppings-hb-road-kokar-ranchi-363843",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
]

const RestaurantCard = (props) => {

    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        locality,
        costForTwo,
        avgRating,
        sla,
        deliveryTime
    } = resData?.info


    return (
        <div className="res-card">
            <img className="res-logo"
                alt="res-logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")} </h5>
            <h5>{locality}</h5>
            <h5>{sla.deliveryTime} minutes</h5>
            <h5>{costForTwo}</h5>
            



        </div>
    )
}
const Body = () => {

    return (
        <div className="body">

            <div className="search">Search</div>
            <div className="res-container">
              { resList.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))}





            </div>
        </div>
    )
}

const Header = () => {
    return (
        <div className="header">

            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>

                </ul>
            </div>
        </div>)


}
const AppLayout = () => {

    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


