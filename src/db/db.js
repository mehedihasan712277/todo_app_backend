import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})
import mongoose from "mongoose";

//atlas uri
const URI = `mongodb+srv://mehedi:${process.env.DB_PASS}@cluster0.i0wokhn.mongodb.net/todoDB?retryWrites=true&w=majority&appName=Cluster0`

//satisfyhost uri
// const URI = `mongodb://mdmehedi_todousr:mdMEHEDIhasan12@51.79.201.174/mdmehedi_tododb?authSource=admin`


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


