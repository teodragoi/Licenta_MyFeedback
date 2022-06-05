import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageUsersComponent } from './manage-users/manage-users.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'manage-users',
				component: ManageUsersComponent,
			},
			{
				path: '',
				redirectTo: 'manage-users',
			},
		],
	},
];

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forChild(routes)],
})
export class NgArchUsersFeatureRoutingModule {}
