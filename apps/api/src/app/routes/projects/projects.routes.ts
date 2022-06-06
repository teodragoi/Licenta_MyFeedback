import { ProjectsController } from '@api/controllers';
import { payloadValidation } from '@api/middlewares';
import { addProjectSchema, editProjectSchema } from '@api/schemas';
import { Router } from 'express';

const router: Router = Router();

router.get('/', ProjectsController.getProjects);
router.get('/:projectId', ProjectsController.getProjectDetails);
router.get('/byEmployee/:employeeId', ProjectsController.getProjectsByEmployee);

router.post(
	'/',
	payloadValidation(addProjectSchema),
	ProjectsController.addProject
);

router.patch(
	'/:projectId',
	payloadValidation(editProjectSchema),
	ProjectsController.editProject
);

router.delete('/:projectId', ProjectsController.deleteProject);

export default router;
