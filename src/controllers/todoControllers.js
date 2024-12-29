import { Todo } from './../db/models/todo.models.js';


// Get all todos
const getAllTodos = async (req, res) => {
    try {
        const result = await Todo.find();
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Get a single todo by ID
const getOneTodos = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Todo.findById(id);
        if (!result) {
            return res.status(404).send({ message: "Todo not found" });
        }
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Create a single todo
const postOneTodos = async (req, res) => {
    try {
        const { title, desc, isCompleted } = req.body;
        const newTodo = new Todo({ title, desc, isCompleted });
        const result = await newTodo.save();
        res.status(201).send(result);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

// Create multiple todos
const postManyTodos = async (req, res) => {
    try {
        const todos = req.body; // Array of todo objects
        const result = await Todo.insertMany(todos);
        res.status(201).send(result);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

// Delete a single todo by ID
const deleteOneTodos = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Todo.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).send({ message: "Todo not found" });
        }
        res.status(200).send({ message: "Todo deleted successfully" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Delete multiple todos by IDs
const deleteManyTodos = async (req, res) => {
    try {
        const ids = req.body.ids; // Array of todo IDs
        const result = await Todo.deleteMany({ _id: { $in: ids } });
        res.status(200).send({ message: `${result.deletedCount} todos deleted successfully` });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Update a single todo by ID
const updateOneTodos = async (req, res) => {
    try {
        const id = req.params.id;
        const updates = req.body;
        const result = await Todo.findByIdAndUpdate(id, updates, { new: true });
        if (!result) {
            return res.status(404).send({ message: "Todo not found" });
        }
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

// Update multiple todos
const updateManyTodos = async (req, res) => {
    try {
        const updates = req.body; // Array of objects containing _id and updates
        const bulkOps = updates.map((update) => ({
            updateOne: {
                filter: { _id: update._id },
                update: { ...update },
            },
        }));

        const result = await Todo.bulkWrite(bulkOps);
        // console.log(result);

        res.status(200).send({ message: `matched ${result.matchedCount} todo(s) and ${result.modifiedCount} todos updated successfully` });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};


export { getAllTodos, getOneTodos, postManyTodos, postOneTodos, deleteManyTodos, deleteOneTodos, updateOneTodos, updateManyTodos };
