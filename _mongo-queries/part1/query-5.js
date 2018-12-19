// What are _id and borough of “Seafood” (cuisine) restaurants
// which received at least one “B” grade in period from 2014-02-01 to 2014-03-01?
// Use projection to include only _id and borough.

var result = db.restaurants
    .find({
        cuisine: "Seafood",
        grades: {
            $elemMatch: {
                grade: "B",
                date: {
                    $gte: ISODate('2014-02-01'),
                    $lte: ISODate('2014-03-01'),
                }
            }
        }
    }, {
        _id: 1,
        borough: 1
    })
    .toArray();

print(JSON.stringify(result));

// [{"_id":{"$oid":"5c0fdaef82dbcabec29d9f03"},"borough":"Bronx"},{"_id":{"$oid":"5c0fdaef82dbcabec29da17a"},"borough":"Manhattan"}