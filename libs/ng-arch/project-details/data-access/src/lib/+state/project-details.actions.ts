import { HttpErrorResponse } from '@angular/common/http';
import { Project } from '@ng-arch/ng-arch/projects-management/types';
import { createAction, props } from '@ngrx/store';

export const editProject = createAction(
	'[Project Details] Edit Project',
	props<{ projectId: string; project: Partial<Project> }>()
);

export const onEditProjectSuccess = createAction(
	'[Project Details] On Edit Project Success',
	props<{ project: Project }>()
);

export const onEditProjectFailure = createAction(
	'[Project Details] On Edit Project Failure',
	props<{ error: HttpErrorResponse }>()
);

export const getProjectDetails = createAction(
	'[Project Details] Get Project Details',
	props<{ projectId: string }>()
);

export const onGetProjectDetailsSuccess = createAction(
	'[Project Details] On Get Project Details Success',
	props<{ project: Project }>()
);

export const onGetProjectDetailsFailure = createAction(
	'[Project Details] On Get Project Details Failure',
	props<{ error: HttpErrorResponse }>()
);
