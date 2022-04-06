import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
		SharedUiComponentsModule,
		SharedUiMaterialModule,
		TranslateModule,
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NgArchDashboardFeatureModule {}
