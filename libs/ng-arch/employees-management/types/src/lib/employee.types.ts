import { Role } from '@ng-arch/ng-arch/roles-management/types';
import { ListData, TableConfig } from '@ng-arch/shared/types';

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

export interface EmployeeDetailsVmData {
	isLoading: boolean;
	employee: Employee | null;
	assignedRoles: ListData[] | undefined
}
