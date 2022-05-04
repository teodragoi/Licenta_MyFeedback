import { TableConfig } from '@ng-arch/shared/types';

export interface Project {
	name: string;
}

export interface ProjectDTO extends Project {
	id: number;
}

export interface ProjectsVmData {
	isLoading: boolean;
	projectsTableConfig: TableConfig<ProjectDTO>;
}
