const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    bookName :{
        type : String,
        required : true,
        minLength : 3,
        maxLength : 75
    },
    author :{
        type : String,
        required : true,
        minLength : 3,
        maxLength:50
    },
    description :{
        type : String,
        default : "This is a description of the book",
        maxLength:150
    },
    pages_count :{
        type : Number
    },
    publicationYear :{
        type : Number
    },
    language :{
        type : String,
        validate(value){
            if(!["english","spanish","hindi"].includes(value)){
                throw new Error("language is not valid ")
            }
        }
    }
},{
    timestamps:true
})

const Book = mongoose.model("Book",bookSchema)

module.exports = Book;