## Inspiration

According to the UN [https://interactive.unwomen.org/multimedia/photo/climatechange/en/index.html], women are affected the most by climate-based natural disasters, which worsens gender inequalities and leave women susceptible to higher rates of malnutrition, violence, and more. [https://www.unwomen.org/en/news/stories/2020/2/compilation-small-actions-big-impact-for-generation-equality]

Nonetheless, even as individuals, we can take small steps towards mitigating climate change, including picking eco-friendly products to buy and use. Unfortunately, most consumers remain unaware of tens of product offerings that aim to accomplish this, largely because the most popular ecommerce platforms often prioritize a product’s popularity or price, without much consideration to sustainability and other company practices (gender equality, ethical sourcing, etc.). That’s why we decided to create EcoPower, a tool that collates products that support these values, allowing consumers to make informed decisions on the brands they support based on how they empower marginalized communities and support sustainability.

## What it does
Finding products that are sustainable, equitable, and support marginalized communities is incredibly simple with our tool. Enter keywords in the search bar relating to the product you want to buy (soap, jeans, sunscreen, etc), and our search engine will pull up a list of products whose brands most support our core ideas of sustainability and empowerment. This list of results is sorted by the product’s score out of 100 which is rated based on our proprietary formula for calculating alignment with the aforementioned values as well as the general quality of the product. Additionally, each item also lists price per unit, an image, and a link to purchase the product.

## How we built it
We built the website from scratch using `React-typescript` (with `Styled components` and `React-icons`) and `Node.js` (via `Express`). Original components include the search bar, each item in the list of results, and the navigation bar. The backend exposes a search endpoint to the frontend, which sends a get request each time the user submits a query. The backend then finds the optimal matches by checking for keyword occurrences and returns them to the frontend.


## Challenges we ran into
Some challenges we encountered included our general unfamiliarity with React. Although Eddie came in with some experience in Javascript, Srilakshmi and Ravi had little experience with this type of web development programming. It was also a little challenging to find quality products that align with our values.

## Accomplishments that we're proud of
We were able to quickly learn React and Typescript sufficiently to implement the frontend and backend. The search endpoint is also quite fast, and the frontend is aesthetically pleasing.

## What we learned
We learned about many challenges facing women in the consumer space. This included how many large brands do not promote or support equity, while many others have poor environmental practices that can negatively affect women and minorities. Through doing this project, we have increased our knowledge about the inequitable practices in the ecommerce space.

Technical skills that we learned/improved on included: Typescript, React, Node.js, Express.


## What's next for EcoPower
In the future, we would also like to add further functionality that web scrapes the Internet to look up these sustainable products instead of manual entry like we have now, as well as thought-out product scoring formula. We would also add a feature allows users to subscribe to our newsletter which, using artificial intelligence, would recommend certain products based on user preferences and purchase history. We would also have a *Contact Us* page for feedback, and potentially an option in which a company’s marketing staff can submit a request to be featured on the website.