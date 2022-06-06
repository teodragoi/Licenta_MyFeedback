import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { EmployeesFacade } from '@ng-arch/ng-arch/employees-management/data-access';
import {
	Employee,
	EmployeesVmData,
} from '@ng-arch/ng-arch/employees-management/types';
import { TableActions } from '@ng-arch/shared/types';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ManageEmployeesService } from '../manage-employees.service';

@Component({
	selector: 'ng-arch-manage-employees',
	templateUrl: './manage-employees.component.html',
	styleUrls: ['./manage-employees.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageEmployeesComponent implements OnInit {
	public vmData$: Observable<EmployeesVmData> =
		this.manageEmployeesService.vmData$.pipe(
			tap((res) => {
				console.log(res);
			})
		);

	constructor(
		private employeesFacade: EmployeesFacade,
		private manageEmployeesService: ManageEmployeesService
	) {}

	public ngOnInit(): void {
		this.employeesFacade.dispatchGetAllEmployees();
	}

	public onActionSelected(event: { action: TableActions; element: Employee }) {
		console.log(event);
	}
}
