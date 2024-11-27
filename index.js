const express = require('express')
const app = express()
app.use(express.json)
const PORT = 3000;
const mongoose = require('mongoose')

var stuff = require('./stuff');

//Serve Port
app.listen(PORT, ()=>{
  console.log(`Server is running on ${PORT} `);
})

// Connecting to the database
mongoose.connect("mongodb+srv://giftmukolo:Trx*08007@crud-cluster.sgyrd.mongodb.net/?retryWrites=true&w=majority&appName=CRUD-cluster")
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

//Stuff Route
app.use('/stuff', stuff)

//Product page
app.post('/api/products',(req,res)=>{
  res.send(req.body);
});