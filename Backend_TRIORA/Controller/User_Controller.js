import User from "../Model/User_Model.js";
import bcryptjs from "bcryptjs";
export const signup=async(req,res)=>{
    try{
        const{firstname,middlename,lastname,email,password}=req.body;
        const user=await User.findOne({email})
        if(user){
            return res.status(400).json({message:"USER ALREADY EXISTS!"})
        }
        const hashpassword=await bcryptjs.hash(password,10);
        const createdUser=new User({
            firstname:firstname,
            middlename:middlename,
            lastname:lastname,
            email:email,
            password:hashpassword,
        })
        await createdUser.save()
        res.status(201).json({message:"USER CREATED SUCCESSFULLY!"})
    } catch(error){
        console.log("Error : "+error.message)
        res.status(500).json({message:"OOPS! INTERNAL SERVER ERROR."})

    }
};
export const login=async(req,res)=>{
    try{
        const{email,password}=req.body;
        const user=await User.findOne({email});
        const isMatch=await bcryptjs.compare(password,user.password)
        if(!user || !isMatch){
            return res.status(400).json({message:"INVALID CREDENTIALS!"});
        }
        else{
            res.status(200).json({message:"VALID CREDENTIALS!"});
        }
    }
    catch(error){
        console.log("ERROR : "+error.message);
        res.status(500).json({message:"OOPS! INTERNAL SERVER ERROR."});
    }
};
