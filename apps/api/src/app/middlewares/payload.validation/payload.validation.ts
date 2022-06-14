import { MatTabBody } from '@angular/material/tabs';
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
				entity: error._original,
				messages: [error.details.map((detail) => detail.message)],
			});
		}
	};
