import { Injectable } from '@angular/core';
import { Project } from '@ng-arch/ng-arch/projects-management/types';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ProjectsActions from './projects.actions';
import { ProjectsState } from './projects.reducers';
import * as ProjectsSelectors from './projects.selectors';

@Injectable({ providedIn: 'root' })
export class ProjectsFacade {
	public isLoading$: Observable<boolean> = this.store.select(
		ProjectsSelectors.selectIsLoading
	);

	public projects$: Observable<Project[]> = this.store.select(
		ProjectsSelectors.selectProjects
	);

	constructor(private store: Store<ProjectsState>) {}

	public dispatchAddProject(project: Project): void {
		this.store.dispatch(ProjectsActions.addProject({ project }));
	}

	public dispatchDeleteProject(projectId: string): void {
		this.store.dispatch(ProjectsActions.deleteProject({ projectId }));
	}

	public dispatchGetAllProjects(): void {
		this.store.dispatch(ProjectsActions.getAllProjects());
	}

	public dispatchGetProjectsByEmployee(employeeId: string): void {
		this.store.dispatch(ProjectsActions.getProjectsByEmployee({ employeeId }));
	}
}
