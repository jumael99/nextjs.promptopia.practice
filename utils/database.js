import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true); // Fixed typo here
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
    });

    isConnected = true;
    console.log("MongoDB connected🔥🔥🔥🔥");
  } catch (e) {
    console.log("Error connecting to MongoDB:", e);
  }
};
