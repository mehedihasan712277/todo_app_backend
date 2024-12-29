import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})
import mongoose from "mongoose";

const URI = `mongodb+srv://mehedi:${process.env.DB_PASS}@cluster0.i0wokhn.mongodb.net/todoDB?retryWrites=true&w=majority&appName=Cluster0`


const connectDB = async () => {
    try {
        await mongoose.connect(URI)
        console.log("database connected successfully");
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

export { connectDB }


