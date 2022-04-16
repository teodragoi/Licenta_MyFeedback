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
				path: 'hierarchy-management',
				loadChildren: () =>
					import('@ng-arch/ng-arch/hierarchy-management/feature').then(
						(m) => m.NgArchHierarchyManagementFeatureModule
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
