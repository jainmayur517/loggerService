const express = require('express');
const router = express.Router();
const mailService=require('../controller/mailService')


router.post('/',async(req,res)=>{
    await mailService();
    return res.status(201).json({ message: 'mailed' });
})

module.exports = router;