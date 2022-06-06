import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgArchEmployeesManagementDataAccessModule } from '@ng-arch/ng-arch/employees-management/data-access';
import { SharedUiComponentsModule } from '@ng-arch/shared/ui/components';
import { SharedUiMaterialModule } from '@ng-arch/shared/ui/material';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { NgArchEmployeesManagementFeatureRoutingModule } from './ng-arch-employees-management-feature-routing.module';

@NgModule({
	imports: [
		CommonModule,
		NgArchEmployeesManagementFeatureRoutingModule,
		NgArchEmployeesManagementDataAccessModule,
		SharedUiComponentsModule,
		SharedUiMaterialModule,
	],
	declarations: [ManageEmployeesComponent],
})
export class NgArchEmployeesManagementFeatureModule {}
