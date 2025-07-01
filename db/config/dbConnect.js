import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("❌ MONGODB_URI is not defined in .env");
}

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("✅ Already connected to MongoDB.");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI); // 👈 no extra options needed
    console.log("✅ MongoDB Connected Successfully.");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    process.exit(1); // optional
  }
};

export default dbConnect;
