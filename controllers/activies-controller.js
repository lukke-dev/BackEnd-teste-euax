import ActivityModel from '../models/activies.js'

export const storeActivity = async (req, res) => {
  const activity = req.body;

  const newActivity = new ActivityModel(activity);
  try {
    await newActivity.save();
    res.status(201).json(newActivity);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};



export const getActiviesByIdProject = async (req, res) => {
  try {
    const activies = await ActivityModel.find({idProject: req.params.id}).exec();
    res.status(200).json(activies);
  } catch (error) {
    res.status(404).json({ errors: error.message });
  }
};


export const delActivies = async (req, res) => {
  try {
    await ActivityModel.deleteOne({ _id: req.params.id });
    res.status(201).json('Activies deleted Successfully');
  } catch (error) {
    res.status(201).json({ errors: error.message });
  }
};

export const delActiviesbyProject = async (req, res) => {
  try {
    await ActivityModel.deleteOne({ idProject: req.params.id });
    res.status(201).json('Activies deleted Successfully');
  } catch (error) {
    res.status(201).json({ errors: error.message });
  }
};

export const editActivityState = async (req, res) => {
  let activity = await ActivityModel.findById(req.params.id);
  try {
  if(activity.finished) {
    await ActivityModel.updateOne({ _id: req.params.id }, {finished: false});
  }else {
    await ActivityModel.updateOne({ _id: req.params.id }, {finished: true});
  }
    res.status(201).json("Altered State");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
