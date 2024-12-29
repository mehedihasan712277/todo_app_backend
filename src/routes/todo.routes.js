import { Router } from "express";
import { deleteManyTodos, deleteOneTodos, getAllTodos, getOneTodos, postManyTodos, postOneTodos, updateManyTodos, updateOneTodos } from "../controllers/todoControllers.js";
import { upload } from "../middlewares/multer.middleware.js";
import { uploadFile } from "../controllers/file.controller.js";

const routes = Router();

routes.get("/todos", getAllTodos);
routes.get("/todo/:id", getOneTodos);
routes.post("/todo", postOneTodos);
routes.post("/todos", postManyTodos);
routes.delete("/todo/:id", deleteOneTodos);
routes.delete("/todos", deleteManyTodos);
routes.put("/todo/:id", updateOneTodos);
routes.put("/todos", updateManyTodos);
routes.post("/file", upload.single("file"), uploadFile);

export default routes
