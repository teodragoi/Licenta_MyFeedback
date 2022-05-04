import { HttpErrorResponse } from '@angular/common/http';
import { Role, RoleDTO } from '@ng-arch/ng-arch/roles-management/types';
import { Action, createReducer, on } from '@ngrx/store';
import { mockedRoles } from '../role.mocks';

import * as RolesActions from './roles.actions';

export interface RolesState {
	error: HttpErrorResponse | null;
	isLoading: boolean;
	roles: RoleDTO[];
}

const initialState: RolesState = {
	error: null,
	isLoading: false,
	roles: mockedRoles,
};

export const rolesFeatureKey = 'roles';

const reducer = createReducer(
	initialState,
	on(RolesActions.addRole, (state) => ({
		...state,
		isLoading: true,
	})),
	on(RolesActions.onAddRoleSuccess, (state, { role }) => ({
		...state,
		isLoading: false,
		roles: [...state.roles, role],
	})),
	on(RolesActions.deleteRole, (state) => ({
		...state,
		isLoading: true,
	})),
	on(RolesActions.onDeleteRoleSuccess, (state, { roleDTO }) => ({
		...state,
		isLoading: false,
		roles: state.roles.filter((role: RoleDTO) => role.id !== roleDTO.id),
	}))
);

export function rolesReducer(state: RolesState, action: Action) {
	return reducer(state, action);
}
