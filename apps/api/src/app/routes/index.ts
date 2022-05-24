import { Router } from 'express';
import employees from './employees/employees.routes';
import roles from './roles/roles.routes';

const router: Router = Router();

router.use('/roles', roles);
router.use('/employees', employees);

export default router;
