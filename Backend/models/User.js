import mongoose from "mongoose";

const userSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,
            unique:true,
            trim:true,
            require:true
        },

        password:{
            type:String,
            require:true
        },
        provider: {
             type: String,
             enum: ["email", "google"],
             default: "email",
         },
        providerId: { type: String }
        
    },{timestamps:true}
)


const User = mongoose.model('User', userSchema);

export default User;