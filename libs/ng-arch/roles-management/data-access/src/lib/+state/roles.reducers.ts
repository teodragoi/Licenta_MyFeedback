import { state } from '@angular/animations';
import { HttpErrorResponse } from '@angular/common/http';
import { Role } from '@ng-arch/ng-arch/roles-management/types';
import { Action, createReducer, on } from '@ngrx/store';

import * as RolesActions from './roles.actions';

export interface RolesState {
	error: HttpErrorResponse | null;
	isLoading: boolean;
	roles: Role[];
}

const initialState: RolesState = {
	error: null,
	isLoading: false,
	roles: [],
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
	on(RolesActions.onDeleteRoleSuccess, (state, { roleId }) => ({
		...state,
		isLoading: false,
		roles: state.roles.filter((role: Role) => role._id !== roleId),
	})),
	on(RolesActions.getAllRoles, (state) => ({
		...state,
		isLoading: true,
	})),
	on(RolesActions.onGetAllRolesSuccess, (state, { roles }) => ({
		...state,
		roles,
		isLoading: false,
	})),
	on(
		RolesActions.onAddRoleFailure,
		RolesActions.onDeleteRoleFailure,
		RolesActions.onGetAllRolesFailure,
		(state, { error }) => ({
			...state,
			error,
			isLoading: false,
		})
	)
);

export function rolesReducer(state: RolesState, action: Action) {
	return reducer(state, action);
}
