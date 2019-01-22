// Which carriers provide flights to Latvia (destCountry)?
// Show result as one document {"_id" : "Latvia", "carriers" : [ "carrier1", " carrier2", …] }

var result = db.airlines
    .aggregate([{
        $match: {
            destCountry: "Latvia"
        }
    }, {
        $group: {
            _id: "$destCountry",
            carriers: {
                $addToSet: "$carrier"
            }
        }
    }])
    .toArray();

print(JSON.stringify(result));

/*

[{
    "_id": "Latvia",
    "carriers": ["Uzbekistan Airways", "Blue Jet SP Z o o", "JetClub AG"]
}]

*/