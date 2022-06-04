import { HttpErrorResponse } from '@angular/common/http';
import { Employee } from '@ng-arch/ng-arch/employees-management/types';
import { createAction, props } from '@ngrx/store';

export const getAllEmployees = createAction('[Employees] Get All Employees');

export const onGetAllEmployeesSuccess = createAction(
	'[Employees] On Get All Employees Success',
	props<{ employees: Employee[] }>()
);

export const onGetAllEmployeesFailure = createAction(
	'[Employees] On Get All Employees Failure',
	props<{ error: HttpErrorResponse }>()
);

export const getEmployeesByRole = createAction(
	'[Employees] Get Employees By Role',
	props<{ roles: string[] }>()
);

export const onGetEmployeesByRoleSuccess = createAction(
	'[Employees] On get EMployees By Role Success',
	props<{ employees: Employee[] }>()
);

export const onGetEmployeesByRoleFailure = createAction(
	'[Employees] On get EMployees By Role Failure',
	props<{ error: HttpErrorResponse }>()
);
