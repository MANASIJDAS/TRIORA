import mongoose from "mongoose";
const userSchema=mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    middlename:{
        type:String,
    },
    lastname:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
   })
    const User=mongoose.model("User",userSchema);
   export default User;
