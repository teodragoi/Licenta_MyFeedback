import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectDetailsFacade } from '@ng-arch/ng-arch/project-details/data-access';
import { ProjectDetailsVmData } from '@ng-arch/ng-arch/projects-management/types';
import { Observable } from 'rxjs';
import { ManageProjectsService } from '../manage-projects.service';

@Component({
	selector: 'ng-arch-project-details',
	templateUrl: './project-details.component.html',
	styleUrls: ['./project-details.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailsComponent implements OnInit {
	public vmData$: Observable<ProjectDetailsVmData> =
		this.manageProjectsService.projectDetailsData$;

	constructor(
		private manageProjectsService: ManageProjectsService,
		private projectDetailsFacade: ProjectDetailsFacade,
		private route: ActivatedRoute
	) {}

	public ngOnInit(): void {
		this.projectDetailsFacade.dispatchGetProjectDetails(
			this.route.snapshot.params['projectId']
		);
	}
}
