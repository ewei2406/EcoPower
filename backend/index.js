const express = require('express')
const app = express()


app.get('/search', (req, res) => {
    res.send("AWODUYAWDAWD")
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})