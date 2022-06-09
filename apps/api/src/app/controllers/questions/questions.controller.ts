import { QuestionDTO } from '@api/db';
import { Question } from '@ng-arch/ng-arch/feedback-templates/types';
import { Request, Response } from 'express';
import HttpStatus from 'http-status-codes';

export class QuestionsController {
	public static async getQuestions(
		req: Request,
		res: Response
	): Promise<Response> {
		try {
			const questions: Question[] = await QuestionDTO.find({});

			return res.status(HttpStatus.OK).json(questions);
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
		}
	}

	public static async addQuestion(
		req: Request,
		res: Response
	): Promise<Response> {
		try {
			const question: Question = await QuestionDTO.create({
				...req.body,
			});

			return res.status(HttpStatus.CREATED).json(question);
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
		}
	}
}
