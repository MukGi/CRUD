const express = require("express")
const router = express.Router()
const Produ = require('./Model/product.model');

router.get('/',(req,res)=>{
    res.send("You are on the product page")
})

router.get('/watches',(req,res)=>{
    req.body
    res.send(req.body)
})

//Product page
router.post('/Food-and-Drinks', async (req,res)=>{
    try {
    //   const product = await Product.create(req.body);
    //   res.status(200).json(product);
    res.send(req.body)
    } catch (error) {
      res.send(500).json({message: error.message})
    }
  });
module.exports = router;
