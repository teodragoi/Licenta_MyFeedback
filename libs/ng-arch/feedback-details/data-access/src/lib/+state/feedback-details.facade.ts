import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FeedbackDetailsState } from './feedback-details.reducers';

import * as FeedbackDetailsActions from './feedback-details.actions';
import * as FeedbackDetailsSelectors from './feedback-details.selectors';
import { Answer, Feedback } from '@ng-arch/ng-arch/feedback/types';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class FeedbackDetailsFacade {
	public isLoading$: Observable<boolean> = this.store.select(
		FeedbackDetailsSelectors.selectIsLoading
	);

	public feedback$: Observable<Feedback | null> = this.store.select(
		FeedbackDetailsSelectors.selectFeedback
	);

	constructor(private store: Store<FeedbackDetailsState>) {}

	public dispatchGetFeedbackDetails(feedbackId: string): void {
		this.store.dispatch(
			FeedbackDetailsActions.getFeedbackDetails({ feedbackId })
		);
	}

	public dispatchSendFeedback(feedbackId: string, answers: Answer[]): void {
		this.store.dispatch(
			FeedbackDetailsActions.sendFeedback({ feedbackId, answers })
		);
	}
}
