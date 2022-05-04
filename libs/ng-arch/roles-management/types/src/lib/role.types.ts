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

export interface RoleDTO extends Role {
	id: number;
}

export interface RoleVmData {
	isLoading: boolean;
	rolesTableConfig: TableConfig<Role>;
}
