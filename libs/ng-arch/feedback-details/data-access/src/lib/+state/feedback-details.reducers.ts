import { state } from '@angular/animations';
import { HttpErrorResponse } from '@angular/common/http';
import { Feedback } from '@ng-arch/ng-arch/feedback/types';
import { Action, createReducer, on } from '@ngrx/store';
import * as FeedbackDetailsActions from './feedback-details.actions';

export interface FeedbackDetailsState {
	error: HttpErrorResponse | null;
	isLoading: boolean;
	feedback: Feedback | null;
}

const initialState: FeedbackDetailsState = {
	error: null,
	isLoading: false,
	feedback: null,
};

export const feedbackDetailsFeatureKey = 'feedbackDetails';

const reducer = createReducer(
	initialState,
	on(
		FeedbackDetailsActions.getFeedbackDetails,
		FeedbackDetailsActions.sendFeedback,
		(state) => ({
			...state,
			isLoading: true,
		})
	),
	on(
		FeedbackDetailsActions.onGetFeedbackDetailsSuccess,
		FeedbackDetailsActions.onSendFeedbackSucces,
		(state, { feedback }) => ({
			...state,
			isLoading: false,
			feedback,
		})
	),
	on(
		FeedbackDetailsActions.onGetFeedbackDetailsFailure,
		FeedbackDetailsActions.onSendFeedbackFailure,
		(state, { error }) => ({
			...state,
			isLoading: false,
			error,
		})
	)
);

export function feedbackDetailsReducer(
	state: FeedbackDetailsState,
	action: Action
) {
	return reducer(state, action);
}
