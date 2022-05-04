import { HttpErrorResponse } from '@angular/common/http';
import { ProjectDTO } from '@ng-arch/ng-arch/projects-management/types';
import { Action, createReducer, on } from '@ngrx/store';
import { mockedProjects } from '../project.mocks';
import * as ProjectsActions from './projects.actions';

export interface ProjectsState {
	error: HttpErrorResponse | null;
	isLoading: boolean;
	projects: ProjectDTO[];
}

const initialState: ProjectsState = {
	error: null,
	isLoading: false,
	projects: mockedProjects,
};

export const projectsFeatureKey = 'projects';

const reducer = createReducer(
	initialState,
	on(ProjectsActions.addProject, (state) => ({
		...state,
		isLoading: true,
	})),
	on(ProjectsActions.onAddProjectSuccess, (state, { projectDTO }) => ({
		...state,
		isLoading: false,
		projects: [...state.projects, projectDTO],
	})),
	on(ProjectsActions.deleteProject, (state, { projectDTO }) => ({
		...state,
		isLoading: true,
	})),
	on(ProjectsActions.onDeleteProjectSuccess, (state, { projectDTO }) => ({
		...state,
		isLoading: false,
		projects: state.projects.filter(
			(project: ProjectDTO) => project.id !== projectDTO.id
		),
	}))
);

export function projectsReducer(state: ProjectsState, action: Action) {
	return reducer(state, action);
}
