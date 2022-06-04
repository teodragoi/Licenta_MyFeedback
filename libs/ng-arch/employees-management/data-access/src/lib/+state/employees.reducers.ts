import { HttpErrorResponse } from '@angular/common/http';
import { Employee } from '@ng-arch/ng-arch/employees-management/types';
import { Action, createReducer, on } from '@ngrx/store';

import * as EmployeesActions from './employees.actions';

export interface EmployeesState {
	error: HttpErrorResponse | null;
	isLoading: boolean;
	employees: Employee[];
}

const initialState: EmployeesState = {
	error: null,
	isLoading: false,
	employees: [],
};

export const employeesFeatureKey = 'employees';

const reducer = createReducer(
	initialState,
	on(
		EmployeesActions.getAllEmployees,
		EmployeesActions.getEmployeesByRole,
		(state) => ({
			...state,
			isLoading: true,
		})
	),
	on(
		EmployeesActions.onGetAllEmployeesSuccess,
		EmployeesActions.onGetEmployeesByRoleSuccess,
		(state, { employees }) => ({
			...state,
			isLoading: false,
			employees,
		})
	),
	on(
		EmployeesActions.onGetAllEmployeesFailure,
		EmployeesActions.onGetEmployeesByRoleFailure,
		(state, { error }) => ({
			...state,
			isLoading: false,
			error,
		})
	)
);

export function employeesReducer(state: EmployeesState, action: Action) {
	return reducer(state, action);
}
