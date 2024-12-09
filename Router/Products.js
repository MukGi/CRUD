const express = require("express")
const router = express.Router()

router.get('/',(req,res)=>{
    res.send("You are on the product page")
})

router.get('/watches',(req,res)=>{
    req.body
    res.send(req.body)
})

module.exports = router;
