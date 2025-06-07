import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  try {
    const MONGO_URI =
      process.env.MONGO_URI || "mongodb://localhost:27017/myapp";
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};
