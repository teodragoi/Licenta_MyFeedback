import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiComponentsModule } from '@ng-arch/shared/ui/components';
import { AddRolesComponent } from './add-roles/add-roles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgArchRolesManagementFeatureRoutingModule } from './ng-arch-roles-management-feature-routing.module';
import { SharedUiMaterialModule } from '@ng-arch/shared/ui/material';
import { TranslateModule } from '@ngx-translate/core';
import { NgArchRolesManagementDataAccessModule } from '@ng-arch/ng-arch/roles-management/data-access';
import { ManageRolesComponent } from './manage-roles/manage-roles.component';
import { ManageRolesService } from './manage-roles.service';
import { RoleAssignmentModalComponent } from './role-assignment-modal/role-assignment-modal.component';

@NgModule({
	declarations: [AddRolesComponent, ManageRolesComponent, RoleAssignmentModalComponent],
	imports: [
		CommonModule,
		FormsModule,
		NgArchRolesManagementDataAccessModule,
		NgArchRolesManagementFeatureRoutingModule,
		ReactiveFormsModule,
		SharedUiComponentsModule,
		SharedUiMaterialModule,
		TranslateModule,
	],
	providers: [ManageRolesService],
})
export class NgArchRolesManagementFeatureModule {}
