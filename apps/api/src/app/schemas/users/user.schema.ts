import * as Joi from 'joi';

export const addUserSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string().required(),
});

export const editUserDetailsSchema = Joi.object({
	name: Joi.string().optional(),
	email: Joi.string().email().optional(),
});

export const editUserPasswordSchema = Joi.object({
	password: Joi.string().required(),
});
