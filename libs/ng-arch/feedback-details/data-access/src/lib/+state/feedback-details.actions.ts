import { HttpErrorResponse } from '@angular/common/http';
import { Answer, Feedback } from '@ng-arch/ng-arch/feedback/types';
import { createAction, props } from '@ngrx/store';

export const getFeedbackDetails = createAction(
	'[Feedback Details] Get FeedbackDetails',
	props<{ feedbackId: string }>()
);

export const onGetFeedbackDetailsSuccess = createAction(
	'[Feedback Details] On Get Feedback Details Success',
	props<{ feedback: Feedback }>()
);

export const onGetFeedbackDetailsFailure = createAction(
	'[Feedback Details] On Get Feedback Details Failure',
	props<{ error: HttpErrorResponse }>()
);

export const sendFeedback = createAction(
	'[Feedbacks] Send Feedback',
	props<{ feedbackId: string; answers: Answer[] }>()
);

export const onSendFeedbackSucces = createAction(
	'[Feedbacks] On Send Feedback Success',
	props<{ feedback: Feedback }>()
);

export const onSendFeedbackFailure = createAction(
	'[Feedbacks] On Send Feedback Failure',
	props<{ error: HttpErrorResponse }>()
);
