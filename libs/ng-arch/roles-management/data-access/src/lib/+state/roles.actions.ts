import { Role } from '@ng-arch/ng-arch/roles-management/types';
import { createAction, props } from '@ngrx/store';

export const addRole = createAction(
	'[Roles] Add Role',
	props<{ role: Role }>()
);

export const deleteRole = createAction(
	'[Roles] Delete Role',
	props<{ role: Role }>()
);
