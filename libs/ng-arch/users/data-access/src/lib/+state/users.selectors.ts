import { createFeatureSelector, createSelector } from '@ngrx/store';
import { usersFeatureKey, UsersState } from './users.reducers';

const getUsersState = createFeatureSelector<UsersState>(usersFeatureKey);

export const selectIsLoading = createSelector(
	getUsersState,
	(state: UsersState) => state.isLoading
);

export const selectUsers = createSelector(
	getUsersState,
	(state: UsersState) => state.users
);
