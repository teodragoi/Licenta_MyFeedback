import { HttpErrorResponse } from '@angular/common/http';
import { User } from '@ng-arch/ng-arch/users/types';
import { createAction, props } from '@ngrx/store';

export const getUserDetails = createAction(
	'[User Details] Get User Details',
	props<{ userId: string }>()
);

export const onGetUserDetailsSuccess = createAction(
	'[User Details] On Get User Details Success',
	props<{ user: User }>()
);

export const onGetUserDetailsFailure = createAction(
	'[User Details] On Get User Details Failure',
	props<{ error: HttpErrorResponse }>()
);

export const editUserDetails = createAction(
	'[User Details] Edit User Details',
	props<{ userId: string; user: Partial<User> }>()
);

export const onEditUserDetailsSuccess = createAction(
	'[User Details] On Edit User Details Success',
	props<{ user: User }>()
);

export const onEditUserDetailsFailure = createAction(
	'[User Details] On Edit User Details Success',
	props<{ error: HttpErrorResponse }>()
);

export const editUserPassword = createAction(
	'[User Details] Edit User Password',
	props<{ userId: string; password: string }>()
);

export const onEditUserPasswordSuccess = createAction(
	'[User Details] On Edit User Password Success',
	props<{ user: User }>()
);

export const onEditUserPasswordFailure = createAction(
	'[User Details] On Edit User Password Failure',
	props<{ error: HttpErrorResponse }>()
);
