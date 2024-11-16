const validatebook = (req) =>{
    const {bookName,author} =  req.body;

    if(!bookName || !author){
        throw new Error("Please enter required inputs")
    }
    else if(bookName.length<3){
        throw new Error("Please enter a valid bookName")
    }
    
}

const validateUpdates = (req)=>{
   const AllowedUpdates = ["description","language", "pages_count"]

   const isUpdatesAllowed = Object.keys(req.body).every((field)=>AllowedUpdates.includes(field))


   return isUpdatesAllowed
}
module.exports = {validatebook, validateUpdates}
