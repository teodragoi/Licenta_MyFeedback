import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeedbackTemplate } from '@ng-arch/ng-arch/feedback-templates/types';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { FeedbackTemplateService } from '../feedback-template.service';
import * as FeedbackTemplateActions from './feedback-templates.actions';

@Injectable()
export class FeedbackTemplateEffects {
	public getFeedbackTemplate$ = createEffect(() =>
		this.actions$.pipe(
			ofType(FeedbackTemplateActions.getFeedbackTemplate),
			switchMap(({ feedbackTemplateId }) =>
				this.templateService.getFeedbackTemplate(feedbackTemplateId).pipe(
					map((feedbackTemplate: FeedbackTemplate) =>
						FeedbackTemplateActions.onGetFeedbackTemplateSuccess({
							feedbackTemplate,
						})
					),
					catchError((error: HttpErrorResponse) =>
						of(FeedbackTemplateActions.onGetFeedbackTemplateFailure({ error }))
					)
				)
			)
		)
	);

	public editTemplate$ = createEffect(() =>
		this.actions$.pipe(
			ofType(FeedbackTemplateActions.editTemplate),
			switchMap(({ feedbackTemplateId, feedbackTemplate }) =>
				this.templateService
					.editFeedbackTemplate(feedbackTemplateId, feedbackTemplate)
					.pipe(
						map((feedbackTemplate: FeedbackTemplate) =>
							FeedbackTemplateActions.onEditTemplateSuccess({
								feedbackTemplate,
							})
						),
						catchError((error: HttpErrorResponse) =>
							of(FeedbackTemplateActions.onEditTemplateFailure({ error }))
						)
					)
			)
		)
	);

	constructor(
		private actions$: Actions,
		private templateService: FeedbackTemplateService
	) {}
}
