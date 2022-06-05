import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core/core.component';

const routes: Routes = [
	{
		path: '',
		component: CoreComponent,
		children: [
			{
				path: 'dashboard',
				loadChildren: () =>
					import('@ng-arch/ng-arch/dashboard/feature').then(
						(m) => m.NgArchDashboardFeatureModule
					),
			},
			{
				path: 'projects-management',
				loadChildren: () =>
					import('@ng-arch/ng-arch/projects-management/feature').then(
						(m) => m.NgArchProjectsManagementFeatureModule
					),
			},
			{
				path: 'roles-management',
				loadChildren: () =>
					import('@ng-arch/ng-arch/roles-management/feature').then(
						(m) => m.NgArchRolesManagementFeatureModule
					),
			},
			{
				path: 'employees-management',
				loadChildren: () =>
					import('@ng-arch/ng-arch/employees-management/feature').then(
						(m) => m.NgArchEmployeesManagementFeatureModule
					),
			},
			{
				path: 'users',
				loadChildren: () =>
					import('@ng-arch/ng-arch/users/feature').then(
						(m) => m.NgArchUsersFeatureModule
					),
			},
			{
				path: '',
				redirectTo: 'dashboard',
			},
		],
	},
];

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forChild(routes)],
})
export class NgArchCoreFeatureRoutingModule {}
