import { Injectable } from '@angular/core';
import { RolesFacade } from '@ng-arch/ng-arch/roles-management/data-access';
import {
	AssignmentRolesVmData,
	Role,
	RoleVmData,
} from '@ng-arch/ng-arch/roles-management/types';
import {
	TableConfig,
	TableColumnType,
	TableActions,
} from '@ng-arch/shared/types';
import { combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ManageRolesService {
	public roleData$: Observable<RoleVmData> = combineLatest([
		this.rolesFacade.isLoading$,
		this.rolesFacade.roles$,
	]).pipe(
		map(([isLoading, roles]) => ({
			isLoading,
			rolesTableConfig: this.buildTableConfig(roles),
		}))
	);

	public assignmentRolesData$: Observable<AssignmentRolesVmData> =
		combineLatest([this.rolesFacade.isLoading$, this.rolesFacade.roles$]).pipe(
			map(([isLoading, roles]) => ({
				isLoading,
				rolesData: roles.map((role: Role) => ({
					label: role.name,
					value: role._id,
				})),
			}))
		);

	constructor(private rolesFacade: RolesFacade) {}

	private buildTableConfig(roles: Role[]): TableConfig<Role> {
		return {
			columns: [
				{
					name: 'table.name',
					propertyName: 'name',
					type: TableColumnType.DATA,
				},
				{
					name: 'table.type',
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
