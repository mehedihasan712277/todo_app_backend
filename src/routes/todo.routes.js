import { Router } from "express";
import { deleteManyTodos, deleteOneTodos, getAllTodos, getOneTodos, postManyTodos, postOneTodos, updateManyTodos, updateOneTodos } from "../controllers/todoControllers.js";

const routes = Router();

routes.get("/todos", getAllTodos);
routes.get("/todo/:id", getOneTodos);
routes.post("/todo", postOneTodos);
routes.post("/todos", postManyTodos);
routes.delete("/todo/:id", deleteOneTodos);
routes.delete("/todos", deleteManyTodos);
routes.put("/todo/:id", updateOneTodos);
routes.put("/todos", updateManyTodos);

export default routes
