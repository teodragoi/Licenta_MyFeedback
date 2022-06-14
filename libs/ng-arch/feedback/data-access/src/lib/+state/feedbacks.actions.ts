import { HttpErrorResponse } from '@angular/common/http';
import { Answer, Feedback } from '@ng-arch/ng-arch/feedback/types';
import { createAction, props } from '@ngrx/store';

export const getFeedbackRequests = createAction(
	'[Feedbacks] Get Feedback Requests',
	props<{ employeeId: string }>()
);

export const onGetFeedbackRequestsSuccess = createAction(
	'[Feedbacks] On Get Feedback Requests Success',
	props<{ feedbackRequests: Feedback[] }>()
);

export const onGetFeedbackRequestsFailure = createAction(
	'[Feedbacks] On Get Feedback Requests Failure',
	props<{ error: HttpErrorResponse }>()
);

export const getMyfeedbacks = createAction(
	'[Feedbacks] Get My Feedbacks',
	props<{ employeeId: string }>()
);

export const onGetMyFeedbacksSuccess = createAction(
	'[Feedbacks] On Get My Feedbacks Success',
	props<{ myFeedbacks: Feedback[] }>()
);

export const onGetMyFeedbacksFailure = createAction(
	'[Feedbacks] On Get My Feedbacks Failure',
	props<{ error: HttpErrorResponse }>()
);

export const requestFeedback = createAction(
	'[Feedbacks] Request Feedback',
	props<{ employeeId: string; templateId: string; fromEmployeeIds: string[] }>()
);

export const onRequestFeedbackSuccess = createAction(
	'[Feedbacks] On Request Feedback Success',
	props<{ feedbackRequests: Feedback[] }>()
);

export const onRequestFeedbackFailure = createAction(
	'[Feedbacks] On Request Feedbacks Failure',
	props<{ error: HttpErrorResponse }>()
);

export const dismissFeedback = createAction(
	'[Feedbacks] Dismiss Feedback',
	props<{ feedbackId: string }>()
);

export const onDismissFeedbackSuccess = createAction(
	'[Feedback] On Dismiss Feedback Success',
	props<{ feedbackId: string }>()
);

export const onDismissFeedbackFailure = createAction(
	'[Feedbacks] On Dismiss Feedback Failure',
	props<{ error: HttpErrorResponse }>()
);
