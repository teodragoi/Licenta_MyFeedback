import { HttpErrorResponse } from '@angular/common/http';
import { Project } from '@ng-arch/ng-arch/projects-management/types';
import { createAction, props } from '@ngrx/store';

export const addProject = createAction(
	'[Projects] Add Project',
	props<{ project: Project }>()
);

export const onAddProjectSuccess = createAction(
	'[Projects] On Add Project Success',
	props<{ project: Project }>()
);

export const onAddProjectFailure = createAction(
	'[Projects] On Add Project Failure',
	props<{ error: HttpErrorResponse }>()
);

export const deleteProject = createAction(
	'[Projects] Delete Project',
	props<{ projectId: string }>()
);

export const onDeleteProjectSuccess = createAction(
	'[Projects] On Delete Project Success',
	props<{ projectId: string }>()
);

export const onDeleteProjectFailure = createAction(
	'[Projects] On Delete Project Failure',
	props<{ error: HttpErrorResponse }>()
);

export const getAllProjects = createAction('[Projects] Get All Projects');

export const onGetAllProjectsSuccess = createAction(
	'[Projects] On Get All Projects Success',
	props<{ projects: Project[] }>()
);

export const onGetAllProjectsFailure = createAction(
	'[Projects] On Get All Projects Failure',
	props<{ error: HttpErrorResponse }>()
);

export const getProjectsByEmployee = createAction(
	'[Projects] Get Projects By Employee',
	props<{ employeeId: string }>()
);

export const onGetProjectsByEmployeeSuccess = createAction(
	'[Projects] On Get Projects By Employee Success',
	props<{ projects: Project[] }>()
);

export const onGetProjectsByEmployeeFailure = createAction(
	'[Projects] On Get Projects By Employee Failure',
	props<{ error: HttpErrorResponse }>()
);
