const express = require('express')
const app = express()

var products = [];
storeData();
function storeData() {
    var product_assoc = [
        "Bar soap",
        "Bar soap",
        "Sunscreen",
        "Sunscreen",
        "Sunscreen",
        "Bag",
        "Bag"
    ]
    var names = [
        "Lush: Goddess Bar Soap", 
        "Fifth Origins: Dream Pack", 
        "Bolden USA: SPF 30 Brightening Moisturizer",
        "Kinlo: Golden Rays Golden Rays Sunscreen SPF 50+ Melanated Tint",
        "Goddess Garden Organics: Daily SPF 30 Mineral Sunscreen Lotion",
        "Stasher: Stand-Up Mini Bag",
        "Lunchskins: Snack Bag"
    ];
    var scores = [
        95,
        90,
        77,
        70,
        97,
        90,
        93
    ]
    var prices = [
        12.50,
        8.25,
        28.00,
        19.99,
        5.99,
        17.99,
        5.99,
    ]
    for(var i = 0; i < product_assoc.length; i++) {
        products.push({
            product_assoc: product_assoc[i],
            name: names[i],
            score: scores[i],
            price: prices[i]
        });
    }

} 

app.get('/search', (req, res) => {
    var search_res = req.params.query;
    products.filter(obj => {
        return obj.product_assoc == search_res;
    })
    res.json(products)
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})