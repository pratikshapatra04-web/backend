console.log("Pratiksha");
require('dotenv').config()
const express = require('express');
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twiter',(req,res)=> {
    res.send('hello  twiter')
})
app.get('/login',(req,res)=>{
    res.send("please login tothe system")
})
app.get('/youtube',(req,res)=>{
    res.send('welcome to the youtube')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})