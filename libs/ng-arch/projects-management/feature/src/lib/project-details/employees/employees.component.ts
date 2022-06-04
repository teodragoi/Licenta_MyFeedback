import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Employee } from '@ng-arch/ng-arch/employees-management/types';
import { ProjectDetailsFacade } from '@ng-arch/ng-arch/project-details/data-access';
import { Project } from '@ng-arch/ng-arch/projects-management/types';
import { ListData } from '@ng-arch/shared/types';
import { take } from 'rxjs/operators';
import { EmployeeAssignmentModalComponent } from '../../employee-assignment-modal/employee-assignment-modal.component';

@Component({
	selector: 'ng-arch-project-details-employees',
	templateUrl: './employees.component.html',
	styleUrls: ['./employees.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailsEmployeesComponent {
	@Input() public assignedEmployees: ListData[] | undefined;
	@Input() public project: Project | null;

	constructor(
		private dialog: MatDialog,
		private projectDetailsFacade: ProjectDetailsFacade
	) {}

	public onAssignButtonClicked(): void {
		if (!this.project) {
			return;
		}

		const dialogRef: MatDialogRef<EmployeeAssignmentModalComponent> =
			this.dialog.open(EmployeeAssignmentModalComponent, {
				data: { project: this.project },
				minWidth: 500,
				maxWidth: 700,
				maxHeight: 600,
			});

		dialogRef
			.afterClosed()
			.pipe(take(1))
			.subscribe((dialogData: { employees: Employee[] } | null | undefined) => {
				if (!dialogData) {
					return;
				}

				this.projectDetailsFacade.dispatchEditProject(this.project?._id ?? '', {
					employees: dialogData.employees,
				});
			});
	}
}
