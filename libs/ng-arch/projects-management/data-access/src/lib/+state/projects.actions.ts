import {
	Project,
	ProjectDTO,
} from '@ng-arch/ng-arch/projects-management/types';
import { createAction, props } from '@ngrx/store';

export const addProject = createAction(
	'[Projects] Add Project',
	props<{ project: Project }>()
);

export const onAddProjectSuccess = createAction(
	'[Projects] On Add Project Success',
	props<{ projectDTO: ProjectDTO }>()
);

export const deleteProject = createAction(
	'[Projects] Delete Project',
	props<{ projectDTO: ProjectDTO }>()
);

export const onDeleteProjectSuccess = createAction(
	'[Projects] On Delete Project Success',
	props<{ projectDTO: ProjectDTO }>()
);
