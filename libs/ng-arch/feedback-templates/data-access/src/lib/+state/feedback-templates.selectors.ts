import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
	feedbackTemplateFeatureKey,
	FeedbackTemplateState,
} from './feedback-templates.reducers';

const getFeedbackTemplateState = createFeatureSelector<FeedbackTemplateState>(
	feedbackTemplateFeatureKey
);

export const selectIsLoading = createSelector(
	getFeedbackTemplateState,
	(state: FeedbackTemplateState) => state.isLoading
);

export const selectFeedbackTemplate = createSelector(
	getFeedbackTemplateState,
	(state: FeedbackTemplateState) => state.feedbackTemplate
);
