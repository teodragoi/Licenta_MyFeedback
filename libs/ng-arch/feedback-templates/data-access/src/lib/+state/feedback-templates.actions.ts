import { HttpErrorResponse } from '@angular/common/http';
import { FeedbackTemplate } from '@ng-arch/ng-arch/feedback-templates/types';
import { createAction, props } from '@ngrx/store';

export const getFeedbackTemplate = createAction(
	'[Feedback Template] Get Feedback Template ',
	props<{ feedbackTemplateId: string }>()
);

export const onGetFeedbackTemplateSuccess = createAction(
	'[Feedback Template] On Get Feedback Template Success ',
	props<{ feedbackTemplate: FeedbackTemplate }>()
);

export const onGetFeedbackTemplateFailure = createAction(
	'[Feedback Template] On Get Feedback Template Failure',
	props<{ error: HttpErrorResponse }>()
);

export const editTemplate = createAction(
	'[Feedback Template] Edit Feedback Template',
	props<{
		feedbackTemplateId: string;
		feedbackTemplate: Partial<FeedbackTemplate>;
	}>()
);

export const onEditTemplateSuccess = createAction(
	'[Feedback Template] On Edit Feedback Template Success',
	props<{ feedbackTemplate: FeedbackTemplate }>()
);

export const onEditTemplateFailure = createAction(
	'[Feedback Template] On Edit Feedback Template Failure',
	props<{ error: HttpErrorResponse }>()
);
