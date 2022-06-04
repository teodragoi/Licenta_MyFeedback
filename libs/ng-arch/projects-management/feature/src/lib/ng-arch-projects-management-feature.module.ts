import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgArchEmployeesManagementDataAccessModule } from '@ng-arch/ng-arch/employees-management/data-access';
import { NgArchProjectDetailsDataAccessModule } from '@ng-arch/ng-arch/project-details/data-access';
import { NgArchProjectsManagementDataAccessModule } from '@ng-arch/ng-arch/projects-management/data-access';
import { NgArchRolesManagementDataAccessModule } from '@ng-arch/ng-arch/roles-management/data-access';
import { SharedUiComponentsModule } from '@ng-arch/shared/ui/components';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'libs/shared/ui/material/src/lib/material.module';
import { AddProjectComponent } from './add-project/add-project.component';
import { EmployeeAssignmentModalComponent } from './employee-assignment-modal/employee-assignment-modal.component';
import { ManageProjectsService } from './manage-projects.service';
import { ManageProjectsComponent } from './manage-projects/manage-projects.component';
import { NgArchProjectsManagementFeatureRoutingModule } from './ng-arch-projects-management-feature-routing.module';
import { ProjectDetailsEmployeesComponent } from './project-details/employees/employees.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { RolesComponent } from './project-details/roles/roles.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MaterialModule,
		NgArchEmployeesManagementDataAccessModule,
		NgArchRolesManagementDataAccessModule,
		NgArchProjectDetailsDataAccessModule,
		NgArchProjectsManagementDataAccessModule,
		NgArchProjectsManagementFeatureRoutingModule,
		ReactiveFormsModule,
		SharedUiComponentsModule,
		TranslateModule,
	],
	declarations: [
		AddProjectComponent,
		EmployeeAssignmentModalComponent,
		ManageProjectsComponent,
		ProjectDetailsComponent,
		ProjectDetailsEmployeesComponent,
		RolesComponent,
	],
	providers: [ManageProjectsService],
})
export class NgArchProjectsManagementFeatureModule {}
