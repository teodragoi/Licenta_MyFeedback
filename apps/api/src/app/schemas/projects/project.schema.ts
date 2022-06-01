import * as Joi from 'joi';

export const addProjectSchema = Joi.object({
	name: Joi.string().required(),
});

export const editProjectSchema = Joi.object({
	availableRoles: Joi.array().optional(),
	name: Joi.string().optional(),
	employees: Joi.array().optional(),
});
