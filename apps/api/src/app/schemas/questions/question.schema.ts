import { QuestionTypes } from '@ng-arch/ng-arch/feedback-templates/types';
import * as Joi from 'joi';

export const addQuestionSchema = Joi.object({
	question: Joi.string().required(),
	type : Joi.string().required().valid(...Object.values(QuestionTypes))
});
