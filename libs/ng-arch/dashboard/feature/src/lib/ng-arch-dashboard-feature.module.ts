import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgArchFeedbackDataAccessModule } from '@ng-arch/ng-arch/feedback/data-access';
import { NgArchFeedbackFeatureModule } from '@ng-arch/ng-arch/feedback/feature';
import { SharedUiComponentsModule } from '@ng-arch/shared/ui/components';
import { SharedUiMaterialModule } from '@ng-arch/shared/ui/material';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgArchDashboardFeatureRoutingModule } from './ng-arch-dashboard-feature-routing.module';

@NgModule({
	declarations: [DashboardComponent],
	exports: [DashboardComponent],
	imports: [
		CommonModule,
		NgArchDashboardFeatureRoutingModule,
		NgArchFeedbackFeatureModule,
		NgArchFeedbackDataAccessModule,
		NgArchFeedbackFeatureModule,
		SharedUiComponentsModule,
		SharedUiMaterialModule,
		TranslateModule,
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NgArchDashboardFeatureModule {}
