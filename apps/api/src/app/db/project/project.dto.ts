import { Schema, model } from 'mongoose';

const projectSchema: Schema = new Schema({
	name: {
		type: String,
		required: true,
	},
	employees: [
		{
			type: Schema.Types.ObjectId,
			ref: 'employees',
			required: true,
			default: [],
		},
	],
	availableRoles: [
		{
			type: Schema.Types.ObjectId,
			ref: 'roles',
			required: true,
			default: [],
		},
	],
});

export const ProjectDTO = model('projects', projectSchema);
