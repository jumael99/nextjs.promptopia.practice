import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", ture);
  if (isConnected) {
    console.log("MongoDB is already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      userUnifiedTopology: true,
    });

    isConnected = true;
    console.log("MongoDB connected");
  } catch (e) {
    console.log(e);
  }
};
