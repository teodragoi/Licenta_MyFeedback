import { FeedbacksController } from '@api/controllers/feedbacks/feedbacks.controller';
import { payloadValidation } from '@api/middlewares';
import { addFeedback } from '@api/schemas';
import { Router } from 'express';

const router: Router = Router();

router.get('/requests/:employeeId', FeedbacksController.getFeedbackRequests);
router.get('/my-feedback/:employeeId', FeedbacksController.getMyFeedbacks);
router.get('/:feedbackId', FeedbacksController.getFeedback);

router.post(
	'/:employeeId',
	FeedbacksController.requestFeedback
);

router.put('/:feedbackId', FeedbacksController.sendFeedback);

router.delete('/:feedbackId', FeedbacksController.dismissFeedbackRequest);

export default router;
