import { HttpErrorResponse } from '@angular/common/http';
import { User } from '@ng-arch/ng-arch/users/types';
import { Action, createReducer, on } from '@ngrx/store';

import * as UserDetailsActions from './user-details.actions';

export interface UserDetailsState {
	error: HttpErrorResponse | null;
	isLoading: boolean;
	user: User | null;
}

const initialState: UserDetailsState = {
	error: null,
	isLoading: false,
	user: null,
};

export const userDetailsFeatureKey = 'userDetails';

const reducer = createReducer(
	initialState,
	on(
		UserDetailsActions.getUserDetails,
		UserDetailsActions.editUserDetails,
		UserDetailsActions.editUserPassword,
		(state) => ({
			...state,
			isLoading: true,
		})
	),
	on(
		UserDetailsActions.onGetUserDetailsSuccess,
		UserDetailsActions.onEditUserDetailsSuccess,
		UserDetailsActions.onEditUserPasswordSuccess,
		(state, { user }) => ({
			...state,
			isLoading: false,
			user,
		})
	),
	on(
		UserDetailsActions.onGetUserDetailsFailure,
		UserDetailsActions.onEditUserDetailsFailure,
		UserDetailsActions.onEditUserPasswordFailure,
		(state, { error }) => ({
			...state,
			isLoading: false,
			error,
		})
	)
);

export function userDetailsReducer(state: UserDetailsState, action: Action) {
	return reducer(state, action);
}
