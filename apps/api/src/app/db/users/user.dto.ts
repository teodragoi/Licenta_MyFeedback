import { model, Schema } from 'mongoose';

const userSchema: Schema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	employee: {
		type: Schema.Types.ObjectId,
		ref: 'employees',
	},
});

export const UserDTO = model('users', userSchema);
