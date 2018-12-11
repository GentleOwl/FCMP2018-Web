// Create a partial index on cuisine field
// which will be used only when filtering on borough equal to “Staten Island”



db.restaurants.createIndex({ cuisine: 1 }, { partialFilterExpression: { borough: "Staten Island" } });

db.restaurants.find({ borough: "Staten Island", cuisine: "American" }).pretty().explain();

/*
"winningPlan" : {
        "stage" : "FETCH",
        "filter" : {
                "borough" : {
                        "$eq" : "Staten Island"
                }
        },
        "inputStage" : {
                "stage" : "IXSCAN",
                "keyPattern" : {
                        "cuisine" : 1
                },
                "indexName" : "cuisine_1",
                "isMultiKey" : false,
                "multiKeyPaths" : {
                        "cuisine" : [ ]
                },
                "isUnique" : false,
                "isSparse" : false,
                "isPartial" : true,
                "indexVersion" : 2,
                "direction" : "forward",
                "indexBounds" : {
                        "cuisine" : [
                                "[\"American\", \"American\"]"
                        ]
                }
        }
}
 */

db.restaurants.find({ borough: "Staten Island", name: "Bagel Land" }).pretty().explain();

/*

"winningPlan" : {
        "stage" : "COLLSCAN",
        "filter" : {
                "$and" : [
                        {
                                "borough" : {
                                        "$eq" : "Staten Island"
                                }
                        },
                        {
                                "name" : {
                                        "$eq" : "Bagel Land"
                                }
                        }
                ]
        },
        "direction" : "forward"
}

*/

db.restaurants.find({ borough: "Queens", cuisine: "Pizza" }).pretty().explain();

/*

"winningPlan" : {
        "stage" : "COLLSCAN",
        "filter" : {
                "$and" : [
                        {
                                "borough" : {
                                        "$eq" : "Queens"
                                }
                        },
                        {
                                "cuisine" : {
                                        "$eq" : "Pizza"
                                }
                        }
                ]
        },
        "direction" : "forward"
}

*/

db.restaurants.dropIndex({ cuisine: 1 });


