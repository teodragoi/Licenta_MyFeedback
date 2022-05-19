import { TableConfig } from '@ng-arch/shared/types';

export interface Project {
	id?: number;
	name: string;
}

export interface ProjectsVmData {
	isLoading: boolean;
	projectsTableConfig: TableConfig<Project>;
}
