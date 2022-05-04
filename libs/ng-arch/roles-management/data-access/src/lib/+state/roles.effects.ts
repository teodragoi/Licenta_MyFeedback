import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';

import * as RolesActions from './roles.actions';
import * as RolesSelectors from './roles.selectors';
import { RolesState } from './roles.reducers';
import { of } from 'rxjs';

@Injectable()
export class RolesEffects {
	addRole$ = createEffect(() =>
		this.actions$.pipe(
			ofType(RolesActions.addRole),
			withLatestFrom(this.store.select(RolesSelectors.selectLatestRoleId)),
			mergeMap(([{ role }, latestId]) =>
				of(
					RolesActions.onAddRoleSuccess({
						role: {
							id: latestId + 1,
							...role,
						},
					})
				)
			)
		)
	);

	deleteRole$ = createEffect(() =>
		this.actions$.pipe(
			ofType(RolesActions.deleteRole),
			switchMap(({ roleDTO }) =>
				of(
					RolesActions.onDeleteRoleSuccess({
						roleDTO,
					})
				)
			)
		)
	);

	constructor(private actions$: Actions, private store: Store<RolesState>) {}
}
