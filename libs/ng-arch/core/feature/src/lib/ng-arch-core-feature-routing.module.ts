import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardService, ManagerGuardService } from '@shared/services';
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
				canActivate: [ManagerGuardService],
				path: 'projects-management',
				loadChildren: () =>
					import('@ng-arch/ng-arch/projects-management/feature').then(
						(m) => m.NgArchProjectsManagementFeatureModule
					),
			},
			{
				canActivate: [AdminGuardService],
				path: 'roles-management',
				loadChildren: () =>
					import('@ng-arch/ng-arch/roles-management/feature').then(
						(m) => m.NgArchRolesManagementFeatureModule
					),
			},
			{
				canActivate: [AdminGuardService],
				path: 'employees-management',
				loadChildren: () =>
					import('@ng-arch/ng-arch/employees-management/feature').then(
						(m) => m.NgArchEmployeesManagementFeatureModule
					),
			},
			{
				path: 'user-details',
				loadChildren: () =>
					import('@ng-arch/ng-arch/user-details/feature').then(
						(m) => m.NgArchUserDetailsFeatureModule
					),
			},
			{
				path: 'feedback-details',
				loadChildren: () =>
					import('@ng-arch/ng-arch/feedback-details/feature').then(
						(m) => m.NgArchFeedbackDetailsFeatureModule
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
