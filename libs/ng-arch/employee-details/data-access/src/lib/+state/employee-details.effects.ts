import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '@ng-arch/ng-arch/employees-management/types';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { EmployeeDetailsService } from '../employee-details.service';
import * as EmployeeDetailsActions from './employee-details.actions';

@Injectable()
export class EmployeeDetailsEffects {
	public getEmployeeDetails$ = createEffect(() =>
		this.actions$.pipe(
			ofType(EmployeeDetailsActions.getEmployeeDetails),
			switchMap(({ employeeId }) =>
				this.employeeDetailsService.getEmployeeDetails(employeeId).pipe(
					map((employee: Employee) =>
						EmployeeDetailsActions.onGetEmployeeDetailsSuccess({ employee })
					),
					catchError((error: HttpErrorResponse) =>
						of(EmployeeDetailsActions.onGetEmployeeDetailsFailure({ error }))
					)
				)
			)
		)
	);

	public editEmployeeDetails$ = createEffect(() =>
		this.actions$.pipe(
			ofType(EmployeeDetailsActions.editEmployeeDetails),
			switchMap(({ employeeId, employee }) =>
				this.employeeDetailsService
					.editEmployeeDetails(employeeId, employee)
					.pipe(
						map((employee: Employee) =>
							EmployeeDetailsActions.onEditEmployeeDetailsSuccess({ employee })
						),
						catchError((error: HttpErrorResponse) =>
							of(EmployeeDetailsActions.onEditEmployeeDetailsFailure({ error }))
						)
					)
			)
		)
	);

	constructor(
		private actions$: Actions,
		private employeeDetailsService: EmployeeDetailsService
	) {}
}
