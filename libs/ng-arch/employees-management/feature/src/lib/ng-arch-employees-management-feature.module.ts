import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgArchEmployeesManagementDataAccessModule } from '@ng-arch/ng-arch/employees-management/data-access';
import { SharedUiComponentsModule } from '@ng-arch/shared/ui/components';
import { SharedUiMaterialModule } from '@ng-arch/shared/ui/material';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { NgArchEmployeesManagementFeatureRoutingModule } from './ng-arch-employees-management-feature-routing.module';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { NgArchEmployeeDetailsDataAccessModule } from '@ng-arch/ng-arch/employee-details/data-access';
import { TranslateModule } from '@ngx-translate/core';
import { NgArchRolesManagementDataAccessModule } from '@ng-arch/ng-arch/roles-management/data-access';

@NgModule({
	imports: [
		CommonModule,
		NgArchEmployeeDetailsDataAccessModule,
		NgArchEmployeesManagementDataAccessModule,
		NgArchEmployeesManagementFeatureRoutingModule,
		NgArchRolesManagementDataAccessModule,
		SharedUiComponentsModule,
		SharedUiMaterialModule,
		TranslateModule,
	],
	declarations: [ManageEmployeesComponent, EmployeeDetailsComponent],
})
export class NgArchEmployeesManagementFeatureModule {}
