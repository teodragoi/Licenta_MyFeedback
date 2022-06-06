import { Injectable } from '@angular/core';
import { Employee } from '@ng-arch/ng-arch/employees-management/types';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as EmployeeDetailsActions from './employee-details.actions';
import { EmployeeDetailsState } from './employee-details.reducers';
import * as EmployeeDetailsSelectors from './employee-details.selectors';

@Injectable({
	providedIn: 'root',
})
export class EmployeeDetailsFacade {
	public isLoading$: Observable<boolean> = this.store.select(
		EmployeeDetailsSelectors.selectIsLoading
	);

	public employee$: Observable<Employee | null> = this.store.select(
		EmployeeDetailsSelectors.selectEmployee
	);

	constructor(private store: Store<EmployeeDetailsState>) {}

	public dispatchGetEmployeeDetails(employeeId: string): void {
		this.store.dispatch(
			EmployeeDetailsActions.getEmployeeDetails({ employeeId })
		);
	}

	public dispatchEditEmployeeDetails(
		employeeId: string,
		employee: Partial<Employee>
	): void {
		this.store.dispatch(
			EmployeeDetailsActions.editEmployeeDetails({ employeeId, employee })
		);
	}
}
