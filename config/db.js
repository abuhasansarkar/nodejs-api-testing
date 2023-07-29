import mongoose from 'mongoose';

export const DBConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected`.bgCyan.black);
  } catch (error) {
    console.log(`Database is not connected`.bgRed.black);
  }
};
