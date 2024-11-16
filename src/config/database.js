const mongoose = require('mongoose');
const connectDB = async ()=> {
    await mongoose.connect("mongodb+srv://vinayMotapalukula:yuYzZrfRXFnv5Fyy@nodejsproject.cx6rw.mongodb.net/project10");
    useNewUrlParser: true
    useUnifiedTopology : true
    connectTimeoutMS: 10000
 };
 
 module.exports = connectDB;
 