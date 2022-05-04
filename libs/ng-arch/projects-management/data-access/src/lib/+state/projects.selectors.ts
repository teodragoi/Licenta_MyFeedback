import { createFeatureSelector, createSelector } from '@ngrx/store';
import { projectsFeatureKey, ProjectsState } from './projects.reducers';

const getProjectsState =
	createFeatureSelector<ProjectsState>(projectsFeatureKey);

export const selectIsLoading = createSelector(
	getProjectsState,
	(state: ProjectsState) => state.isLoading
);

export const selectProjects = createSelector(
	getProjectsState,
	(state: ProjectsState) => state.projects
);
