import { Injectable } from '@angular/core';
import { EmployeeDetailsFacade } from '@ng-arch/ng-arch/employee-details/data-access';
import { Employee } from '@ng-arch/ng-arch/employees-management/types';
import { ProjectsFacade } from '@ng-arch/ng-arch/projects-management/data-access';
import { Project } from '@ng-arch/ng-arch/projects-management/types';
import { Role } from '@ng-arch/ng-arch/roles-management/types';
import { UserDetailsFacade } from '@ng-arch/ng-arch/user-details/data-access';
import { UserDetailsVmData } from '@ng-arch/ng-arch/users/types';
import { ListData } from '@ng-arch/shared/types';
import { combineLatest, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class UserDetailsPageService {
	public vmData$: Observable<UserDetailsVmData> = combineLatest([
		this.userDetailsFacade.isLoading$,
		this.userDetailsFacade.user$,
	]).pipe(
		map(([isLoading, user]) => ({
			isLoading,
			user,
		}))
	);

	public rolesData$: Observable<ListData[] | undefined> =
		this.employeeDetailsFacade.employee$.pipe(
			filter((employee: Employee | null) => !!employee),
			map((employee: Employee | null) =>
				this.buildRolesData(employee?.roles ?? [])
			)
		);

	public projectsData$: Observable<ListData[] | undefined> =
		this.projectsFacade.projects$.pipe(
			filter((projects: Project[]) => !!projects),
			map((projects: Project[]) => this.buildProjectsData(projects))
		);

	constructor(
		private employeeDetailsFacade: EmployeeDetailsFacade,
		private projectsFacade: ProjectsFacade,
		private userDetailsFacade: UserDetailsFacade
	) {}

	private buildRolesData(roles: Role[]): ListData[] | undefined {
		if (!roles?.length) {
			return undefined;
		}

		return roles.map((role: Role) => ({
			label: role.name,
			value: role._id,
		}));
	}

	private buildProjectsData(projects: Project[]): ListData[] | undefined {
		if (!projects?.length) {
			return undefined;
		}

		return projects.map((project: Project) => ({
			label: project.name,
			value: project._id,
		}));
	}
}
