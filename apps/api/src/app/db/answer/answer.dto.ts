import { model, Schema } from 'mongoose';

const answerSchema: Schema = new Schema({
	response: {
		type: Schema.Types.Mixed,
		required: true,
	},
	question: {
		type: Schema.Types.ObjectId,
		ref: 'questions',
		required: true,
	},
});

export const AnswerDTO = model('answers', answerSchema);
