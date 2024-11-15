const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName :{
        type : String,
        required : true,
        minlength
    },
    author :{
        type : String,
        required : true
    },
    description :{
        type : String,
        default : "This is a description of the book"
    },
    pages_count :{
        type : Number
    },
    publicationYear :{
        type : Number
    }
})

const Book = mongoose.model("Book",bookSchema)

module.exports = Book;