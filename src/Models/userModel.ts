import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    fullName:{
        type:String,
        require:[true,'name is require'],
        unique:true
    },
    email:{
        type:String,
        require:[true,'email is require'],
        unique:true
    },
    password:{
  type:String,
 require:true
    }
,
date:{
    type:Date,
    default:Date.now
},
isVerified:{
    type:Boolean,
    default:false
},
verfiyToken: String,
verfiyTokenExpire: Date,
},
{
collection:'users'
}
)

const user=mongoose.models.users||mongoose.model('users',userSchema)

export default user