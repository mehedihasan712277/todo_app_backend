import { File } from "../db/models/file.models.js";


const uploadFile = async (req, res) => {
    try {
        // const { fieldname, originalname, encoding, mimetype, destination, filename, path, size } = req.file;
        const newTodo = new File(req.file);
        const result = await newTodo.save();
        res.status(201).send(`${result.originalname} : http://localhost:4000/${result.path}`);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

export { uploadFile }