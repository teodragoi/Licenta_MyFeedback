import { Injectable } from '@angular/core';
import { RolesFacade } from '@ng-arch/ng-arch/roles-management/data-access';
import { Role, RoleVmData } from '@ng-arch/ng-arch/roles-management/types';
import {
	TableConfig,
	TableColumnType,
	TableActions,
} from '@ng-arch/shared/types';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class RolesService {
	public roleData$: Observable<RoleVmData> = combineLatest([
		this.rolesFacade.isLoading$,
		this.rolesFacade.roles$,
	]).pipe(
		map(([isLoading, roles]) => ({
			isLoading,
			rolesTableConfig: this.buildTableConfig(roles),
		}))
	);

	constructor(private rolesFacade: RolesFacade) {}

	public addRole(role: Role): void {
		this.rolesFacade.dispatchAddRole(role);
	}

	public removeRole(role: Role): void {
		this.rolesFacade.dispatchDeleteRole(role);
	}

	private buildTableConfig(roles: Role[]): TableConfig<Role> {
		return {
			columns: [
				{
					name: 'rolesManagement.table.name',
					propertyName: 'name',
					type: TableColumnType.DATA,
				},
				{
					name: 'rolesManagement.table.type',
					propertyName: 'type',
					type: TableColumnType.DATA,
				},
				{
					name: 'common.actions',
					type: TableColumnType.ACTION,
					actions: [TableActions.EDIT, TableActions.DELETE],
				},
			],
			data: roles,
		};
	}
}
