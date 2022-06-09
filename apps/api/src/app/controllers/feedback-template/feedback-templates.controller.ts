import { FeedbackTemplateDTO, QuestionDTO } from '@api/db';
import {
	FeedbackTemplate,
	Question,
} from '@ng-arch/ng-arch/feedback-templates/types';
import { Request, Response } from 'express';
import HttpStatus from 'http-status-codes';

export class FeedbackTemplatesController {
	public static async getFeedbackTemplates(
		req: Request,
		res: Response
	): Promise<Response> {
		try {
			const feedbackTemplates: FeedbackTemplate[] =
				await FeedbackTemplateDTO.find({});

			return res.status(HttpStatus.OK).json(feedbackTemplates);
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
		}
	}

	public static async getFeedbackTemplateDetails(
		req: Request,
		res: Response
	): Promise<Response> {
		try {
			const { feedbackTemplateId } = req.params;

			const feedbackTemplate: FeedbackTemplate =
				await FeedbackTemplateDTO.findOne({ _id: feedbackTemplateId }).populate(
					'questions',
					'-__v'
				);

			if (!feedbackTemplate) {
				return res
					.status(HttpStatus.NOT_FOUND)
					.json({ error: 'Feedback template not found!' });
			}

			return res.status(HttpStatus.OK).json(feedbackTemplate);
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
		}
	}

	public static async addFeedbackTemplate(
		req: Request,
		res: Response
	): Promise<Response> {
		try {
			const payload: FeedbackTemplate = req.body;

			const questions = await QuestionDTO.insertMany(payload.questions);

			const feedbackTemplate = await FeedbackTemplateDTO.create({
				...payload,
				questions,
			});

			return res.status(HttpStatus.CREATED).json(feedbackTemplate);
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
		}
	}

	public static async deleteFeedbackTemplate(
		req: Request,
		res: Response
	): Promise<Response> {
		try {
			const { feedbackTemplateId } = req.params;

			const feedbackTemplate: FeedbackTemplate =
				await FeedbackTemplateDTO.findOne({ _id: feedbackTemplateId });

			if (!feedbackTemplate) {
				return res
					.status(HttpStatus.NOT_FOUND)
					.json({ error: 'Feedback Template not found!' });
			}

			await QuestionDTO.deleteMany({
				_id: { $in: feedbackTemplate.questions },
			});

			await FeedbackTemplateDTO.deleteOne({ _id: feedbackTemplateId });

			return res.status(HttpStatus.NO_CONTENT).json({ success: true });
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
		}
	}

	public static async editFeedbackTemplate(
		req: Request,
		res: Response
	): Promise<Response> {
		try {
			const { feedbackTemplateId } = req.params;

			const existingTemplate: FeedbackTemplate =
				await FeedbackTemplateDTO.findOne({ _id: feedbackTemplateId });

			if (!existingTemplate) {
				return res
					.status(HttpStatus.NOT_FOUND)
					.json({ error: 'Feedback Template not found!' });
			}

			await QuestionDTO.deleteMany({
				_id: { $in: existingTemplate.questions },
			});

			const template: FeedbackTemplate = req.body;

			const questions: Question[] = await QuestionDTO.insertMany(
				template.questions
			);

			await FeedbackTemplateDTO.updateOne(
				{ _id: feedbackTemplateId },
				{ ...template, questions }
			);

			return res.status(HttpStatus.OK).json({
				feedbackTemplate: Object.assign(existingTemplate, { ...req.body }),
			});
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
		}
	}
}
