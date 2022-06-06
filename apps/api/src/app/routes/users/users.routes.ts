import { UsersController } from '@api/controllers';
import { payloadValidation } from '@api/middlewares';
import {
	addUserSchema,
	editUserDetailsSchema,
	editUserPasswordSchema,
} from '@api/schemas';
import { Router } from 'express';

const router: Router = Router();

router.get('/', UsersController.getUsers);
router.get('/:userId', UsersController.getUserDetails);

router.post('/', payloadValidation(addUserSchema), UsersController.addUser);

router.patch(
	'/:userId/details',
	payloadValidation(editUserDetailsSchema),
	UsersController.editUserDetails
);

router.patch(
	'/:userId/password',
	payloadValidation(editUserPasswordSchema),
	UsersController.editUserPassword
);

router.delete('/:userId', UsersController.deleteUser);

export default router;
