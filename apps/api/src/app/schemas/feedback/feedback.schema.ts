import * as Joi from 'joi';

export const addFeedback = Joi.object({
	answers: Joi.array().optional,
	forEmployee: Joi.object().required(),
	fromEmployee: Joi.object().required(),
	requestCompleted: Joi.boolean().required(),
	template: Joi.object().required(),
});
