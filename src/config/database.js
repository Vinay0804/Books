const mongoose = require('mongoose');
const connectDB = async ()=> {
    await mongoose.connect("mongodb+srv://vinayMotapalukula:yuYzZrfRXFnv5Fyy@nodejsproject.cx6rw.mongodb.net/project10")
 };
 
 module.exports = connectDB;
 