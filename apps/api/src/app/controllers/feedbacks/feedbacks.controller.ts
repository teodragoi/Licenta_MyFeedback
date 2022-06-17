import { AnswerDTO, FeedbackDTO, FeedbackTemplateDTO } from '@api/db';
import { FeedbackTemplate } from '@ng-arch/ng-arch/feedback-templates/types';
import { Answer, Feedback } from '@ng-arch/ng-arch/feedback/types';
import { Request, Response } from 'express';
import HttpStatus from 'http-status-codes';

export class FeedbacksController {
	public static async getFeedbackRequests(req: Request, res: Response) {
		try {
			const { employeeId } = req.params;

			const feedbackRequests: Feedback[] = await FeedbackDTO.find({
				fromEmployee: employeeId,
				requestCompleted: false,
			}).populate('forEmployee', '-__v -roles');

			if (!feedbackRequests) {
				return res
					.status(HttpStatus.NOT_FOUND)
					.json({ error: 'Feedback requests not found' });
			}

			return res.status(HttpStatus.OK).json(feedbackRequests);
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
		}
	}

	public static async getMyFeedbacks(req: Request, res: Response) {
		try {
			const { employeeId } = req.params;

			const feedbacks: Feedback[] = await FeedbackDTO.find({
				forEmployee: employeeId,
				requestCompleted: true,
			}).populate('fromEmployee', '-__v -roles');

			if (!feedbacks) {
				return res
					.status(HttpStatus.NOT_FOUND)
					.json({ error: 'Feedbacks not found' });
			}

			return res.status(HttpStatus.OK).json(feedbacks);
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
		}
	}

	public static async getFeedback(req: Request, res: Response) {
		try {
			const { feedbackId } = req.params;

			const feedbackRequest: Feedback = await FeedbackDTO.findOne({
				_id: feedbackId,
			})
				.populate('forEmployee', '-__v -roles')
				.populate('fromEmployee', '-__v -roles')
				.populate('answers', '-__v');

			if (!feedbackRequest) {
				return res
					.status(HttpStatus.NOT_FOUND)
					.json({ error: 'Feedback requests not found' });
			}

			const template: FeedbackTemplate = await FeedbackTemplateDTO.findOne({
				_id: feedbackRequest.template,
			}).populate('questions');

			feedbackRequest.template = template;

			return res.status(HttpStatus.OK).json(feedbackRequest);
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
		}
	}

	public static async requestFeedback(req: Request, res: Response) {
		try {
			const { employeeId } = req.params;
			const payload: { templateId: string; fromEmployeeIds: string[] } =
				req.body;

			const feedbacks: Feedback[] = await FeedbackDTO.insertMany(
				payload.fromEmployeeIds.map((fromEmployeeId: string) => ({
					forEmployee: employeeId,
					fromEmployee: fromEmployeeId,
					template: payload.templateId,
				}))
			);

			return res.status(HttpStatus.OK).json(feedbacks);
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
		}
	}

	public static async sendFeedback(req: Request, res: Response) {
		try {
			const { feedbackId } = req.params;

			const feedback: Feedback = await FeedbackDTO.findOne({
				_id: feedbackId,
			});

			if (!feedback) {
				return res
					.status(HttpStatus.NOT_FOUND)
					.json({ error: 'Feedback not found' });
			}

			const answers: Answer[] = await AnswerDTO.insertMany(req.body);

			await FeedbackDTO.updateOne(
				{ _id: feedbackId },
				{
					answers,
					requestCompleted: true,
				}
			);

			return res
				.status(HttpStatus.OK)
				.json(Object.assign(feedback, { ...req.body }));
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
		}
	}

	public static async dismissFeedbackRequest(req: Request, res: Response) {
		try {
			const { feedbackId } = req.params;

			const feedback: Feedback = await FeedbackDTO.findOne({ _id: feedbackId });

			if (!feedback) {
				return res
					.status(HttpStatus.NOT_FOUND)
					.json({ error: 'Feedback not found' });
			}

			if (feedback.answers.length) {
				await AnswerDTO.deleteMany({
					_id: { $in: feedback.answers },
				});
			}

			await FeedbackDTO.deleteOne({ _id: feedbackId });

			return res.status(HttpStatus.NO_CONTENT).json({ success: true });
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
		}
	}
}
