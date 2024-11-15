const express = require('express');
const connectDB = require('./config/database')
const app = express();
const Book = require("./models/books")

app.use(express.json())


app.post("/book", async(req,res)=>{
    const book = new Book(req.body)

    try{
        await book.save();
        res.send("Book added successfully")
    }
    catch(err){
        res.status(400).send("Book failed to add")
    }
})



connectDB().then(()=>{
    console.log("Database connection established");
    app.listen(3000,()=>{
        console.log("3000 port is listening")
    })
}).catch((err)=>{
    console.error("Database is not connected");
});
