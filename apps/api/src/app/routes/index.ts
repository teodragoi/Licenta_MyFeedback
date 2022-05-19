import { Router } from 'express';
import roles from './roles/roles.routes';

const router: Router = Router();

router.use('/roles', roles);

export default router;
  