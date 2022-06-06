import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesFacade } from '@ng-arch/ng-arch/employees-management/data-access';
import {
	Employee,
	EmployeesVmData,
} from '@ng-arch/ng-arch/employees-management/types';
import { TableActions } from '@ng-arch/shared/types';
import { Observable } from 'rxjs';
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
		private employeesFacade: EmployeesFacade,
		private manageEmployeesService: ManageEmployeesService,
		private route: ActivatedRoute,
		private router: Router
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
}
