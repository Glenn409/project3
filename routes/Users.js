const express = require('express')
const app = express.Router()

const User = require('../models/User')

app.post('/register',(req,res) => {
    const newUser = {
        username: req.body.username,
        password: req.body.password
    }
})