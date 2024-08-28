import { connect } from 'mongoose';

export const connectDB = async () => {
  try {
    await connect("mongodb://localhost:27017/books");
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.log("Error while connecting to DB: " + error.message);
    process.exit(1);
  }
}