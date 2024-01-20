import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  instagram: {
    type: String,
    required: false,
  },
  website: {
    type: String,
    required: true,
  },
  stack: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Project ||
  mongoose.model('Project', ProjectSchema);
