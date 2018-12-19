// What are the names of the restaurants which have a grade at index 8 with score less then 7? Use projection to include only names without _id.

var result = db.restaurants
    .find({
        "grades.8.score": {
            $lt: 7
        }
    }, {
        _id: 0,
        name: 1
    })
    .toArray();

print(JSON.stringify(result));

// [{"name":"Silver Krust West Indian Restaurant"},{"name":"Pure Food"}]