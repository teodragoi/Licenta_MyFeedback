import { QuestionsController } from '@api/controllers/questions/questions.controller';
import { payloadValidation } from '@api/middlewares';
import { addQuestionSchema } from '@api/schemas';
import { Router } from 'express';

const router: Router = Router();

router.get('/', QuestionsController.getQuestions);

router.post(
	'/',
	payloadValidation(addQuestionSchema),
	QuestionsController.addQuestion
);

export default router;