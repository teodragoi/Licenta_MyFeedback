import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgArchProjectsManagementDataAccessModule } from '@ng-arch/ng-arch/projects-management/data-access';
import { SharedUiComponentsModule } from '@ng-arch/shared/ui/components';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'libs/shared/ui/material/src/lib/material.module';
import { AddProjectComponent } from './add-project/add-project.component';
import { ManageProjectsService } from './manage-projects.service';
import { ManageProjectsComponent } from './manage-projects/manage-projects.component';
import { NgArchProjectsManagementFeatureRoutingModule } from './ng-arch-projects-management-feature-routing.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MaterialModule,
		NgArchProjectsManagementDataAccessModule,
		NgArchProjectsManagementFeatureRoutingModule,
		ReactiveFormsModule,
		SharedUiComponentsModule,
		TranslateModule,
	],
	declarations: [AddProjectComponent, ManageProjectsComponent],
	providers: [ManageProjectsService]
})
export class NgArchProjectsManagementFeatureModule {}
