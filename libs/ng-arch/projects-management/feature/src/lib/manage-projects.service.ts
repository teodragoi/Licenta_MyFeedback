import { Injectable } from '@angular/core';
import { EmployeesFacade } from '@ng-arch/ng-arch/employees-management/data-access';
import { Employee } from '@ng-arch/ng-arch/employees-management/types';
import { FeedbackTemplate } from '@ng-arch/ng-arch/feedback-templates/types';
import { ProjectDetailsFacade } from '@ng-arch/ng-arch/project-details/data-access';
import { ProjectsFacade } from '@ng-arch/ng-arch/projects-management/data-access';
import {
	Project,
	ProjectDetailsVmData,
	ProjectsVmData,
} from '@ng-arch/ng-arch/projects-management/types';
import { Role } from '@ng-arch/ng-arch/roles-management/types';
import {
	ListData,
	TableActions,
	TableColumnType,
	TableConfig,
} from '@ng-arch/shared/types';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ManageProjectsService {
	public projectsData$: Observable<ProjectsVmData> = combineLatest([
		this.projectsFacade.isLoading$,
		this.projectsFacade.projects$,
	]).pipe(
		map(([isLoading, projects]) => ({
			isLoading,
			projectsTableConfig: this.buildTableConfig(projects),
		}))
	);

	public projectDetailsData$: Observable<ProjectDetailsVmData> = combineLatest([
		this.projectDetailsFacade.isLoading$,
		this.projectDetailsFacade.project$,
	]).pipe(
		map(([isLoading, project]) => ({
			isLoading,
			project,
			assignedEmployees: this.buildAssignedEmployeesData(project),
			availableRoles: this.buildAvailableRolesData(project),
			feedbackTemplatesConfig: this.buildFeedbackTemplateConfig(project),
		}))
	);

	public availableEmployeesData$: Observable<ListData[]> =
		this.employeesFacade.employees$.pipe(
			map((employees: Employee[]) =>
				employees.map((employee: Employee) => ({
					label: employee.name,
					value: employee._id,
				}))
			)
		);

	public assignedEmployeesData$: Observable<ListData[]> =
		this.projectDetailsFacade.project$.pipe(
			map(
				(project: Project | null) =>
					project?.employees?.map((employee: Employee) => ({
						label: employee.name,
						value: employee,
					})) ?? []
			)
		);

	constructor(
		private employeesFacade: EmployeesFacade,
		private projectsFacade: ProjectsFacade,
		private projectDetailsFacade: ProjectDetailsFacade
	) {}

	private buildTableConfig(projects: Project[]): TableConfig<Project> {
		return {
			columns: [
				{
					name: 'table.name',
					propertyName: 'name',
					type: TableColumnType.DATA,
				},
				{
					name: 'common.actions',
					type: TableColumnType.ACTION,
					actions: [TableActions.DELETE],
				},
			],
			data: projects,
		};
	}

	private buildAssignedEmployeesData(
		project: Project | null
	): ListData[] | undefined {
		if (!project?.employees?.length) {
			return undefined;
		}

		return project.employees?.map((employee: Employee) => ({
			label: employee.name,
			value: employee._id,
		}));
	}

	private buildAvailableRolesData(
		project: Project | null
	): ListData[] | undefined {
		if (!project?.availableRoles?.length) {
			return undefined;
		}

		return project.availableRoles.map((role: Role) => ({
			label: role.name,
			value: role._id,
		}));
	}

	private buildFeedbackTemplateConfig(
		project: Project | null
	): TableConfig<FeedbackTemplate> {

		return {
			columns: [
				{
					name: 'table.name',
					propertyName: 'name',
					type: TableColumnType.DATA,
				},
				{
					name: 'common.actions',
					type: TableColumnType.ACTION,
					actions: [TableActions.EDIT, TableActions.DELETE],
				},
			],
			data: project?.feedbackTemplates ?? [],
		};
	}
}
