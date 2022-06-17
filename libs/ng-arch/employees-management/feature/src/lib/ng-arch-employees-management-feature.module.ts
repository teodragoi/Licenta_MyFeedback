import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgArchEmployeeDetailsDataAccessModule } from '@ng-arch/ng-arch/employee-details/data-access';
import { NgArchEmployeesManagementDataAccessModule } from '@ng-arch/ng-arch/employees-management/data-access';
import { NgArchRolesManagementDataAccessModule } from '@ng-arch/ng-arch/roles-management/data-access';
import { NgArchUsersDataAccessModule } from '@ng-arch/ng-arch/users/data-access';
import { SharedUiComponentsModule } from '@ng-arch/shared/ui/components';
import { SharedUiMaterialModule } from '@ng-arch/shared/ui/material';
import { TranslateModule } from '@ngx-translate/core';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AddUserModalComponent } from './manage-employees/add-user-modal/add-user-modal.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { NgArchEmployeesManagementFeatureRoutingModule } from './ng-arch-employees-management-feature-routing.module';

@NgModule({
	imports: [
		CommonModule,
		NgArchEmployeeDetailsDataAccessModule,
		NgArchEmployeesManagementDataAccessModule,
		NgArchEmployeesManagementFeatureRoutingModule,
		NgArchRolesManagementDataAccessModule,
		NgArchUsersDataAccessModule,
		SharedUiComponentsModule,
		SharedUiMaterialModule,
		TranslateModule,
	],
	declarations: [
		AddUserModalComponent,
		ManageEmployeesComponent,
		EmployeeDetailsComponent,
	],
})
export class NgArchEmployeesManagementFeatureModule {}
