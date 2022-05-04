import { TableConfig } from '@ng-arch/shared/types';

export interface Project {
	name: string;
}

export interface ProjectsVmData {
	isLoading: boolean;
	projectsTableConfig: TableConfig<Project>;
}