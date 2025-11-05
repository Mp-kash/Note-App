import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MONGODB CONNECTED SUCCESSFULLY!");
  } catch (err) {
    console.log(err, "Error connecting to Mongodb");
    process.exit(1); //exit with failure
  }
};
