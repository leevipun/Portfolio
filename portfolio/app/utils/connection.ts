import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

const connect = async () => {
  if (mongoose.connection.readyState) {
    return;
  }
  try {
    await mongoose.connect(MONGO_URI as string);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
};

export default connect;
