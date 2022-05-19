import { Injectable } from '@angular/core';
import { Role } from '@ng-arch/ng-arch/roles-management/types';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as RolesActions from './roles.actions';
import { RolesState } from './roles.reducers';
import * as RolesSelectors from './roles.selectors';

@Injectable({ providedIn: 'root' })
export class RolesFacade {
	public isLoading$: Observable<boolean> = this.store.select(
		RolesSelectors.selectIsLoading
	);

	public roles$: Observable<Role[]> = this.store.select(
		RolesSelectors.selectRoles
	);

	constructor(private store: Store<RolesState>) {}

	public dispatchAddRole(role: Role): void {
		this.store.dispatch(RolesActions.addRole({ role }));
	}

	public dispatchDeleteRole(roleId: string): void {
		this.store.dispatch(RolesActions.deleteRole({ roleId }));
	}

	public dispatchGetAllRoles(): void {
		this.store.dispatch(RolesActions.getAllRoles());
	}
}
