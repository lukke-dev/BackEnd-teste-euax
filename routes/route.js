import express from 'express';
import { storeProject, getProjects, delProjects } from '../controllers/projects-controller.js'
import { storeActivity, delActivies, editActivityState, getActiviesByIdProject, delActiviesbyProject} from '../controllers/activies-controller.js'
const router = express.Router();

router.get('/', getProjects);
router.post('/store', storeProject)
router.delete('/del/:id', delProjects);


router.get('/activies/:id', getActiviesByIdProject);
router.post('/activies/store', storeActivity)
router.put('/activies/:id', editActivityState);
router.delete('/activies/:id', delActivies);
router.delete('/activies/project/:id', delActiviesbyProject);

export default router;

