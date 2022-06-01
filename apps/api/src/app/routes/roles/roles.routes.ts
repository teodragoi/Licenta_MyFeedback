import { RolesController } from '@api/controllers';
import { payloadValidation } from '@api/middlewares';
import { addRoleSchema } from '@api/schemas';
import { Router } from 'express';

const router: Router = Router();

router.get('/', RolesController.getRoles);

router.post('/', payloadValidation(addRoleSchema), RolesController.addRole);
router.delete('/:roleId', RolesController.deleteRole);

export default router;
