const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./models')
const path = require('path')
const PORT = process.env.PORT || 3001

// app.use(bodyParser.json())
// app.use(cors())
// app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, 'client/build')))

const Users = require('./routes/Users')
app.use('/',Users)

let syncOptions = {force: false}

if(process.env.NODE_ENV === 'test'){
    syncOptions.force = true
}

db.sequelize.sync(syncOptions).then(function(){
    app.listen(PORT, function() {
    console.log("Connected to Database!")
    console.log(`:earth_americas:  ==> API Server now listening on PORT ${PORT}!`)
  })
})  