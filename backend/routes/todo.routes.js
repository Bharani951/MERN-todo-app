// performing CRUD operations on todo items
import express from 'express';
import Todo from '../models/todo.model.js';

const router = express.Router();// defining a router to handle different routes for CRUD operations
//get all todos
router.get('/', async (req, res) => {
    try{
        const todos = await Todo.find(); // Fetch all todo items from the database
        res.json(todos); // Send the fetched todos as a JSON response
    } catch (error) {
        res.status(500).json({ message:error.message }) // Handle any errors that occur during the fetch
    }
})

//add a new todo
router.post('/', async (req, res) => {
    const todo = new Todo({
        text: req.body.text, // Get the text from the request body(from client)
        
    });

    try {
        const newTodo = await todo.save(); // Save the new todo item to the database
        res.status(201).json(newTodo); // Send the saved todo as a JSON response with status 201
        // 201 is successful creation status code
    } catch (error) {
        res.status(400).json({ message: err.message }); // Handle any errors that occur during saving
    // 400 is bad request status code
    }
})

//update a todo9 TEXT  and or completeed)
router.patch('/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id); // Find the todo item by ID from the request parameters(from client)
        if (!todo) return res.status(404).json({ message: 'Todo not found' }); // If not found, return 404
        //404 is not found status code
        if(req.body.text!=undefined){
            todo.text = req.body.text; // Update the text if provided in the request body
        }

        const updatedTodo = await todo.save(); // Save the updated todo item to the database
        res.json(updatedTodo); // Send the updated todo as a JSON response
    } catch (error) {
        res.status(400).json({ message: err.message }); // Handle any errors that occur during updating
    }
});

//delete a todo
router.delete('/:id', async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id); // Find the todo item by ID from the request parameters(from client)
        res.json({ message: 'Todo deleted successfully' }); // Send a success message as a JSON response
    } catch (error) {
        res.status(500).json({ message: err.message }); // Handle any errors that occur during deletion
    }
}); 
export default router; // Export the router to be used in other parts of the application