// Create an index which will be used by this query and
// provide proof (from explain() or Compass UI) that the index
// is indeed used by the winning plan

db.restaurants.find({ restaurant_id: "41098650" }, { _id: 0, borough: 1 }).pretty().explain();

/*
"winningPlan" : {
        "stage" : "PROJECTION",
        "transformBy" : {
                "_id" : 0,
                "borough" : 1
        },
        "inputStage" : {
                "stage" : "COLLSCAN",
                "filter" : {
                        "restaurant_id" : {
                                "$eq" : "41098650"
                        }
                },
                "direction" : "forward"
        }
}
*/

db.restaurants.createIndex({ restaurant_id: 1, borough: 1 });

db.restaurants.find({ restaurant_id: "41098650" }, { _id: 0, borough: 1 }).pretty().explain();

/*
"winningPlan" : {
        "stage" : "PROJECTION",
        "transformBy" : {
                "_id" : 0,
                "borough" : 1
        },
        "inputStage" : {
                "stage" : "IXSCAN",
                "keyPattern" : {
                        "restaurant_id" : 1,
                        "borough" : 1
                },
                "indexName" : "restaurant_id_1_borough_1",
                "isMultiKey" : false,
                "multiKeyPaths" : {
                        "restaurant_id" : [ ],
                        "borough" : [ ]
                },
                "isUnique" : false,
                "isSparse" : false,
                "isPartial" : false,
                "indexVersion" : 2,
                "direction" : "forward",
                "indexBounds" : {
                        "restaurant_id" : [
                                "[\"41098650\", \"41098650\"]"
                        ],
                        "borough" : [
                                "[MinKey, MaxKey]"
                        ]
                }
        }
}
 */

db.restaurants.dropIndex({ restaurant_id: 1, borough: 1 });
