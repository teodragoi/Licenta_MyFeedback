import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgArchFeedbackTemplatesDataAccessModule } from '@ng-arch/ng-arch/feedback-templates/data-access';
import { SharedUiComponentsModule } from '@ng-arch/shared/ui/components';
import { SharedUiMaterialModule } from '@ng-arch/shared/ui/material';
import { TranslateModule } from '@ngx-translate/core';
import { FeedbackCardComponent } from './feedback-card/feedback-card.component';
import { RequestCardComponent } from './request-card/request-card.component';

@NgModule({
	imports: [
		CommonModule,
		NgArchFeedbackTemplatesDataAccessModule,
		SharedUiComponentsModule,
		SharedUiMaterialModule,
		TranslateModule,
	],
	declarations: [FeedbackCardComponent, RequestCardComponent],
	exports: [FeedbackCardComponent, RequestCardComponent],
})
export class NgArchFeedbackFeatureModule {}
