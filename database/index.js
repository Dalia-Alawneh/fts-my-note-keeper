import mongoose from 'mongoose';

const connectDB = async()=>{
    return await mongoose.connect('mongodb://localhost:27017')
}

export default connectDB