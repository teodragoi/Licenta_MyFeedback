import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '@ng-arch/ng-arch/projects-management/types';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ProjectsService } from '../projects.service';
import * as ProjectsActions from './projects.actions';
import { ProjectsState } from './projects.reducers';

@Injectable()
export class ProjectsEffects {
	addProject$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ProjectsActions.addProject),
			switchMap(({ project }) =>
				this.projectsService.addProject(project).pipe(
					map((project: Project) =>
						ProjectsActions.onAddProjectSuccess({ project })
					),
					catchError((error: HttpErrorResponse) =>
						of(ProjectsActions.onAddProjectFailure({ error }))
					)
				)
			)
		)
	);

	deleteProject$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ProjectsActions.deleteProject),
			switchMap(({ projectId }) =>
				this.projectsService.deleteProject(projectId).pipe(
					map(() => ProjectsActions.onDeleteProjectSuccess({ projectId })),
					catchError((error: HttpErrorResponse) =>
						of(ProjectsActions.onDeleteProjectFailure({ error }))
					)
				)
			)
		)
	);

	getAllProjects$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ProjectsActions.getAllProjects),
			switchMap(() =>
				this.projectsService.getAllProjects().pipe(
					map((projects: Project[]) =>
						ProjectsActions.onGetAllProjectsSuccess({ projects })
					),
					catchError((error: HttpErrorResponse) =>
						of(ProjectsActions.onGetAllProjectsFailure({ error }))
					)
				)
			)
		)
	);

	constructor(
		private actions$: Actions,
		private projectsService: ProjectsService,
		private store: Store<ProjectsState>
	) {}
}
