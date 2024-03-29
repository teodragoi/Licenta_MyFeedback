import { createFeatureSelector, createSelector } from '@ngrx/store';
import { rolesFeatureKey, RolesState } from './roles.reducers';

const getRolesState = createFeatureSelector<RolesState>(rolesFeatureKey);

export const selectIsLoading = createSelector(
	getRolesState,
	(state: RolesState) => state.isLoading
);

export const selectRoles = createSelector(
	getRolesState,
	(state: RolesState) => state.roles
);
