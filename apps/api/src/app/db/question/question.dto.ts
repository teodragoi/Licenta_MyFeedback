import { model, Schema } from 'mongoose';

const questionSchema: Schema = new Schema({
	question: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
});

export const QuestionDTO = model('questions', questionSchema);
