import { Router } from 'express';
import employees from './employees/employees.routes';
import projects from './projects/projects.routes';
import roles from './roles/roles.routes';
import users from './users/users.routes';

const router: Router = Router();

router.use('/roles', roles);
router.use('/employees', employees);
router.use('/projects', projects);
router.use('/users', users);

export default router;
