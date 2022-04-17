import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageRolesComponent } from './manage-roles/manage-roles.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'manage-roles',
				component: ManageRolesComponent,
			},
			{
				path: '',
				redirectTo: 'manage-roles',
			},
		],
	},
];

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forChild(routes)],
})
export class NgArchRolesManagementFeatureRoutingModule {}
