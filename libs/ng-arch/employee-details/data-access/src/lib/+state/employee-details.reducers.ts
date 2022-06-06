import { HttpErrorResponse } from '@angular/common/http';
import { Employee } from '@ng-arch/ng-arch/employees-management/types';
import { Action, createReducer, on } from '@ngrx/store';

import * as EmployeeDetailsActions from './employee-details.actions';

export interface EmployeeDetailsState {
	employee: Employee | null;
	error: HttpErrorResponse | null;
	isLoading: boolean;
}

const initialState: EmployeeDetailsState = {
	employee: null,
	error: null,
	isLoading: false,
};

export const employeeDetailsFeatureKey = 'employeeDetails';

const reducer = createReducer(
	initialState,
	on(
		EmployeeDetailsActions.getEmployeeDetails,
		EmployeeDetailsActions.editEmployeeDetails,
		(state) => ({
			...state,
			isLoading: true,
		})
	),
	on(
		EmployeeDetailsActions.onGetEmployeeDetailsSuccess,
		EmployeeDetailsActions.onEditEmployeeDetailsSuccess,
		(state, { employee }) => ({
			...state,
			isLoading: false,
			employee,
		})
	),
	on(
		EmployeeDetailsActions.onGetEmployeeDetailsFailure,
		EmployeeDetailsActions.onEditEmployeeDetailsFailure,
		(state, { error }) => ({
			...state,
			isLoading: false,
			error,
		})
	)
);

export function employeeDetailsReducer(
	state: EmployeeDetailsState,
	action: Action
) {
	return reducer(state, action);
}
