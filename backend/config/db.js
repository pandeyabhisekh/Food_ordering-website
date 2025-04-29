import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://abhisekhaalo:Abhisekh123@backend.mkap2.mongodb.net/?retryWrites=true&w=majority&appName=Backend').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.