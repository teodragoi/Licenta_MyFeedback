import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback } from '@ng-arch/ng-arch/feedback/types';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { FeedbacksService } from '../feedbacks.service';

import * as FeedbacksActions from './feedbacks.actions';

@Injectable()
export class FeedbacksEffects {
	public getMyFeedbacks$ = createEffect(() =>
		this.actions$.pipe(
			ofType(FeedbacksActions.getMyfeedbacks),
			switchMap(({ employeeId }) =>
				this.feedbacksService.getMyFeedbacks(employeeId).pipe(
					map((myFeedbacks: Feedback[]) =>
						FeedbacksActions.onGetMyFeedbacksSuccess({ myFeedbacks })
					),
					catchError((error: HttpErrorResponse) =>
						of(FeedbacksActions.onGetMyFeedbacksFailure({ error }))
					)
				)
			)
		)
	);

	public getFeedbackRequests$ = createEffect(() =>
		this.actions$.pipe(
			ofType(FeedbacksActions.getFeedbackRequests),
			switchMap(({ employeeId }) =>
				this.feedbacksService.getFeedbackRequests(employeeId).pipe(
					map((feedbackRequests: Feedback[]) =>
						FeedbacksActions.onGetFeedbackRequestsSuccess({ feedbackRequests })
					),
					catchError((error: HttpErrorResponse) =>
						of(FeedbacksActions.onRequestFeedbackFailure({ error }))
					)
				)
			)
		)
	);

	public dismissFeedback$ = createEffect(() =>
		this.actions$.pipe(
			ofType(FeedbacksActions.dismissFeedback),
			switchMap(({ feedbackId }) =>
				this.feedbacksService.dismissFeedback(feedbackId).pipe(
					map(() => FeedbacksActions.onDismissFeedbackSuccess({ feedbackId })),
					catchError((error: HttpErrorResponse) =>
						of(FeedbacksActions.onDismissFeedbackFailure({ error }))
					)
				)
			)
		)
	);

	public requestFeedback$ = createEffect(() =>
		this.actions$.pipe(
			ofType(FeedbacksActions.requestFeedback),
			switchMap(({ employeeId, templateId, fromEmployeeIds }) =>
				this.feedbacksService
					.requestFeedback(employeeId, templateId, fromEmployeeIds)
					.pipe(
						map((feedbackRequests) =>
							FeedbacksActions.onRequestFeedbackSuccess({ feedbackRequests })
						),
						catchError((error: HttpErrorResponse) =>
							of(FeedbacksActions.onRequestFeedbackFailure({ error }))
						)
					)
			)
		)
	);

	constructor(
		private actions$: Actions,
		private feedbacksService: FeedbacksService
	) {}
}
