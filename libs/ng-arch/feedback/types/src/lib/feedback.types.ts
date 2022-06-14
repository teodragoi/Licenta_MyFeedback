import { Employee } from '@ng-arch/ng-arch/employees-management/types';
import {
	FeedbackTemplate,
	Question,
} from '@ng-arch/ng-arch/feedback-templates/types';

export interface Answer {
	response: number | string;
	question: Question;
}

export interface Feedback {
	requestCompleted: boolean;
	template: FeedbackTemplate;
  _id?: string;
	answers?: Answer[];
	forEmployee?: Employee;
	fromEmployee?: Employee;
}
