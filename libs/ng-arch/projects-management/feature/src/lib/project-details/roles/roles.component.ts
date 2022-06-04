import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProjectDetailsFacade } from '@ng-arch/ng-arch/project-details/data-access';
import { Project } from '@ng-arch/ng-arch/projects-management/types';
import { RoleAssignmentModalComponent } from '@ng-arch/ng-arch/roles-management/feature';
import { Role } from '@ng-arch/ng-arch/roles-management/types';
import { ListData } from '@ng-arch/shared/types';
import { take } from 'rxjs/operators';

@Component({
	selector: 'ng-arch-project-details-roles',
	templateUrl: './roles.component.html',
	styleUrls: ['./roles.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RolesComponent {
	@Input() public availableRoles: ListData[] | undefined;
	@Input() public project: Project | null;

	constructor(
		private dialog: MatDialog,
		private projectDetailsFacade: ProjectDetailsFacade
	) {}

	public onAssignButtonClicked(): void {
		if (!this.project) {
			return;
		}

		const dialogRef: MatDialogRef<RoleAssignmentModalComponent> =
			this.dialog.open(RoleAssignmentModalComponent, {
				data: {
					roles: this.availableRoles?.map(
						(listData: ListData) => listData.value
					),
				},
				minWidth: 500,
				maxWidth: 700,
				maxHeight: 600,
			});

		dialogRef
			.afterClosed()
			.pipe(take(1))
			.subscribe((dialogData: { roles: Role[] } | null | undefined) => {
				if (!dialogData) {
					return;
				}

				this.projectDetailsFacade.dispatchEditProject(this.project?._id ?? '', {
					availableRoles: dialogData.roles,
				});
			});
	}
}
