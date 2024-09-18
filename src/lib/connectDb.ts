
import mongoose from "mongoose";
export const connectDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL!)
        const connection=mongoose.connection;
        connection.on('connected',()=>{
         console.log('mongodb connected success fully')
        })
        connection.on('error',(error)=>{
console.log('mongodb connection is filed',error)
process.exit(1)
        })

    } catch (error:any) {
        console.log('mongoose connection problem', error)
    }
}