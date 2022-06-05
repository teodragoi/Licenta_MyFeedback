import { HttpErrorResponse } from '@angular/common/http';
import { User } from '@ng-arch/ng-arch/users/types';
import { Action, createReducer, on } from '@ngrx/store';

import * as UsersActions from './users.actions';

export interface UsersState {
	error: HttpErrorResponse | null;
	isLoading: boolean;
	users: User[];
}

const initialState: UsersState = {
	error: null,
	isLoading: false,
	users: [],
};

export const usersFeatureKey = 'user';

const reducer = createReducer(
	initialState,
	on(
		UsersActions.getUsers,
		UsersActions.addUser,
		UsersActions.deleteUser,
		(state) => ({
			...state,
			isLoading: true,
		})
	),
	on(UsersActions.onGetUsersSuccess, (state, { users }) => ({
		...state,
		isLoading: false,
		users,
	})),
	on(UsersActions.addUser, (state, { user }) => ({
		...state,
		isLoading: false,
		users: [...state.users, user],
	})),
	on(UsersActions.onDeleteUserSuccess, (state, { userId }) => ({
		...state,
		isLoading: false,
		users: state.users.filter((user: User) => user._id !== userId),
	})),
	on(
		UsersActions.onGetUsersFailure,
		UsersActions.onAddUserFailure,
		UsersActions.onDeleteUserFailure,
		(state, { error }) => ({
			...state,
			isLoading: false,
			error,
		})
	)
);

export function usersReducer(state: UsersState, action: Action) {
	return reducer(state, action);
}
