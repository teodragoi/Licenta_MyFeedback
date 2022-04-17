import { Role } from '@ng-arch/ng-arch/roles-management/types';
import { createAction, props } from '@ngrx/store';

export const addRole = createAction(
	'[Hierarchy] Add Role',
	props<{ role: Role }>()
);
