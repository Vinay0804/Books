const express = require('express');
const connectDB = require('./config/database')
const app = express();
const Book = require("./models/books")
const {validatebook,validateUpdates} = require('./utils/validate');

app.use(express.json())


app.post("/book", async(req,res)=>{
    try{
        validatebook(req);
        const {bookName,author,description,language,pages_count, publicationYear} = req.body;
        const book = new Book({
            bookName,
            author,
            description,
            language,
            pages_count,
            publicationYear
        })
        await book.save();
        res.send("Book added successfully")
    }
    catch(err){
        res.status(400).send(err.message);
    }
})

app.patch("/book/:id",async (req,res)=>{
    try{
        const id = req.params.id;
    if(!validateUpdates(req)){
        throw new Error("Updates are not valid")
    }
    const data = req.body;
    const book = await Book.findByIdAndUpdate({_id:id},data,{
        runValidators:true
    });

    console.log(book);
    res.send("Book updated successfully")
}
   catch(err){
    res.status(400).send("Book Update failed: " + err.message)
   }
})

app.delete("/book/:id",async(req,res)=>{
    try{const id = req.params.id;
    const book = await Book.findByIdAndDelete({_id:id})
    if(!book){
        throw new Error("Book not found")
    }
    res.send("book deleted successfully")}
    catch(err){
        res.status(400).send(err.message)
    }
})
app.get("/book/profile/:id",async(req,res)=>{

    try{const id = req.params.id;
    const book = await Book.findById({_id:id})
    if(!book){
        throw new Error("Book not found")
    }
    res.send(book)}
    catch(err){
        res.status(400).send(err.message)
    }
})


connectDB().then(()=>{
    console.log("Database connection established");
    app.listen(3000,()=>{
        console.log("3000 port is listening")
    })
}).catch((err)=>{
    console.log("Database is not connected "+err.message);
});
