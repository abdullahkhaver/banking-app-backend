import mongoose from "mongoose";

export async function connectDB(): Promise<void> {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI not set");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      autoIndex: false, 
    });

    console.log(" MongoDB connected");
  } catch (err) {
    console.error(" MongoDB connection failed");
    process.exit(1);
  }
}
