import { HttpErrorResponse } from '@angular/common/http';
import { Role } from '@ng-arch/ng-arch/roles-management/types';
import { Action, createReducer, on } from '@ngrx/store';
import { mockedRoles } from '../role.mocks';

import * as RolesActions from './roles.actions';

export interface RolesState {
	error: HttpErrorResponse | null;
	isLoading: boolean;
	roles: Role[];
}

const initialState: RolesState = {
	error: null,
	isLoading: false,
	roles: mockedRoles,
};

export const rolesFeatureKey = 'roles';

const reducer = createReducer(
	initialState,
	on(RolesActions.addRole, (state, { role }) => ({
		...state,
		isLoading: false,
		roles: [...state.roles, role],
	})),
	on(RolesActions.deleteRole, (state, { role }) => ({
		...state,
		isLoading: false,
		roles: state.roles.filter(
			(stateRole: Role) => stateRole.name !== role.name
		),
	}))
);

export function rolesReducer(state: RolesState, action: Action) {
	return reducer(state, action);
}
