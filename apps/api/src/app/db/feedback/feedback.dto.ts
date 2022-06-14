import { model, Schema } from 'mongoose';

const feedbackSchema: Schema = new Schema({
	answers: [
		{
			type: Schema.Types.ObjectId,
			ref: 'answers',
			default: [],
		},
	],
	forEmployee: {
		type: Schema.Types.ObjectId,
		ref: 'employees',
	},
	fromEmployee: {
		type: Schema.Types.ObjectId,
		ref: 'employees',
	},
	requestCompleted: {
		type: Boolean,
		required: true,
		default: false,
	},
	template: {
		type: Schema.Types.ObjectId,
		ref: 'feedbackTemplates',
		required: true,
	},
});

export const FeedbackDTO = model(
  'feedbacks',
  feedbackSchema
)
