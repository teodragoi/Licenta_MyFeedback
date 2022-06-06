import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
	userDetailsFeatureKey,
	UserDetailsState,
} from './user-details.reducers';

const getUserDetailsState = createFeatureSelector<UserDetailsState>(
	userDetailsFeatureKey
);

export const selectIsLoading = createSelector(
	getUserDetailsState,
	(state: UserDetailsState) => state.isLoading
);

export const selectUser = createSelector(
	getUserDetailsState,
	(state: UserDetailsState) => state.user
);
