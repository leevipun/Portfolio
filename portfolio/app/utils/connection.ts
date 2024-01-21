import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
  if (mongoose.connection.readyState) {
    return;
  }
  try {
    await mongoose.connect(MONGODB_URI as string);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
};

export default connect;
