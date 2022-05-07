import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { NgArchEmployeesManagementFeatureRoutingModule } from './ng-arch-employees-management-feature-routing.module';

@NgModule({
	imports: [CommonModule, NgArchEmployeesManagementFeatureRoutingModule],
	declarations: [ManageEmployeesComponent],
})
export class NgArchEmployeesManagementFeatureModule {}
