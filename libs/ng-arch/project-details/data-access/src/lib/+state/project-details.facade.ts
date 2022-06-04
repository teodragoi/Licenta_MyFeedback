import { Injectable } from '@angular/core';
import { Project } from '@ng-arch/ng-arch/projects-management/types';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ProjectDetailsActions from './project-details.actions';
import { ProjectDetailsState } from './project-details.reducers';
import * as ProjectDetailsSelectors from './project-details.selectors';

@Injectable({
	providedIn: 'root',
})
export class ProjectDetailsFacade {
	public isLoading$: Observable<boolean> = this.store.select(
		ProjectDetailsSelectors.selectIsLoading
	);

	public project$: Observable<Project | null> = this.store.select(
		ProjectDetailsSelectors.selectProject
	);

	constructor(private store: Store<ProjectDetailsState>) {}

	public dispatchEditProject(
		projectId: string,
		project: Partial<Project>
	): void {
		this.store.dispatch(
			ProjectDetailsActions.editProject({ projectId, project })
		);
	}

	public dispatchGetProjectDetails(projectId: string): void {
		this.store.dispatch(ProjectDetailsActions.getProjectDetails({ projectId }));
	}
}
