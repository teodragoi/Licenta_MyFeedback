import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HierarchyState } from './hierarchy-reducers';

import * as HierarchyActions from './hierarchy-actions';
import * as HierarchySelectors from './hierarchy-selectors';
import { Role } from '@ng-arch/ng-arch/roles-management/types';

@Injectable({ providedIn: 'root' })
export class HierarchyFacade {
	public isLoading$: Observable<boolean> = this.store.select(
		HierarchySelectors.selectIsLoading
	);

	public roles$: Observable<Role[]> = this.store.select(
		HierarchySelectors.selectRoles
	);

	constructor(private store: Store<HierarchyState>) {}

	public dispatchAddRole(role: Role): void {
		this.store.dispatch(HierarchyActions.addRole({ role }));
	}
}
