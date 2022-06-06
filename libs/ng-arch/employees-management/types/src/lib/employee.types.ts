import { Role } from '@ng-arch/ng-arch/roles-management/types';
import { TableConfig } from '@ng-arch/shared/types';

export interface Employee {
	_id?: string;
	email: string;
	name: string;
	roles: Role[];
}

export interface EmployeesVmData {
	isLoading: boolean;
	employeesTableConfig: TableConfig<Employee>;
}
