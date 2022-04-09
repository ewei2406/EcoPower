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
    var imageLinks = [
        "https://www.lushusa.com/dw/image/v2/BDMQ_PRD/on/demandware.static/-/Sites-lushcosmetics-export/default/dw172edf6f/images/product/02259.jpg?sw=450&sh=450",
        "https://cdn.shopify.com/s/files/1/0065/5769/6088/products/FO_soap_4pack_2_380dbdea-dfc9-4f3d-93c1-08f54577db40_900x.jpg?v=1613478250",
        "https://cdn.shopify.com/s/files/1/0658/8769/products/BoldenBrighteningMoisturizerSPF30Tube_1200x.jpg?v=1617397389",
        "https://www.kinlo.com/wp-content/uploads/2021/10/Kinlo_Golden-Rays_1900x1787-min.jpg",
        "https://www.goddessgarden.com/wp-content/uploads/2020/08/DAILY-SPF-50-MINERAL-SUNSCREEN-LOTION-6-oz.-Front-2000px_resize.jpg",
        "https://cdn.shopify.com/s/files/1/2237/5935/products/SU_Mini_Coral_OW_Empty_2800_1000x.jpg?v=1649135060",
        "https://cdn.shopify.com/s/files/1/2358/3785/products/bluedit_2000x.jpg?v=1565297995"
    ]
    var links = [
        "https://www.lushusa.com/shower/bar-soap/goddess/9999902259.html",
        "https://www.fifthorigins.com/collections/green-home/products/soap-pack-of-4",
        "https://www.boldenusa.com/products/spf-30-brightening-moisturizer",
        "https://www.kinlo.com/product/golden-rays-sunscreen-spf-50/?gclid=CjwKCAjw3cSSBhBGEiwAVII0Z8kCQFQH4bUr9ruzHN7xRfs-Y55J_rA3UB_DKxwFzN_Lmr6PYXYztxoCPy4QAvD_BwEhttps://www.kinlo.com/product/golden-rays-sunscreen-spf-50/?gclid=CjwKCAjw3cSSBhBGEiwAVII0Z8kCQFQH4bUr9ruzHN7xRfs-Y55J_rA3UB_DKxwFzN_Lmr6PYXYztxoCPy4QAvD_BwE",
        "https://www.goddessgarden.com/product/daily-spf-50-mineral-sunscreen-lotion-6-oz/",
        "stasherbag.com/products/reusable-silicone-stand-up-mini-bag",
        "https://www.lunchskins.com/collections/snack-bags/products/reusable-zip-snack-bag-navy-dot",
    ]

    for(var i = 0; i < product_assoc.length; i++) {
        products.push({
            product_assoc: product_assoc[i],
            name: names[i],
            score: scores[i],
            price: prices[i],
            imageLink: imageLinks[i],
            link: links[i],
        });
    }

} 

app.get('/search', (req, res) => {

    var search_res = req.query.query;
    products.filter(obj => {
        return obj.product_assoc == search_res;
    })
    res.json(products)
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})