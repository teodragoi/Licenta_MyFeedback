import { HttpErrorResponse } from '@angular/common/http';
import { Project } from '@ng-arch/ng-arch/projects-management/types';
import { Action, createReducer, on } from '@ngrx/store';
import * as ProjectDetailsActions from './project-details.actions';

export interface ProjectDetailsState {
	error: HttpErrorResponse | null;
	isLoading: boolean;
	project: Project | null;
}

const initialState: ProjectDetailsState = {
	error: null,
	isLoading: false,
	project: null,
};

export const projectDetailsFeatureKey = 'projectDetails';

const reducer = createReducer(
	initialState,
	on(
		ProjectDetailsActions.editProject,
		ProjectDetailsActions.getProjectDetails,
		ProjectDetailsActions.addFeedbackTemplate,
		ProjectDetailsActions.deleteFeedbackTemplate,
		(state) => ({
			...state,
			isLoading: true,
		})
	),
	on(
		ProjectDetailsActions.onEditProjectSuccess,
		ProjectDetailsActions.onAddFeedbackTemplateSuccess,
		ProjectDetailsActions.onDeleteFeedbackTemplateSuccess,
		(state, { project }) => ({
			...state,
			isLoading: false,
			...project,
		})
	),
	on(
		ProjectDetailsActions.onGetProjectDetailsSuccess,
		(state, { project }) => ({ ...state, isLoading: false, project })
	),
	on(
		ProjectDetailsActions.onEditProjectFailure,
		ProjectDetailsActions.onGetProjectDetailsFailure,
		ProjectDetailsActions.onAddFeedbackTemplateFailure,
		ProjectDetailsActions.onDeleteFeedbackTemplateFailure,
		(state, { error }) => ({
			...state,
			isLoading: false,
			error,
		})
	)
);

export function projectDetailsReducer(
	state: ProjectDetailsState,
	action: Action
) {
	return reducer(state, action);
}
