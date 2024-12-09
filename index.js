//Imports
const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
require('dotenv/config')
const PORT = 3000;

//Product schema
const Product = require('./Model/product.model');
//Import Route
const productsRoute = require('./Router/Products')

//Serve Port
app.listen(PORT, ()=>{
  console.log(`Server is running on ${PORT} `);
})

// Connecting to the database
mongoose.connect(process.env.SHOP_URL)
.then(()=>{
  console.log("Connected to Database")
  
})
.catch(()=>{
  console.log("Connection Failed")
})

//CREATE in CRUD
app.post('/',(req,res)=>{
  res.send('CREATE')
})
//READ in CRUD
app.get('/', (req, res)=>{
  res.send('READ');
})

//UPDATE in CRUD
app.put('/',(req,res)=>{
  res.send('UPDATE')
}

//DELETE in CRUD
)
app.delete('/',(req, res)=>{
  res.send('DELETED')
})

//Product Route
app.use('/Product', productsRoute);

