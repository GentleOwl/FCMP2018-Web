// What are the carriers which flue the most number of passengers from the United State to either Greece, Italy or Spain?
// Find top 10 carriers, but provide the last 7 carriers (do not include the first 3).
// Show result as { "_id" : "<carrier>", "total" : 999}

var result = db.airlines
    .aggregate([{
        $match: {
            originCountry: "United States",
            $or: [
                {
                    destCountry: "Greece"
                },
                {
                    destCountry: "Italy"
                },
                {
                    destCountry: "Spain"
                }
            ]
        }
    }, {
        $group: {
            _id: "$carrier",
            total: {
                $sum: "$passengers"
            }
        }
    }, {
        $sort: {
            total: -1
        }
    }, {
        $limit: 10
    }, {
        $skip: 3
    }])
    .toArray();

print(JSON.stringify(result));

/*

[{
    "_id": "Compagnia Aerea Italiana",
    "total": 280256
}, {
    "_id": "United Air Lines Inc.",
    "total": 229936
}, {
    "_id": "Emirates",
    "total": 100903
}, {
    "_id": "Air Europa",
    "total": 94968
}, {
    "_id": "Meridiana S.p.A",
    "total": 20308
}, {
    "_id": "Norwegian Air Shuttle ASA",
    "total": 13344
}, {
    "_id": "VistaJet Limited",
    "total": 183
}]

*/