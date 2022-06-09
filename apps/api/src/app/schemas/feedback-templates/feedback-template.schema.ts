import * as Joi from 'joi';

export const addFeedbackTemplate = Joi.object({
	name: Joi.string().required(),
	questions: Joi.array().required(),
});
