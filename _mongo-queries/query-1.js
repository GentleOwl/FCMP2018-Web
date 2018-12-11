// How many “Chinese” (cuisine) restaurants are in “Queens” (borough)?

var result = db.restaurants
    .find({
        borough: "Queens",
        cuisine: "Chinese"
    })
    .count();

print(result);

// 728