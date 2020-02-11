const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))

const Users = require('./routes/Users')
app.use('/users',Users)

app.listen(port, () =>{
    console.log('Running on port: '+ port) 
})