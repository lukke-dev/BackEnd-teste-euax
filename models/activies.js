import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const activitySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  idProject: {
    type: Number,
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
  finished: {
    type: Boolean,
    default: false
  }
});

autoIncrement.initialize(mongoose.connection);
activitySchema.plugin(autoIncrement.plugin, 'activies');

const postActivity = mongoose.model('activies', activitySchema);
export default postActivity;
