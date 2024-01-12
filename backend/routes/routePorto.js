const express = require('express');
const semua = express.Router();
const {getData, addData} = require('../controller/porto')


semua.route('/').get(async (req,res) => {
    res.send(await getData())
})

semua.route('/').post(async (req, res) => {
    const {pengalaman, durasi} = req.body;
    const data = {
        pengalaman,
        durasi
    }
    res.send(await addData(data))
})

module.exports = semua