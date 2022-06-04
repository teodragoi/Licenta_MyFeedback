import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '@ng-arch/ng-arch/projects-management/types';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ProjectDetailsService } from '../project-details.service';

import * as ProjectDetailsActions from './project-details.actions';

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

	constructor(
		private actions$: Actions,
		private projectDetailsService: ProjectDetailsService
	) {}
}
