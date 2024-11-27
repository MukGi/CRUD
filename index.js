const express = require('express')
const app = express()
const PORT = 3000;



app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT} `);
})

app.post('/',(req,res)=>{
  res.send('CREATE')
})

app.get('/', (req, res)=>{
  res.send('READ');
})

app.put('/',(req,res)=>{
  res.send('UPDATE')
}

)
app.delete('/',(req, res)=>{
  res.send('DELETE')
})