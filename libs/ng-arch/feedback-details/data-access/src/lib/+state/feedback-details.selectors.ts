import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
	feedbackDetailsFeatureKey,
	FeedbackDetailsState,
} from './feedback-details.reducers';

const getFeedbackDetailsState = createFeatureSelector<FeedbackDetailsState>(
	feedbackDetailsFeatureKey
);

export const selectIsLoading = createSelector(
	getFeedbackDetailsState,
	(state: FeedbackDetailsState) => state.isLoading
);

export const selectFeedback = createSelector(
	getFeedbackDetailsState,
	(state: FeedbackDetailsState) => state.feedback
);
