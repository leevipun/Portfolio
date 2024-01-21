import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

const connect = async () => {
  if (mongoose.connection.readyState) {
    return;
  }
  try {
    await mongoose.connect(
      'mongodb+srv://leevipuntanen2:cq2IbTQFJ8CHtwDU@portfolio.s7pmwxf.mongodb.net/Projects?retryWrites=true&w=majority'
    );
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
};

export default connect;
