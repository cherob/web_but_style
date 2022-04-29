const express = require('express')
// const cors = require('cors')
// const bodyParser = require('body-parser')
// require('dotenv').config()
// const ObjectId = require("mongodb").ObjectId;

const path = require('path')

const app = express()
// app.use(cors())
const port = process.env.PORT || 5005;

app.set(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    res.sendFile(path.resolve('./public/index.html'))
})

app.listen(port, () => {
    console.log(`App listening at localhost:${port}`);
})