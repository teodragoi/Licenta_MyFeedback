import * as Joi from 'joi';

export const addEmployeeSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().email().required(),
	projects: Joi.array().optional(),
	roles: Joi.array().optional(),
});

export const editEmployeeSchema = Joi.object({
	roles: Joi.array().required(),
});
