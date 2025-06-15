import mongoose from "mongoose";
// import library to interact with MongoDB using Mongoose
const todoSchema = new mongoose.Schema(
  {
    text: {
      //task to do is the text schema
      type: String,
      reqired: true,
    },
    completed: {
      //completed is the boolean schema
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
); //timestamps schema to track creation and update time

const Todo = mongoose.model("Todo", todoSchema); //creating a model named Todo using the todoSchema
export default Todo; //exporting the Todo model for use in other parts of the application
// This code defines a Mongoose schema and model for a Todo application.
