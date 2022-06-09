import { HttpErrorResponse } from '@angular/common/http';
import { FeedbackTemplate } from '@ng-arch/ng-arch/feedback-templates/types';
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

export const addFeedbackTemplate = createAction(
	'[Feedback Templates] Add FeedbackTemplate',
	props<{ feedbackTemplate: FeedbackTemplate }>()
);

export const onAddFeedbackTemplateSuccess = createAction(
	'[Feedback Templates] On Add FeedbackTemplate Success',
	props<{ project: Project }>()
);

export const onAddFeedbackTemplateFailure = createAction(
	'[Feedback Templates] On Add FeedbackTemplate Failure',
	props<{ error: HttpErrorResponse }>()
);

export const deleteFeedbackTemplate = createAction(
	'[Feedback Templates] Delete Feedback Template',
	props<{ feedbackTemplateId: string }>()
);

export const onDeleteFeedbackTemplateSuccess = createAction(
	'[Feedback Templates] On Delete Feedback Template Success',
	props<{ project: Project }>()
);

export const onDeleteFeedbackTemplateFailure = createAction(
	'[Feedback Templates] On Delete Feedback Template Failure',
	props<{ error: HttpErrorResponse }>()
);
