// Add a grade { grade: "A", score: 7, date: ISODate() } to every restaurant in “Manhattan” (borough).

var result = db.restaurants
    .updateMany({
        borough: "Manhattan"
    }, {
        $push: {
            "grades": {
                grade: "A",
                score: 7,
                date: ISODate()
            }
        }
    });

print(result.modifiedCount);

// 10259