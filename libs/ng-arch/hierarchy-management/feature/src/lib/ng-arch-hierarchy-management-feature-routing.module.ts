import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRolesComponent } from './add-roles/add-roles.component';
import { ManageRolesComponent } from './manage-roles/manage-roles.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'add-roles',
				component: AddRolesComponent,
			},
			{
				path: 'manage-roles',
				component: ManageRolesComponent,
			},
			{
				path: '',
				redirectTo: 'add-roles',
			},
		],
	},
];

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forChild(routes)],
})
export class NgArchHierarchyManagementFeatureRoutingModule {}
