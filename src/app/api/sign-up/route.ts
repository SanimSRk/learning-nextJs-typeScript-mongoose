
import bcrypt from 'bcryptjs'
import { connectDb } from "@/lib/connectDb";
import user from "@/Models/userModel";
import { NextRequest, NextResponse } from "next/server";
export const POST=async(request:NextRequest)=>{
    try {
      await connectDb()
        const userInfo=await request.json()
       const {fullName,email,password}=userInfo
       const users=await user.findOne({email})
       if(users){
        return NextResponse.json({message:'user alredy exist',status:400})
       }
       const hashpassword =await bcrypt.hash(password, 10);
       const newUsers=new user({fullName,email,password:hashpassword})
       await newUsers.save();
        return NextResponse.json(userInfo)
    } catch (error:any) {
      return NextResponse.json({message:error.message},{status:500})  

    }
}