// How many records does each airline class have?
// Use $project to show result as { class: "Z", total: 999 }

var result = db.airlines
    .aggregate([{
        $group: {
            _id: "$class",
            total: {
                $sum: 1
            }
        }
    }, {
        $project: {
            _id: 0,
            class: "$_id",
            total: 1
        }
    }])
    .toArray();

print(JSON.stringify(result));

/*

[{
    "total": 140343,
    "class": "F"
}, {
    "total": 23123,
    "class": "L"
}, {
    "total": 5683,
    "class": "P"
}, {
    "total": 17499,
    "class": "G"
}]

*/