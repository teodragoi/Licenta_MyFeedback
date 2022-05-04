import { TableConfig } from '@ng-arch/shared/types';

export enum RoleType {
	ADMIN = 'Admin',
	MANAGER = 'Manager',
	EMPLOYEE = 'Employee',
}

export interface Role {
	name: string;
	type: RoleType;
}

export interface RoleVmData {
	isLoading: boolean;
	rolesTableConfig: TableConfig<Role>;
}
