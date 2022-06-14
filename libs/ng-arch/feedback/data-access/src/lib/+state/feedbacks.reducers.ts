import { HttpErrorResponse } from '@angular/common/http';
import { Feedback } from '@ng-arch/ng-arch/feedback/types';
import { Action, createReducer, on } from '@ngrx/store';

import * as FeedbacksActions from './feedbacks.actions';

export interface FeedbacksState {
	error: HttpErrorResponse | null;
	isLoading: boolean;
	feedbackRequests: Feedback[];
	myFeedbacks: Feedback[];
}

const initialState: FeedbacksState = {
	error: null,
	isLoading: false,
	feedbackRequests: [],
	myFeedbacks: [],
};

export const feedbacksFeatureKey = 'feedbacks';

const reducer = createReducer(
	initialState,
	on(
		FeedbacksActions.getFeedbackRequests,
		FeedbacksActions.getMyfeedbacks,
		FeedbacksActions.requestFeedback,
		FeedbacksActions.dismissFeedback,
		(state) => ({
			...state,
			isLoading: true,
		})
	),
	on(
		FeedbacksActions.onGetFeedbackRequestsSuccess,
		(state, { feedbackRequests }) => ({
			...state,
			isLoading: false,
			feedbackRequests,
		})
	),
	on(FeedbacksActions.onGetMyFeedbacksSuccess, (state, { myFeedbacks }) => ({
		...state,
		isLoading: false,
		myFeedbacks,
	})),
	on(FeedbacksActions.onDismissFeedbackSuccess, (state, { feedbackId }) => ({
		...state,
		isLoading: false,
		feedbackRequests: state.feedbackRequests.filter(
			(feedbackRequest: Feedback) => feedbackRequest._id !== feedbackId
		),
	})),
	on(FeedbacksActions.onRequestFeedbackSuccess, (state) => ({
		...state,
		isLoading: false,
	})),
	on(
		FeedbacksActions.onGetFeedbackRequestsFailure,
		FeedbacksActions.onGetMyFeedbacksFailure,
		FeedbacksActions.onRequestFeedbackFailure,
		FeedbacksActions.onDismissFeedbackFailure,
		(state, { error }) => ({ ...state, error, isLoading: false })
	)
);

export function feedbacksReducer(state: FeedbacksState, action: Action) {
	return reducer(state, action);
}
