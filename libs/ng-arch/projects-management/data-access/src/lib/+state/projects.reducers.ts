import { HttpErrorResponse } from '@angular/common/http';
import { Project } from '@ng-arch/ng-arch/projects-management/types';
import { Action, createReducer, on } from '@ngrx/store';

import * as ProjectsActions from './projects.actions';

export interface ProjectsState {
	error: HttpErrorResponse | null;
	isLoading: boolean;
	projects: Project[];
}

const initialState: ProjectsState = {
	error: null,
	isLoading: false,
	projects: [],
};

export const projectsFeatureKey = 'projects';

const reducer = createReducer(
	initialState,
	on(
		ProjectsActions.addProject,
		ProjectsActions.getAllProjects,
		ProjectsActions.deleteProject,
		ProjectsActions.getProjectsByEmployee,
		(state) => ({
			...state,
			isLoading: true,
		})
	),
	on(ProjectsActions.onAddProjectSuccess, (state, { project }) => ({
		...state,
		isLoading: false,
		projects: [...state.projects, project],
	})),
	on(ProjectsActions.onDeleteProjectSuccess, (state, { projectId }) => ({
		...state,
		isLoading: false,
		projects: state.projects.filter(
			(projectState: Project) => projectState._id !== projectId
		),
	})),
	on(
		ProjectsActions.onGetAllProjectsSuccess,
		ProjectsActions.onGetProjectsByEmployeeSuccess,
		(state, { projects }) => ({
			...state,
			isLoading: false,
			projects,
		})
	),
	on(
		ProjectsActions.onAddProjectFailure,
		ProjectsActions.onDeleteProjectFailure,
		ProjectsActions.onGetAllProjectsFailure,
		(state, { error }) => ({
			...state,
			isLoading: false,
			error,
		})
	)
);

export function projectsReducer(state: ProjectsState, action: Action) {
	return reducer(state, action);
}
