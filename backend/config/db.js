import mongoose from "mongoose";    // to establish a connection to MongoDB



export const connectDB = async () => {
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI); //mongo_URI is the environmental variable
        console.log(`MongoDB connected: ${conn.connection.host}`); // Log the connection host
    }catch(error){
        console.log(error); // Log any error that occurs during connection
        process.exit(1); // Exit the process with a failure code
    }
}
