import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@ng-arch/ng-arch/users/types';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserDetailsService } from '../user-details.service';

import * as UserDetailsActions from './user-details.actions';

@Injectable()
export class UserDetailsEffects {
	public getUserDetails$ = createEffect(() =>
		this.actions$.pipe(
			ofType(UserDetailsActions.getUserDetails),
			switchMap(({ userId }) =>
				this.userDetailsService.getUserDetails(userId).pipe(
					map((user: User) =>
						UserDetailsActions.onGetUserDetailsSuccess({ user })
					),
					catchError((error: HttpErrorResponse) =>
						of(UserDetailsActions.onGetUserDetailsFailure({ error }))
					)
				)
			)
		)
	);

	public editUserDetails$ = createEffect(() =>
		this.actions$.pipe(
			ofType(UserDetailsActions.editUserDetails),
			switchMap(({ userId, user }) =>
				this.userDetailsService.editUserDetails(userId, user).pipe(
					map((user: User) =>
						UserDetailsActions.onEditUserDetailsSuccess({ user })
					),
					catchError((error: HttpErrorResponse) =>
						of(UserDetailsActions.onEditUserDetailsFailure({ error }))
					)
				)
			)
		)
	);

	public editUserPassword$ = createEffect(() =>
		this.actions$.pipe(
			ofType(UserDetailsActions.editUserPassword),
			switchMap(({ userId, password }) =>
				this.userDetailsService.editUserPassword(userId, password).pipe(
					map((user: User) =>
						UserDetailsActions.onEditUserPasswordSuccess({ user })
					),
					catchError((error: HttpErrorResponse) =>
						of(UserDetailsActions.onEditUserPasswordFailure({ error }))
					)
				)
			)
		)
	);

	constructor(
		private actions$: Actions,
		private userDetailsService: UserDetailsService
	) {}
}
