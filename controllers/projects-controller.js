import ProjectModel from '../models/projects.js'

export const storeProject = async (req, res) => {
  const project = req.body;
  const newProject = new ProjectModel(project);
  try {
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getProjects = async (req, res) => {
  try {
    const activies = await ProjectModel.find();
    res.status(200).json(activies);
  } catch (error) {
    res.status(404).json({ errors: error.message });
  }
};

export const delProjects = async (req, res) => {
  try {
    await ProjectModel.deleteOne({ _id: req.params.id });
    res.status(201).json('Activies deleted Successfully');
  } catch (error) {
    res.status(201).json({ errors: error.message });
  }
};
