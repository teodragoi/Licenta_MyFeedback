import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UsersService } from '../users.service';

import * as UsersActions from './users.actions';

@Injectable()
export class UsersEffects {
	public getUserDetails$ = createEffect(() =>
		this.actions$.pipe(
			ofType(UsersActions.getUsers),
			switchMap(() =>
				this.usersService.getUsers().pipe(
					map((users) => UsersActions.onGetUsersSuccess({ users })),
					catchError((error) => of(UsersActions.onGetUsersFailure({ error })))
				)
			)
		)
	);

	public addUser$ = createEffect(() =>
		this.actions$.pipe(
			ofType(UsersActions.addUser),
			switchMap(({ user }) =>
				this.usersService.addUser(user).pipe(
					map((user) => UsersActions.onAddUserSuccess({ user })),
					catchError((error) => of(UsersActions.onAddUserFailure({ error })))
				)
			)
		)
	);

	public deleteUser$ = createEffect(() =>
		this.actions$.pipe(
			ofType(UsersActions.deleteUser),
			switchMap(({ userId }) =>
				this.usersService.deleteUser(userId).pipe(
					map(() => UsersActions.onDeleteUserSuccess({ userId })),
					catchError((error: HttpErrorResponse) =>
						of(UsersActions.onDeleteUserFailure({ error }))
					)
				)
			)
		)
	);

	constructor(private actions$: Actions, private usersService: UsersService) {}
}
