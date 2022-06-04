import { createFeatureSelector, createSelector } from '@ngrx/store';
import { employeesFeatureKey, EmployeesState } from './employees.reducers';

const getEmployeesState =
	createFeatureSelector<EmployeesState>(employeesFeatureKey);

export const selectIsLoading = createSelector(
	getEmployeesState,
	(state: EmployeesState) => state.isLoading
);

export const selectEmployees = createSelector(
	getEmployeesState,
	(state: EmployeesState) => state.employees
);
