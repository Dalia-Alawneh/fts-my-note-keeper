import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.DB_URI)
    console.log(`✅ MongoDB Connected to ${connection.host}`);
  } catch (e) {
    console.error(`❌ Error connecting to MongoDB: ${e.message}`);
  }
}

export default connectDB