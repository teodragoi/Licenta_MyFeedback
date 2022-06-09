import { state } from '@angular/animations';
import { HttpErrorResponse } from '@angular/common/http';
import { FeedbackTemplate } from '@ng-arch/ng-arch/feedback-templates/types';
import { Action, createReducer, on } from '@ngrx/store';
import * as FeedbackTemplateActions from './feedback-templates.actions';

export interface FeedbackTemplateState {
	error: HttpErrorResponse | null;
	feedbackTemplate: FeedbackTemplate | null;
	isLoading: boolean;
}

const initialState: FeedbackTemplateState = {
	error: null,
	isLoading: false,
	feedbackTemplate: null,
};

export const feedbackTemplateFeatureKey = 'feedbackTemplate';

const reducer = createReducer(
	initialState,
	on(
		FeedbackTemplateActions.getFeedbackTemplate,
		FeedbackTemplateActions.editTemplate,
		(state) => ({
			...state,
			isLoading: true,
		})
	),
	on(
		FeedbackTemplateActions.onGetFeedbackTemplateSuccess,
		FeedbackTemplateActions.onEditTemplateSuccess,
		(state, { feedbackTemplate }) => ({
			...state,
			isLoading: false,
			feedbackTemplate,
		})
	),
	on(
		FeedbackTemplateActions.onGetFeedbackTemplateFailure,
		FeedbackTemplateActions.onEditTemplateFailure,
		(state, { error }) => ({
			...state,
			isLoading: false,
			error,
		})
	)
);

export function feedbackTemplateReducer(
	state: FeedbackTemplateState,
	action: Action
) {
	return reducer(state, action);
}
