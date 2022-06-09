export enum QuestionTypes {
	RATING = 'rating',
	TEXT = 'text',
}

export interface Question {
	_id?: string;
	question: string;
	type: QuestionTypes;
}

export interface FeedbackTemplate {
	_id?: string;
	name: string;
	questions: Question[];
}
