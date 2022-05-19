import { HttpErrorResponse } from '@angular/common/http';
import { Role } from '@ng-arch/ng-arch/roles-management/types';
import { createAction, props } from '@ngrx/store';

export const addRole = createAction(
	'[Roles] Add Role',
	props<{ role: Role }>()
);

export const onAddRoleSuccess = createAction(
	'[Roles] On Add Role Success',
	props<{ role: Role }>()
);

export const onAddRoleFailure = createAction(
	'[Roles] On Add Role Success',
	props<{ error: HttpErrorResponse }>()
);

export const deleteRole = createAction(
	'[Roles] Delete Role',
	props<{ roleId: string }>()
);

export const onDeleteRoleSuccess = createAction(
	'[Roles] On Delete Role Success',
	props<{roleId: string}>()
);

export const onDeleteRoleFailure = createAction(
	'[Roles] On Delete Role Success',
	props<{ error: HttpErrorResponse }>()
);

export const getAllRoles = createAction('[Roles] Get All Roles');

export const onGetAllRolesSuccess = createAction(
	'[Roles] On Get All Roles Success',
	props<{ roles: Role[] }>()
);

export const onGetAllRolesFailure = createAction(
	'[Roles] On Get All Roles Success',
	props<{ error: HttpErrorResponse }>()
);
