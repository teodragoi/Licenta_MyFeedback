import { FeedbackTemplatesController } from '@api/controllers/feedback-template/feedback-templates.controller';
import { payloadValidation } from '@api/middlewares';
import { addFeedbackTemplate } from '@api/schemas/feedback-templates/feedback-template.schema';
import { Router } from 'express';

const router: Router = Router();

router.get('/', FeedbackTemplatesController.getFeedbackTemplates);
router.get(
	'/:feedbackTemplateId',
	FeedbackTemplatesController.getFeedbackTemplateDetails
);

router.post(
	'/',
	payloadValidation(addFeedbackTemplate),
	FeedbackTemplatesController.addFeedbackTemplate
);

router.patch(
	'/:feedbackTemplateId',
	FeedbackTemplatesController.editFeedbackTemplate
);

router.delete(
	'/:feedbackTemplateId',
	FeedbackTemplatesController.deleteFeedbackTemplate
);

export default router;
