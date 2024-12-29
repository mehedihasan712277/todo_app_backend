import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    fieldname: String,
    originalname: String,
    encoding: String,
    mimetype: String,
    destination: String,
    filename: String,
    path: String,
    size: Number
}, { timestamps: true })

export const File = mongoose.model("Files", fileSchema)