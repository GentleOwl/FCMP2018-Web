// Create an index which will be used by this query and
// provide proof (from explain() or Compass UI) that the index
// is indeed used by the winning plan

db.restaurants.find({ name: "Glorious Food" }).pretty().explain();

/*
"winningPlan" : {
        "stage" : "COLLSCAN",
        "filter" : {
                "name" : {
                        "$eq" : "Glorious Food"
                }
        },
        "direction" : "forward"
}
*/

db.restaurants.createIndex({ name: 1 });

db.restaurants.find({ name: "Glorious Food" }).pretty().explain();

/*
"winningPlan" : {
        "stage" : "FETCH",
        "inputStage" : {
                "stage" : "IXSCAN",
                "keyPattern" : {
                        "name" : 1
                },
                "indexName" : "name_1",
                "isMultiKey" : false,
                "multiKeyPaths" : {
                        "name" : [ ]
                },
                "isUnique" : false,
                "isSparse" : false,
                "isPartial" : false,
                "indexVersion" : 2,
                "direction" : "forward",
                "indexBounds" : {
                        "name" : [
                                "[\"Glorious Food\", \"Glorious Food\"]"
                        ]
                }
        }
}
 */

db.restaurants.dropIndex({ name: 1 });
