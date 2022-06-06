import { Injectable } from '@angular/core';
import { EmployeesFacade } from '@ng-arch/ng-arch/employees-management/data-access';
import {
	Employee,
	EmployeesVmData,
} from '@ng-arch/ng-arch/employees-management/types';
import {
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

	constructor(private employeesFacade: EmployeesFacade) {}

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
}
