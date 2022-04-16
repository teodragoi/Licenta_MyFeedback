import { Injectable } from '@angular/core';
import { HierarchyFacade } from '@ng-arch/ng-arch/hierarchy-management/data-access';
import { Role, RoleVmData } from '@ng-arch/ng-arch/hierarchy-management/types';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class RolesService {
	public roleData$: Observable<RoleVmData> = combineLatest([
		this.hierarchyFacade.isLoading$,
		this.hierarchyFacade.roles$,
	]).pipe(
		map(([isLoading, roles]) => ({
			isLoading,
			roles,
		}))
	);

	constructor(private hierarchyFacade: HierarchyFacade) {}

	public addRole(role: Role): void {
		this.hierarchyFacade.dispatchAddRole(role);
	}
}
