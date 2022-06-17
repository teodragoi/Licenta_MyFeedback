import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from '@ng-arch/ng-arch/feedback/types';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { FeedbackDetailsService } from '../feedback-details.service';
import * as FeedbackDetailsActions from './feedback-details.actions';

@Injectable()
export class FeedbackDetailsEffects {
	public getFeedbackDetails$ = createEffect(() =>
		this.actions$.pipe(
			ofType(FeedbackDetailsActions.getFeedbackDetails),
			switchMap(({ feedbackId }) =>
				this.feedbackDetailsService.getFeedbackDetails(feedbackId).pipe(
					map((feedback: Feedback) =>
						FeedbackDetailsActions.onGetFeedbackDetailsSuccess({ feedback })
					),
					catchError((error: HttpErrorResponse) =>
						of(FeedbackDetailsActions.onGetFeedbackDetailsFailure({ error }))
					)
				)
			)
		)
	);

	public sendFeedback$ = createEffect(() =>
		this.actions$.pipe(
			ofType(FeedbackDetailsActions.sendFeedback),
			switchMap(({ feedbackId, answers }) =>
				this.feedbackDetailsService.sendFeedback(feedbackId, answers).pipe(
					map((feedback: Feedback) =>
						FeedbackDetailsActions.onSendFeedbackSucces({ feedback })
					),
					tap(() => {
						this.router.navigate(['dashboard']);
					}),
					catchError((error: HttpErrorResponse) =>
						of(FeedbackDetailsActions.onSendFeedbackFailure({ error }))
					)
				)
			)
		)
	);

	constructor(
		private actions$: Actions,
		private feedbackDetailsService: FeedbackDetailsService,
		private router: Router
	) {}
}
