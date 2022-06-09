import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '@ng-arch/ng-arch/roles-management/types';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { RolesService } from '../roles.service';
import * as RolesActions from './roles.actions';
import { RolesState } from './roles.reducers';

@Injectable()
export class RolesEffects {
	addRole$ = createEffect(() =>
		this.actions$.pipe(
			ofType(RolesActions.addRole),
			switchMap(({ role }) =>
				this.rolesService.postRole(role).pipe(
					map((role: Role) => RolesActions.onAddRoleSuccess({ role })),
					catchError((error: HttpErrorResponse) =>
						of(RolesActions.onAddRoleFailure({ error }))
					)
				)
			)
		)
	);

	deleteRole$ = createEffect(() =>
		this.actions$.pipe(
			ofType(RolesActions.deleteRole),
			switchMap(({ roleId }) =>
				this.rolesService.deleteRole(roleId).pipe(
					map(() => RolesActions.onDeleteRoleSuccess({ roleId })),
					catchError((error: HttpErrorResponse) =>
						of(RolesActions.onDeleteRoleFailure({ error }))
					)
				)
			)
		)
	);

	getRoles$ = createEffect(() =>
		this.actions$.pipe(
			ofType(RolesActions.getAllRoles),
			switchMap(() =>
				this.rolesService.getAllRoles().pipe(
					map((roles: Role[]) => RolesActions.onGetAllRolesSuccess({ roles })),
					catchError((error: HttpErrorResponse) =>
						of(RolesActions.onGetAllRolesFailure({ error }))
					)
				)
			)
		)
	);

	constructor(
		private actions$: Actions,
		private rolesService: RolesService,
		private store: Store<RolesState>
	) {}
}
