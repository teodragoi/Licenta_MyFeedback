import { HttpErrorResponse } from '@angular/common/http';
import { Project } from '@ng-arch/ng-arch/projects-management/types';
import { Action, createReducer, on } from '@ngrx/store';
import { mockedProjects } from '../project.mocks';
import * as ProjectsActions from './projects.actions';

export interface ProjectsState {
	error: HttpErrorResponse | null;
	isLoading: boolean;
	projects: Project[];
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
	on(ProjectsActions.onAddProjectSuccess, (state, { project }) => ({
		...state,
		isLoading: false,
		projects: [...state.projects, project],
	})),
	on(ProjectsActions.deleteProject, (state) => ({
		...state,
		isLoading: true,
	})),
	on(ProjectsActions.onDeleteProjectSuccess, (state, { project }) => ({
		...state,
		isLoading: false,
		projects: state.projects.filter(
			(projectState: Project) => projectState.id !== project.id
		),
	}))
);

export function projectsReducer(state: ProjectsState, action: Action) {
	return reducer(state, action);
}
