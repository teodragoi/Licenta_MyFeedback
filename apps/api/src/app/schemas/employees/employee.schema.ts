import * as Joi from 'joi';

export const addEmployeeSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().email().required(),
	roles: Joi.array().required(),
});
