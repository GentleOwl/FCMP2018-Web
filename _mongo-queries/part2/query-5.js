// Find the city (originCity) with the highest sum of passengers for each state (originState)
// of the United States (originCountry).
// Provide the city for the first 5 states ordered by state alphabetically
// (you should see the city for Alaska, Arizona and etc).
// Show result as { "totalPassengers" : 999, "location" : { "state" : "abc", "city" : "xyz" } }

var result = db.airlines
    .aggregate([{
        $match: {
            originCountry: "United States"
        }
    }, {
        $group: {
            _id: {
                state: "$originState",
                city: "$originCity"
            },
            totalPassengers: {
                $sum: "$passengers"
            }
        }
    }, {
        $sort: {
            "_id.state": 1,
            totalPassengers: -1
        }
    }, {
        $group: {
            _id: "$_id.state",
            city: {
                $first: "$_id.city"
            },
            totalPassengers: {
                $first: "$totalPassengers"
            }
        }
    }, {
        $limit: 5
    }, {
        $sort: {
            city: 1
        }
    }, {
        $project: {
            _id: 0,
            totalPassengers: 1,
            location: {
                state: "$_id",
                city: "$city"
            }
        }
    }])
    .toArray();

print(JSON.stringify(result));

/*

[{
    "totalPassengers": 319146,
    "location": {
        "state": "Vermont",
        "city": "Burlington, VT"
    }
}, {
    "totalPassengers": 18408792,
    "location": {
        "state": "Texas",
        "city": "Dallas/Fort Worth, TX"
    }
}, {
    "totalPassengers": 1040819,
    "location": {
        "state": "Rhode Island",
        "city": "Providence, RI"
    }
}, {
    "totalPassengers": 310052,
    "location": {
        "state": "South Dakota",
        "city": "Sioux Falls, SD"
    }
}, {
    "totalPassengers": 12946230,
    "location": {
        "state": "Virginia",
        "city": "Washington, DC"
    }
}]

*/