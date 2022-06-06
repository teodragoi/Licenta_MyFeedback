import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NgArchUserDetailsFeatureRoutingModule } from './ng-arch-user-details-feature-routing.module';
import { NgArchUserDetailsDataAccessModule } from '@ng-arch/ng-arch/user-details/data-access';
import { SharedUiComponentsModule } from '@ng-arch/shared/ui/components';
import { SharedUiMaterialModule } from '@ng-arch/shared/ui/material';
import { TranslateModule } from '@ngx-translate/core';
import { ChangePasswordModalComponent } from './change-password-modal/change-password-modal.component';
import { NgArchEmployeeDetailsDataAccessModule } from '@ng-arch/ng-arch/employee-details/data-access';
import { NgArchProjectsManagementDataAccessModule } from '@ng-arch/ng-arch/projects-management/data-access';

@NgModule({
	imports: [
		CommonModule,
		NgArchEmployeeDetailsDataAccessModule,
		NgArchProjectsManagementDataAccessModule,
		NgArchUserDetailsDataAccessModule,
		NgArchUserDetailsFeatureRoutingModule,
		SharedUiComponentsModule,
		SharedUiMaterialModule,
		TranslateModule
	],
	declarations: [UserDetailsComponent, ChangePasswordModalComponent],
})
export class NgArchUserDetailsFeatureModule {}
