import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '@ng-arch/ng-arch/employees-management/types';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { EmployeesService } from '../employees.service';
import * as EmployeesActions from './employees.actions';

@Injectable()
export class EmployeesEffects {
	public getAllEmployees$ = createEffect(() =>
		this.actions$.pipe(
			ofType(EmployeesActions.getAllEmployees),
			switchMap(() =>
				this.employeesService.getAllEmployees().pipe(
					map((employees: Employee[]) =>
						EmployeesActions.onGetAllEmployeesSuccess({ employees })
					),
					catchError((error: HttpErrorResponse) =>
						of(EmployeesActions.onGetAllEmployeesFailure({ error }))
					)
				)
			)
		)
	);

	public getEmployeesByRole$ = createEffect(() =>
		this.actions$.pipe(
			ofType(EmployeesActions.getEmployeesByRole),
			switchMap(({ roles }) =>
				this.employeesService.getEmployeesByRole(roles).pipe(
					map((employees: Employee[]) =>
						EmployeesActions.onGetEmployeesByRoleSuccess({ employees })
					),
					catchError((error: HttpErrorResponse) =>
						of(EmployeesActions.onGetEmployeesByRoleFailure({ error }))
					)
				)
			)
		)
	);

	public deleteEmployee$ = createEffect(() =>
		this.actions$.pipe(
			ofType(EmployeesActions.deleteEmployee),
			switchMap(({ employeeId }) =>
				this.employeesService.deleteEmployee(employeeId).pipe(
					map(() => EmployeesActions.onDeleteEmployeeSuccess({ employeeId })),
					catchError((error: HttpErrorResponse) =>
						of(EmployeesActions.onDeleteEmployeeFailure({ error }))
					)
				)
			)
		)
	);

	constructor(
		private actions$: Actions,
		private employeesService: EmployeesService
	) {}
}
