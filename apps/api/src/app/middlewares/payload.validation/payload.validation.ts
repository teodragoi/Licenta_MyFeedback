import { NextFunction, Request, Response } from 'express';
import HttpStatus from 'http-status-codes';

export const payloadValidation =
	(schema) =>
	async (
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<Response> => {
		try {
			const { body: payload } = req;

			await schema.validateAsync(payload);
			next();
		} catch (error) {
			return res.status(HttpStatus.BAD_REQUEST).json({
				success: false,
				message: 'Invalid payload',
			});
		}
	};