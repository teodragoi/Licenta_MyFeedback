import { HttpErrorResponse } from '@angular/common/http';
import { User } from '@ng-arch/ng-arch/users/types';
import { createAction, props } from '@ngrx/store';

export const getUsers = createAction('[Users] Get Users');

export const onGetUsersSuccess = createAction(
	'[Users] On Get Users Success',
	props<{ users: User[] }>()
);

export const onGetUsersFailure = createAction(
	'[Users] On Get Users Failure',
	props<{ error: HttpErrorResponse }>()
);

export const addUser = createAction(
	'[Users] Add User',
	props<{ user: User }>()
);

export const onAddUserSuccess = createAction(
	'[Users] On Add User Success',
	props<{ user: User }>()
);

export const onAddUserFailure = createAction(
	'[Users] On Add User Failure',
	props<{ error: HttpErrorResponse }>()
);

export const deleteUser = createAction(
	'[Users] Delete user',
	props<{ userId: string }>()
);

export const onDeleteUserSuccess = createAction(
	'[Users] On Delete User Success',
	props<{ userId: string }>()
);

export const onDeleteUserFailure = createAction(
	'[Users] On Delete User Failure',
	props<{ error: HttpErrorResponse }>()
);
