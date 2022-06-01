import { Schema, model } from 'mongoose';

const employeeSchema: Schema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	roles: [
		{
			type: Schema.Types.ObjectId,
			ref: 'roles',
			default: [],
		},
	],
});

export const EmployeeDTO = model('employees', employeeSchema);
