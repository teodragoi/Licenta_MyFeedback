import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
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
				path: 'manage-employees/:employeeId',
				component: EmployeeDetailsComponent,
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
