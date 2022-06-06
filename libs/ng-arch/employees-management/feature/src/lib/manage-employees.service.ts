import { Injectable } from '@angular/core';
import { EmployeeDetailsFacade } from '@ng-arch/ng-arch/employee-details/data-access';
import { EmployeesFacade } from '@ng-arch/ng-arch/employees-management/data-access';
import {
	Employee,
	EmployeeDetailsVmData,
	EmployeesVmData,
} from '@ng-arch/ng-arch/employees-management/types';
import { Role } from '@ng-arch/ng-arch/roles-management/types';
import {
	ListData,
	TableActions,
	TableColumnType,
	TableConfig,
} from '@ng-arch/shared/types';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class ManageEmployeesService {
	public vmData$: Observable<EmployeesVmData> = combineLatest([
		this.employeesFacade.isLoading$,
		this.employeesFacade.employees$,
	]).pipe(
		map(([isLoading, employees]) => ({
			isLoading,
			employeesTableConfig: this.buildTableConfig(employees),
		}))
	);

	public detailsVmData$: Observable<EmployeeDetailsVmData> = combineLatest([
		this.employeeDetailsFacade.isLoading$,
		this.employeeDetailsFacade.employee$,
	]).pipe(
		map(([isLoading, employee]) => ({
			isLoading,
			employee,
			assignedRoles: this.buildAssignedRolesData(employee),
		}))
	);

	constructor(
		private employeesFacade: EmployeesFacade,
		private employeeDetailsFacade: EmployeeDetailsFacade
	) {}

	private buildTableConfig(employees: Employee[]): TableConfig<Employee> {
		return {
			columns: [
				{
					name: 'table.name',
					propertyName: 'name',
					type: TableColumnType.DATA,
				},
				{
					name: 'table.email',
					propertyName: 'email',
					type: TableColumnType.DATA,
				},
				{
					name: 'common.actions',
					type: TableColumnType.ACTION,
					actions: [TableActions.DELETE],
				},
			],
			data: employees,
		};
	}

	private buildAssignedRolesData(
		employee: Employee | null
	): ListData[] | undefined {
		if (!employee?.roles?.length) {
			return undefined;
		}

		return employee.roles.map((role: Role) => ({
			label: role.name,
			value: role._id,
		}));
	}
}
