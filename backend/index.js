const express = require('express')
const app = express()

app.use(express.static('./build'))

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
        "Bag",
        "Jeans",
        "Jeans",
        "Jeans"
    ]
    var names = [
        "Lush: Goddess Bar Soap", 
        "Fifth Origins: Dream Pack", 
        "Bolden USA: SPF 30 Brightening Moisturizer",
        "Kinlo: Golden Rays Golden Rays Sunscreen SPF 50+ Melanated Tint",
        "Goddess Garden Organics: Daily SPF 30 Mineral Sunscreen Lotion",
        "Stasher: Stand-Up Mini Bag",
        "Lunchskins: Snack Bag",
        "Organic Basics: Circular Denim-Chino",
        "Able: The Lina High Rise",
        "DL1961: Patti Straight: High Rise Vintage"
    ];
    var scores = [
        95,
        90,
        77,
        70,
        97,
        90,
        93,
        80,
        80,
        90
    ]
    var prices = [
        1250,
        825,
        2800,
        1999,
        599,
        1799,
        599,
        13500,
        3800,
        20900,
    ]
    var descriptions = [
        "A Lush product is so much more than it seems. It’s the sum of all the relationships, materials, creativity, labor and life that made it possible.",
        "A pack filled with the goodness of all our Himalayan handmade soaps to kick-start your daily ritual.",
        "Our SPF 30 face moisturizer combines broad spectrum (UVA/UVB) protection with Vitamin C, a powerhouse antioxidant known for brightening skin tone, and diminishing signs of sun damage.",
        "Our mineral-based, non-chemical sunscreen mattifies skin without leaving a white cast for a natural, flawless finish.",
        "Goddess Garden – Daily SPF 30 Mineral Sunscreen Lotion – Sensitive Skin, Reef Safe, Sheer Zinc, Broad Spectrum, Water Resistant, Non-Nano, Vegan, Leaping Bunny Cruelty-Free – 6 oz.",
        "Unlike other reusable bags and bowls, Stasher's are leak free with a patented Pinch-Loc® seal and made with incredibly durable, food-grade platinum silicone",
        "Our dishwasher-safe reusable snack bags are the perfect alternative to single-use plastic bags",
        "A nice pair of jeans",
        "This rise should sit at your true waist, feel snug, and hold you in. And, contrary to what you may think, this fit is actually more comfortable and flattering!",
        "Keys is bright, chatty mid indigo wash. It features brushed gold hardware, khaki stitching and an inseam slit at the clean hem."
    ]

    var imageLinks = [
        "https://www.lushusa.com/dw/image/v2/BDMQ_PRD/on/demandware.static/-/Sites-lushcosmetics-export/default/dw172edf6f/images/product/02259.jpg?sw=450&sh=450",
        "https://cdn.shopify.com/s/files/1/0065/5769/6088/products/FO_soap_4pack_2_380dbdea-dfc9-4f3d-93c1-08f54577db40_900x.jpg?v=1613478250",
        "https://cdn.shopify.com/s/files/1/0658/8769/products/BoldenBrighteningMoisturizerSPF30Tube_1200x.jpg?v=1617397389",
        "https://www.kinlo.com/wp-content/uploads/2021/10/Kinlo_Golden-Rays_1900x1787-min.jpg",
        "https://www.goddessgarden.com/wp-content/uploads/2020/08/DAILY-SPF-50-MINERAL-SUNSCREEN-LOTION-6-oz.-Front-2000px_resize.jpg",
        "https://cdn.shopify.com/s/files/1/2237/5935/products/SU_Mini_Coral_OW_Empty_2800_1000x.jpg?v=1649135060",
        "https://cdn.shopify.com/s/files/1/2358/3785/products/bluedit_2000x.jpg?v=1565297995",
        "https://cdn.shopify.com/s/files/1/0081/4255/3199/products/ymecxmkieydolmpjx3jk_801x1100_crop_center.jpg?v=1610976763",
        "https://cdn.shopify.com/s/files/1/1136/2606/products/F18_High_Rise_Lina_Front_Reedit_2f77a9eb-7f07-4bf8-910c-16797b56937a_2048x2048.jpg?v=1615221302",
        "https://cdn.shopify.com/s/files/1/2397/3099/products/13244_Patti_Keys_295_Revised_540x.jpg?v=1643729219",

    ]
    var links = [
        "https://www.lushusa.com/shower/bar-soap/goddess/9999902259.html",
        "https://www.fifthorigins.com/collections/green-home/products/soap-pack-of-4",
        "https://www.boldenusa.com/products/spf-30-brightening-moisturizer",
        "https://www.kinlo.com/product/golden-rays-sunscreen-spf-50/?gclid=CjwKCAjw3cSSBhBGEiwAVII0Z8kCQFQH4bUr9ruzHN7xRfs-Y55J_rA3UB_DKxwFzN_Lmr6PYXYztxoCPy4QAvD_BwEhttps://www.kinlo.com/product/golden-rays-sunscreen-spf-50/?gclid=CjwKCAjw3cSSBhBGEiwAVII0Z8kCQFQH4bUr9ruzHN7xRfs-Y55J_rA3UB_DKxwFzN_Lmr6PYXYztxoCPy4QAvD_BwE",
        "https://www.goddessgarden.com/product/daily-spf-50-mineral-sunscreen-lotion-6-oz/",
        "https://www.stasherbag.com/products/reusable-silicone-stand-up-mini-bag",
        "https://www.lunchskins.com/collections/snack-bags/products/reusable-zip-snack-bag-navy-dot",
        "https://us.organicbasics.com/products/womens-circular-denim-chino?variant=32228480057455#modal-full",
        "https://www.ableclothing.com/collections/denim/products/the-lina-high-rise-1",
        "https://www.dl1961.com/collections/women-straight-leg-jeans/products/patti-straight-vintage-keys"
    ]

    for(var i = 0; i < product_assoc.length; i++) {
        products.push({
            product_assoc: product_assoc[i],
            description: descriptions[i],
            name: names[i],
            score: scores[i],
            price: prices[i],
            imageLink: imageLinks[i],
            link: links[i],
        });
    }

} 

app.get('/search', (req, res) => {
    var search_res = req.query.searchTerm.toUpperCase();
    console.log(search_res)
    const found = products.filter(obj => 
        obj.name.toUpperCase().includes(search_res) || 
        obj.description.toUpperCase().includes(search_res) ||
        obj.product_assoc.toUpperCase().includes(search_res))
    console.log(found)
    res.json(found)
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})