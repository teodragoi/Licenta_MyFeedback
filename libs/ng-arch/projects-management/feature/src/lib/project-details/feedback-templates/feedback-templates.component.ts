import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FeedbackTemplateFacade } from '@ng-arch/ng-arch/feedback-templates/data-access';
import { FeedbackTemplate } from '@ng-arch/ng-arch/feedback-templates/types';
import { ProjectDetailsFacade } from '@ng-arch/ng-arch/project-details/data-access';
import { TableActions, TableConfig } from '@ng-arch/shared/types';
import { filter, take } from 'rxjs/operators';
import { AddTemplateModalComponent } from './add-template-modal/add-template-modal.component';
import { EditTemplateModalComponent } from './edit-template-modal/edit-template-modal.component';

@Component({
	selector: 'ng-arch-feedback-templates',
	templateUrl: './feedback-templates.component.html',
	styleUrls: ['./feedback-templates.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedbackTemplatesComponent {
	@Input() config: TableConfig<FeedbackTemplate>;

	constructor(
		private dialog: MatDialog,
		private projectDetailsFacade: ProjectDetailsFacade,
		private feedbackTemplateFacade: FeedbackTemplateFacade
	) {}

	public openAddTemplateModal(): void {
		const dialogRef: MatDialogRef<AddTemplateModalComponent> = this.dialog.open(
			AddTemplateModalComponent,
			{
				width: '500px',
			}
		);

		dialogRef
			.afterClosed()
			.pipe(
				filter((feedbackTemplate: FeedbackTemplate) => !!feedbackTemplate),
				take(1)
			)
			.subscribe((feedbackTemplate: FeedbackTemplate) => {
				this.projectDetailsFacade.dispatchAddFeedbackTemplate(feedbackTemplate);
			});
	}

	public onActionSelected(event: {
		action: TableActions;
		element: FeedbackTemplate;
	}): void {
		if (event.action === TableActions.EDIT) {
			const dialogRef: MatDialogRef<EditTemplateModalComponent> =
				this.dialog.open(EditTemplateModalComponent, {
					width: '500px',
					data: { feedbackTemplateId: event.element._id },
				});

			dialogRef
				.afterClosed()
				.pipe(
					filter((feedbackTemplate: FeedbackTemplate) => !!feedbackTemplate),
					take(1)
				)
				.subscribe((feedbackTemplate: FeedbackTemplate) => {
					this.feedbackTemplateFacade.dispatchEditFeedbackTemplate(
						event.element._id ?? '',
						feedbackTemplate
					);
				});

			return;
		}

		if (event.action === TableActions.DELETE) {
			this.projectDetailsFacade.dispatchDeleteFeedbackTemplate(
				event.element._id ?? ''
			);
		}
	}
}
