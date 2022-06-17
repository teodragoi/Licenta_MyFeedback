import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesFacade } from '@ng-arch/ng-arch/employees-management/data-access';
import {
	Employee,
	EmployeesVmData,
} from '@ng-arch/ng-arch/employees-management/types';
import { UsersFacade } from '@ng-arch/ng-arch/users/data-access';
import { User } from '@ng-arch/ng-arch/users/types';
import { TableActions } from '@ng-arch/shared/types';
import { AddUserModalComponent } from './add-user-modal/add-user-modal.component';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ManageEmployeesService } from '../manage-employees.service';

@Component({
	selector: 'ng-arch-manage-employees',
	templateUrl: './manage-employees.component.html',
	styleUrls: ['./manage-employees.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageEmployeesComponent implements OnInit {
	public vmData$: Observable<EmployeesVmData> =
		this.manageEmployeesService.vmData$;

	constructor(
		private dialog: MatDialog,
		private employeesFacade: EmployeesFacade,
		private manageEmployeesService: ManageEmployeesService,
		private route: ActivatedRoute,
		private router: Router,
		private usersFacade: UsersFacade
	) {}

	public ngOnInit(): void {
		this.employeesFacade.dispatchGetAllEmployees();
	}

	public onActionSelected(event: { action: TableActions; element: Employee }) {
		if (event.action === TableActions.DELETE) {
			this.employeesFacade.dispatchDeleteEmployee(event.element._id ?? '');
		}
	}

	public onRowClicked(element: Employee): void {
		this.router.navigate([`./${element._id}`], { relativeTo: this.route });
	}

	public openAddUserModal(): void {
		const dialogRef: MatDialogRef<AddUserModalComponent> = this.dialog.open(
			AddUserModalComponent,
			{ width: '500px' }
		);

		dialogRef
			.afterClosed()
			.pipe(take(1))
			.subscribe((user: User) => {
				console.log(user);
				this.usersFacade.dispatchAddUser(user);
			});
	}
}
