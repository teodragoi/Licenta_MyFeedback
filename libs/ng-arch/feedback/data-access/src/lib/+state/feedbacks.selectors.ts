import { createFeatureSelector, createSelector } from '@ngrx/store';
import { feedbacksFeatureKey, FeedbacksState } from './feedbacks.reducers';

const getFeedbacksState =
	createFeatureSelector<FeedbacksState>(feedbacksFeatureKey);

export const selectIsLoading = createSelector(
	getFeedbacksState,
	(state: FeedbacksState) => state.isLoading
);

export const selectMyFeedbacks = createSelector(
	getFeedbacksState,
	(state: FeedbacksState) => state.myFeedbacks
);

export const selectFeedbackRequests = createSelector(
	getFeedbacksState,
	(state: FeedbacksState) => state.feedbackRequests
);
