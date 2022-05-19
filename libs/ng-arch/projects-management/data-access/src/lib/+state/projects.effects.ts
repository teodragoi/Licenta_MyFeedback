import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
import * as ProjectsActions from './projects.actions';
import { ProjectsState } from './projects.reducers';
import * as ProjectsSelectors from './projects.selectors';

@Injectable()
export class ProjectsEffects {
	addProject$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ProjectsActions.addProject),
			withLatestFrom(
				this.store.select(ProjectsSelectors.selectLatestProjectId)
			),
			mergeMap(([{ project }, latestId]) =>
				of(
					ProjectsActions.onAddProjectSuccess({
						project: {
							...project,
							id: (latestId ?? -1) + 1,
						},
					})
				)
			)
		)
	);

	deleteProject$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ProjectsActions.deleteProject),
			switchMap(({ project }) =>
				of(
					ProjectsActions.onDeleteProjectSuccess({
						project,
					})
				)
			)
		)
	);

	constructor(private actions$: Actions, private store: Store<ProjectsState>) {}
}
