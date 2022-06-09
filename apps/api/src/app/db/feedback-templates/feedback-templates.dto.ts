import { model, Schema } from 'mongoose';

const feedbackTemplateSchema: Schema = new Schema({
	name: {
		type: String,
		required: true,
	},
	questions: [
		{
			type: Schema.Types.ObjectId,
			ref: 'questions',
			required: true,
			default: [],
		},
	],
});

export const FeedbackTemplateDTO = model(
	'feedbackTemplates',
	feedbackTemplateSchema
);
