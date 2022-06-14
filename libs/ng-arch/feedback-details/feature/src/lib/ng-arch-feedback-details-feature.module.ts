import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgArchFeedbackDetailsDataAccessModule } from '@ng-arch/ng-arch/feedback-details/data-access';
import { SharedUiComponentsModule } from '@ng-arch/shared/ui/components';
import { SharedUiMaterialModule } from '@ng-arch/shared/ui/material';
import { TranslateModule } from '@ngx-translate/core';
import { FeedbackDetailsComponent } from './feedback-details/feedback-details.component';
import { NgArchFeedbackDetailsFeatureRoutingModule } from './ng-arch-feedback-details-feature-routing.module';

@NgModule({
	imports: [
		CommonModule,
		NgArchFeedbackDetailsDataAccessModule,
		NgArchFeedbackDetailsFeatureRoutingModule,
		SharedUiComponentsModule,
		SharedUiMaterialModule,
		TranslateModule,
	],
	declarations: [FeedbackDetailsComponent],
})
export class NgArchFeedbackDetailsFeatureModule {}
