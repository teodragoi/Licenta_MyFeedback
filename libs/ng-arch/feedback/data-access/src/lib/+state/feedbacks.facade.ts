import { Injectable } from '@angular/core';
import { Answer, Feedback } from '@ng-arch/ng-arch/feedback/types';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as FeedbacksActions from './feedbacks.actions';
import { FeedbacksState } from './feedbacks.reducers';
import * as FeedbacksSelectors from './feedbacks.selectors';

@Injectable({
	providedIn: 'root',
})
export class FeedbacksFacade {
	public isLoading$: Observable<boolean> = this.store.select(
		FeedbacksSelectors.selectIsLoading
	);

	public myFeedbacks$: Observable<Feedback[]> = this.store.select(
		FeedbacksSelectors.selectMyFeedbacks
	);

	public feedbackRequests$: Observable<Feedback[]> = this.store.select(
		FeedbacksSelectors.selectFeedbackRequests
	);

	constructor(private store: Store<FeedbacksState>) {}

	public dispatchGetMyFeedbacks(employeeId: string): void {
		this.store.dispatch(FeedbacksActions.getMyfeedbacks({ employeeId }));
	}

	public dispatchGetFeedbackRequests(employeeId: string): void {
		this.store.dispatch(FeedbacksActions.getFeedbackRequests({ employeeId }));
	}

	public dispatchDismissFeedback(feedbackId: string): void {
		this.store.dispatch(FeedbacksActions.dismissFeedback({ feedbackId }));
	}

	public dispatchRequestFeedback(
		employeeId: string,
		templateId: string,
		fromEmployeeIds: string[]
	): void {
		this.store.dispatch(
			FeedbacksActions.requestFeedback({
				employeeId,
				templateId,
				fromEmployeeIds,
			})
		);
	}
}
