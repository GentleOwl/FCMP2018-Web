// What is the _id of the restaurant which has the grade with the highest ever score?

var result = db.restaurants
    .find({}, {
        _id: 1
    })
    .sort({
        "grades.score": -1
    })
    .limit(1)
    .next();

print(result._id.toString());

// ObjectId("5c0fdaef82dbcabec29d6af6")