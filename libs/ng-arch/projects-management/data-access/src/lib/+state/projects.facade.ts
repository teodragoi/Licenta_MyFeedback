import { Injectable } from '@angular/core';
import { Project, ProjectDTO } from '@ng-arch/ng-arch/projects-management/types';
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

	public projects$: Observable<ProjectDTO[]> = this.store.select(
		ProjectsSelectors.selectProjects
	);

	constructor(private store: Store<ProjectsState>) {}

	public dispatchAddProject(project: Project): void {
		this.store.dispatch(ProjectsActions.addProject({ project }));
	}

	public dispatchDeleteProject(projectDTO: ProjectDTO): void {
		this.store.dispatch(ProjectsActions.deleteProject({ projectDTO }));
	}
}
