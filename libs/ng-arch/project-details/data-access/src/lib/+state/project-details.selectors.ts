import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
	projectDetailsFeatureKey,
	ProjectDetailsState,
} from './project-details.reducers';

const getProjectDetailsState = createFeatureSelector<ProjectDetailsState>(
	projectDetailsFeatureKey
);

export const selectIsLoading = createSelector(
	getProjectDetailsState,
	(state: ProjectDetailsState) => state.isLoading
);

export const selectProject = createSelector(
	getProjectDetailsState,
	(state: ProjectDetailsState) => state.project
);
