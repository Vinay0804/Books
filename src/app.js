const express = require('express');
const app = express();


app.use("/",(req,res)=>{
    res.send("Hi,welcome tt to the books world")
})



app.listen(3000,()=>{
    console.log("Server listing successfully on port 3000")
})