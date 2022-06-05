import { UsersController } from '@api/controllers/users/users.controller';
import { payloadValidation } from '@api/middlewares';
import {
	addUserSchema,
	editUserDetailsSchema,
	editUserPasswordSchema,
} from '@api/schemas';
import { Router } from 'express';

const router: Router = Router();

router.get('/', UsersController.getUsers);

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
