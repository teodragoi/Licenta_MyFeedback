import { HttpErrorResponse } from '@angular/common/http';
import { Employee } from '@ng-arch/ng-arch/employees-management/types';
import { createAction, props } from '@ngrx/store';

export const getEmployeeDetails = createAction(
	'[Employee Details] Get Employee Details',
	props<{ employeeId: string }>()
);

export const onGetEmployeeDetailsSuccess = createAction(
	'[Employee Details] On Get Employee Details Success',
	props<{ employee: Employee }>()
);

export const onGetEmployeeDetailsFailure = createAction(
	'[Employee Details] On Get Employee Details Failure',
	props<{ error: HttpErrorResponse }>()
);

export const editEmployeeDetails = createAction(
	'[Employee Details] Edit Employee Details',
	props<{ employeeId: string; employee: Partial<Employee> }>()
);

export const onEditEmployeeDetailsSuccess = createAction(
	'[EmployeeDetails] On Edit Employee Details Success',
	props<{ employee: Employee }>()
);

export const onEditEmployeeDetailsFailure = createAction(
	'[EmployeeDetails] On Edit Employee Details Failure',
	props<{ error: HttpErrorResponse }>()
);
