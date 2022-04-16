import { HttpErrorResponse } from '@angular/common/http';
import { Role } from '@ng-arch/ng-arch/hierarchy-management/types';
import { Action, createReducer, on } from '@ngrx/store';
import { mockedRoles } from '../role.data';

import * as HierarchyActions from './hierarchy-actions';

export interface HierarchyState {
	error: HttpErrorResponse | null;
	isLoading: boolean;
	roles: Role[];
}

const initialState: HierarchyState = {
	error: null,
	isLoading: false,
	roles: mockedRoles,
};

export const hierarchyFeatureKey = 'hierarchy';

const reducer = createReducer(
	initialState,
	on(HierarchyActions.addRole, (state, { role }) => ({
		...state,
		isLoading: false,
		roles: [...state.roles, role],
	}))
);

export function hierarchyReducer(state: HierarchyState, action: Action) {
	return reducer(state, action);
}
