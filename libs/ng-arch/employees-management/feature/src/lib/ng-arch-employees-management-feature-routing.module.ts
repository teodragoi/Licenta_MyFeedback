import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'manage-employees',
				component: ManageEmployeesComponent,
			},
			{
				path: '',
				redirectTo: 'manage-employees',
			},
		],
	},
];

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forChild(routes)],
})
export class NgArchEmployeesManagementFeatureRoutingModule {}
