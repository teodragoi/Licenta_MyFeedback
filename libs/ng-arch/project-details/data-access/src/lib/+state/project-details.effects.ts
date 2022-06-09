import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeedbackTemplate } from '@ng-arch/ng-arch/feedback-templates/types';
import { Project } from '@ng-arch/ng-arch/projects-management/types';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
	catchError,
	map,
	mergeMap,
	switchMap,
	withLatestFrom,
} from 'rxjs/operators';
import { FeedbackTemplatesService } from '../feedback-templates.service';
import { ProjectDetailsService } from '../project-details.service';

import * as ProjectDetailsActions from './project-details.actions';
import { ProjectDetailsState } from './project-details.reducers';
import * as ProjectDetailsSelectors from './project-details.selectors';

@Injectable()
export class ProjectDetailsEffects {
	editProject$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ProjectDetailsActions.editProject),
			switchMap(({ projectId, project }) =>
				this.projectDetailsService.editProject(projectId, project).pipe(
					map((project: Project) =>
						ProjectDetailsActions.onEditProjectSuccess({ project })
					),
					catchError((error: HttpErrorResponse) =>
						of(ProjectDetailsActions.onEditProjectFailure({ error }))
					)
				)
			)
		)
	);

	getProjectDetails$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ProjectDetailsActions.getProjectDetails),
			switchMap(({ projectId }) =>
				this.projectDetailsService.getProjectDetails(projectId).pipe(
					map((project: Project) =>
						ProjectDetailsActions.onGetProjectDetailsSuccess({ project })
					),
					catchError((error: HttpErrorResponse) =>
						of(ProjectDetailsActions.onGetProjectDetailsFailure({ error }))
					)
				)
			)
		)
	);

	public addFeedbackTemplate$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ProjectDetailsActions.addFeedbackTemplate),
			withLatestFrom(this.store.select(ProjectDetailsSelectors.selectProject)),
			mergeMap(([{ feedbackTemplate: template }, project]) =>
				this.feedbackTemplatesService.addFeedbackTemplate(template).pipe(
					map((feedbackTemplate: FeedbackTemplate) =>
						ProjectDetailsActions.editProject({
							projectId: project?._id ?? '',
							project: {
								feedbackTemplates: [
									...(project?.feedbackTemplates ?? []),
									feedbackTemplate,
								],
							},
						})
					),
					catchError((error: HttpErrorResponse) =>
						of(ProjectDetailsActions.onAddFeedbackTemplateFailure({ error }))
					)
				)
			)
		)
	);

	public deleteFeedbackTemplate$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ProjectDetailsActions.deleteFeedbackTemplate),
			withLatestFrom(this.store.select(ProjectDetailsSelectors.selectProject)),
			mergeMap(([{ feedbackTemplateId }, project]) =>
				this.feedbackTemplatesService
					.deleteFeedbackTemplate(feedbackTemplateId)
					.pipe(
						map(() =>
							ProjectDetailsActions.editProject({
								projectId: project?._id ?? '',
								project: {
									feedbackTemplates: project?.feedbackTemplates?.filter(
										(feedbackTemplate: FeedbackTemplate) =>
											feedbackTemplate._id !== feedbackTemplateId
									),
								},
							})
						),
						catchError((error: HttpErrorResponse) =>
							of(
								ProjectDetailsActions.onDeleteFeedbackTemplateFailure({ error })
							)
						)
					)
			)
		)
	);

	constructor(
		private actions$: Actions,
		private projectDetailsService: ProjectDetailsService,
		private feedbackTemplatesService: FeedbackTemplatesService,
		private store: Store<ProjectDetailsState>
	) {}
}
