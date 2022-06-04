import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { EmployeesState } from './employees.reducers';

import * as EmployeesActions from './employees.actions';
import * as EmployeesSelectors from './employees.selectors';
import { Observable } from 'rxjs';
import { Employee } from '@ng-arch/ng-arch/employees-management/types';

@Injectable({
	providedIn: 'root',
})
export class EmployeesFacade {
	public isLoading$: Observable<boolean> = this.store.select(
		EmployeesSelectors.selectIsLoading
	);

	public employees$: Observable<Employee[]> = this.store.select(
		EmployeesSelectors.selectEmployees
	);

	constructor(private store: Store<EmployeesState>) {}

	public dispatchGetAllEmployees(): void {
		this.store.dispatch(EmployeesActions.getAllEmployees());
	}

	public dispatchGetEmployeesByRole(roles: string[]): void {
		this.store.dispatch(EmployeesActions.getEmployeesByRole({ roles }));
	}
}
