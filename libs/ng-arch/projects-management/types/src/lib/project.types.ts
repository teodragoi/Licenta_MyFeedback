import { Employee } from '@ng-arch/ng-arch/employees-management/types';
import { FeedbackTemplate } from '@ng-arch/ng-arch/feedback-templates/types';
import { Role } from '@ng-arch/ng-arch/roles-management/types';
import { ListData, TableConfig } from '@ng-arch/shared/types';

export interface Project {
	name: string;
	_id?: string;
	availableRoles?: Role[];
	employees?: Employee[];
	feedbackTemplates?: FeedbackTemplate[];
}

export interface ProjectsVmData {
	isLoading: boolean;
	projectsTableConfig: TableConfig<Project>;
}

export interface ProjectDetailsVmData {
	assignedEmployees: ListData[] | undefined;
	availableRoles: ListData[] | undefined;
	feedbackTemplatesConfig: TableConfig<FeedbackTemplate>;
	isLoading: boolean;
	project: Project | null;
}
