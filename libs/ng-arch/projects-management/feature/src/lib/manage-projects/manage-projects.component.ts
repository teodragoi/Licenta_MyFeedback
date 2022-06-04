import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsFacade } from '@ng-arch/ng-arch/projects-management/data-access';
import {
	Project,
	ProjectsVmData,
} from '@ng-arch/ng-arch/projects-management/types';
import { TableActions } from '@ng-arch/shared/types';
import { Observable } from 'rxjs';

import { ManageProjectsService } from '../manage-projects.service';

@Component({
	selector: 'ng-arch-manage-projects',
	templateUrl: './manage-projects.component.html',
	styleUrls: ['./manage-projects.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageProjectsComponent implements OnInit {
	public vmData$: Observable<ProjectsVmData> =
		this.manageProjectsService.projectsData$;

	constructor(
		private manageProjectsService: ManageProjectsService,
		private projectsFacade: ProjectsFacade,
		private route: ActivatedRoute,
		private router: Router
	) {}

	public ngOnInit(): void {
		this.projectsFacade.dispatchGetAllProjects();
	}

	public onActionSelected(event: {
		action: TableActions;
		element: Project;
	}): void {
		if (event.action === TableActions.DELETE) {
			this.projectsFacade.dispatchDeleteProject(event.element._id ?? '');
		}
	}

	public onRowClicked(element: Project): void {
		this.router.navigate([`./${element._id}`], { relativeTo: this.route });
	}
}
