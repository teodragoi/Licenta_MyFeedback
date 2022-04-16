import { createFeatureSelector, createSelector } from '@ngrx/store';
import { hierarchyFeatureKey, HierarchyState } from './hierarchy-reducers';

const getHierarchyState =
	createFeatureSelector<HierarchyState>(hierarchyFeatureKey);

export const selectIsLoading = createSelector(
	getHierarchyState,
	(state: HierarchyState) => state.isLoading
);

export const selectRoles = createSelector(
	getHierarchyState,
	(state: HierarchyState) => state.roles
);
