import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { EmployeeDetailsFacade } from '@ng-arch/ng-arch/employee-details/data-access';
import {
	Employee,
	EmployeeDetailsVmData,
} from '@ng-arch/ng-arch/employees-management/types';
import { RoleAssignmentModalComponent } from '@ng-arch/ng-arch/roles-management/feature';
import { Role } from '@ng-arch/ng-arch/roles-management/types';
import { ListData } from '@ng-arch/shared/types';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { ManageEmployeesService } from '../manage-employees.service';

@Component({
	selector: 'ng-arch-employee-details',
	templateUrl: './employee-details.component.html',
	styleUrls: ['./employee-details.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetailsComponent implements OnInit {
	public vmData$: Observable<EmployeeDetailsVmData> =
		this.manageEmployeesService.detailsVmData$;

	constructor(
		private dialog: MatDialog,
		private employeeDetailsFacade: EmployeeDetailsFacade,
		private manageEmployeesService: ManageEmployeesService,
		private route: ActivatedRoute
	) {}

	public ngOnInit(): void {
		this.employeeDetailsFacade.dispatchGetEmployeeDetails(
			this.route.snapshot.params['employeeId']
		);
	}

	public onAssignButtonClicked(
		employee: Employee | null,
		assignedRoles: ListData[] | undefined
	): void {
		if (!employee) {
			return;
		}

		const dialogRef: MatDialogRef<RoleAssignmentModalComponent> =
			this.dialog.open(RoleAssignmentModalComponent, {
				data: {
					roles:
						assignedRoles?.map((listData: ListData) => listData.value) ?? [],
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

				this.employeeDetailsFacade.dispatchEditEmployeeDetails(
					employee?._id ?? '',
					{
						roles: dialogData.roles,
					}
				);
			});
	}
}
