import { LoginController } from '@api/controllers';
import { payloadValidation } from '@api/middlewares';
import { loginSchema } from '@api/schemas/login/login.schema';
import { Router } from 'express';

const router: Router = Router();

router.post('/', payloadValidation(loginSchema), LoginController.login);

export default router;
