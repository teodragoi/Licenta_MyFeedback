import { Project } from '@ng-arch/ng-arch/projects-management/types';
import { createAction, props } from '@ngrx/store';

export const addProject = createAction(
	'[Projects] Add Project',
	props<{ project: Project }>()
);

export const deleteProject = createAction(
	'[Projects] Delete Project',
	props<{ project: Project }>()
);
