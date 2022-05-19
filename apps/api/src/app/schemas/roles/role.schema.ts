import { RoleType } from '@ng-arch/ng-arch/roles-management/types';
import * as Joi from 'joi';

export const addRoleSchema = Joi.object({
	name: Joi.string().required(),
	type: Joi.string()
		.required()
		.valid(...Object.values(RoleType)),
});
