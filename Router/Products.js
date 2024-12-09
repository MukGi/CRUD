const express = require("express")
const router = express.Router()
const Product = require('../Model/product.model');

router.get('/',(req,res)=>{
    res.send("You are on the product page")
})

router.get('/watches',(req,res)=>{
    req.body
    res.send(req.body)
})

router.delete('/',(req,res)=>{
    res.send('Product deleted')
})

//Product page
router.post('/Food-and-Drinks', async (req,res)=>{
    try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
    } catch (error) {
      res.send(500).json({message: error.message})
    }
  });

//Delete all food and drinks
router.delete('/Food-and-Drinks', async (req,res)=>{
    try {
    const product = await Product.deleteMany({});
    res.status(200).json(product);
    } catch (error) {
      res.send(500).json({message: error.message})
    }
  });

  //GET All food and drinks
router.get('/Food-and-Drinks',async (req,res)=>{
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    } catch (error) {
        
    }
})

router.get('/Food-and-Drinks/:id',async (req,res)=>{
    try {
        const{id} = req.params;
        const product = await Product.findById(id);
        // const product = await Product.find({
        //     name:"Water Bottle"
        // })
        res.status(200).json(product)
    } catch (error) {
        res.send(500).json({message: error.message})
    }
})

module.exports = router;
