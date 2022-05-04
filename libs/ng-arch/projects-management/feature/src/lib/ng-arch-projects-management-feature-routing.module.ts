import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageProjectsComponent } from './manage-projects/manage-projects.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'manage-projects',
				component: ManageProjectsComponent,
			},
			{
				path: '',
				redirectTo: 'manage-projects',
			},
		],
	},
];

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forChild(routes)],
})
export class NgArchProjectsManagementFeatureRoutingModule {}
