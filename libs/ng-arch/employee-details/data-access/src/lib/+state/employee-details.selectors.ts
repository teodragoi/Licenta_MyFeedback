import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
	employeeDetailsFeatureKey,
	EmployeeDetailsState,
} from './employee-details.reducers';

const getEmployeeDetailsState = createFeatureSelector<EmployeeDetailsState>(
	employeeDetailsFeatureKey
);

export const selectIsLoading = createSelector(
	getEmployeeDetailsState,
	(state: EmployeeDetailsState) => state.isLoading
);

export const selectEmployee = createSelector(
	getEmployeeDetailsState,
	(state: EmployeeDetailsState) => state.employee
);
