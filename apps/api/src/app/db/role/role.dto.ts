import { Schema, model } from 'mongoose';

const roleSchema: Schema = new Schema({
	name: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
});

export const RoleDTO = model('roles', roleSchema);
