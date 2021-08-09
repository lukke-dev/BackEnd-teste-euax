import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const projectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,

  },
  endDate: {
    type: Date,
    required: true,
  },
});

autoIncrement.initialize(mongoose.connection);
projectSchema.plugin(autoIncrement.plugin, 'projects');

const postProject = mongoose.model('projects', projectSchema);
export default postProject;
