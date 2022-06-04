import { Employee } from '@ng-arch/ng-arch/employees-management/types';
import { Role } from '@ng-arch/ng-arch/roles-management/types';
import { ListData, TableConfig } from '@ng-arch/shared/types';

export interface Project {
	name: string;
	_id?: string;
	availableRoles?: Role[];
	employees?: Employee[];
}

export interface ProjectsVmData {
	isLoading: boolean;
	projectsTableConfig: TableConfig<Project>;
}

export interface ProjectDetailsVmData {
	assignedEmployees: ListData[] | undefined;
	availableRoles: ListData[] | undefined;
	isLoading: boolean;
	project: Project | null;
}
