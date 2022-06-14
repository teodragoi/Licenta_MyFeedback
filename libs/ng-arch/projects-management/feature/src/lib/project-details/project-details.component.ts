import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { FeedbacksFacade } from '@ng-arch/ng-arch/feedback/data-access';
import { ProjectDetailsFacade } from '@ng-arch/ng-arch/project-details/data-access';
import { ProjectDetailsVmData } from '@ng-arch/ng-arch/projects-management/types';
import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { ManageProjectsService } from '../manage-projects.service';
import { RequestFeedbackModalComponent } from '../request-feedback-modal/request-feedback-modal.component';

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
		private dialog: MatDialog,
		private feedbacksFacade: FeedbacksFacade,
		private manageProjectsService: ManageProjectsService,
		private projectDetailsFacade: ProjectDetailsFacade,
		private route: ActivatedRoute
	) {}

	public ngOnInit(): void {
		this.projectDetailsFacade.dispatchGetProjectDetails(
			this.route.snapshot.params['projectId']
		);
	}

	public onRequestFeedbackClick(): void {
		const dialogRef: MatDialogRef<RequestFeedbackModalComponent> =
			this.dialog.open(RequestFeedbackModalComponent, { width: '500px' });

		dialogRef
			.afterClosed()
			.pipe(
				filter((value) => !!value),
				take(1)
			)
			.subscribe(
				(value: {
					employeeId: string;
					templateId: string;
					fromEmployeeIds: string[];
				}) => {
					this.feedbacksFacade.dispatchRequestFeedback(
						value.employeeId,
						value.templateId,
						value.fromEmployeeIds
					);
				}
			);
	}
}
