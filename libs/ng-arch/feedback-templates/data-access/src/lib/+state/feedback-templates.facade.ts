import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FeedbackTemplateState } from './feedback-templates.reducers';

import * as FeedbackTemplateActions from './feedback-templates.actions';
import * as FeedbackTemplateSelectors from './feedback-templates.selectors';
import { FeedbackTemplate } from '@ng-arch/ng-arch/feedback-templates/types';

@Injectable({
	providedIn: 'root',
})
export class FeedbackTemplateFacade {
	public isLoading$ = this.store.select(
		FeedbackTemplateSelectors.selectIsLoading
	);

	public feedbackTemplate$ = this.store.select(
		FeedbackTemplateSelectors.selectFeedbackTemplate
	);

	constructor(private store: Store<FeedbackTemplateState>) {}

	public dispatchGetFeedbackTemplate(feedbackTemplateId: string): void {
		this.store.dispatch(
			FeedbackTemplateActions.getFeedbackTemplate({ feedbackTemplateId })
		);
	}

	public dispatchEditFeedbackTemplate(
		feedbackTemplateId: string,
		feedbackTemplate: Partial<FeedbackTemplate>
	): void {
		this.store.dispatch(
			FeedbackTemplateActions.editTemplate({
				feedbackTemplateId,
				feedbackTemplate,
			})
		);
	}
}
