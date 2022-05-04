import { Role, RoleDTO } from '@ng-arch/ng-arch/roles-management/types';
import { createAction, props } from '@ngrx/store';

export const addRole = createAction(
	'[Roles] Add Role',
	props<{ role: Role }>()
);

export const onAddRoleSuccess = createAction(
	'[Roles] On Add Role Success',
	props<{ role: RoleDTO }>()
);

export const deleteRole = createAction(
	'[Roles] Delete Role',
	props<{ roleDTO: RoleDTO }>()
);

export const onDeleteRoleSuccess = createAction(
	'[Roles] On Delete Role Success',
	props<{ roleDTO: RoleDTO }>()
);