import { Injectable } from '@angular/core';
import { ProjectsFacade } from '@ng-arch/ng-arch/projects-management/data-access';
import {
	Project,
	ProjectDTO,
	ProjectsVmData,
} from '@ng-arch/ng-arch/projects-management/types';
import {
	TableActions,
	TableColumnType,
	TableConfig,
} from '@ng-arch/shared/types';
import { combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

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

	constructor(private projectsFacade: ProjectsFacade) {}

	private buildTableConfig(projects: ProjectDTO[]): TableConfig<ProjectDTO> {
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
}
