import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgArchUsersDataAccessModule } from '@ng-arch/ng-arch/users/data-access';
import { SharedUiComponentsModule } from '@ng-arch/shared/ui/components';
import { SharedUiMaterialModule } from '@ng-arch/shared/ui/material';
import { TranslateModule } from '@ngx-translate/core';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { NgArchUsersFeatureRoutingModule } from './ng-arch-users-feature-routing.module';
import { AddUserModalComponent } from './add-user-modal/add-user-modal.component';

@NgModule({
	imports: [
		CommonModule,
		NgArchUsersDataAccessModule,
		NgArchUsersFeatureRoutingModule,
		SharedUiComponentsModule,
		SharedUiMaterialModule,
		TranslateModule
	],
	declarations: [ManageUsersComponent, AddUserModalComponent],
})
export class NgArchUsersFeatureModule {}
