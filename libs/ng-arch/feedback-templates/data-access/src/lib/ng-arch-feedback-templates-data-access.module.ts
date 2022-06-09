import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import {
	feedbackTemplateFeatureKey,
	feedbackTemplateReducer,
} from './+state/feedback-templates.reducers';
import { EffectsModule } from '@ngrx/effects';
import { FeedbackTemplateEffects } from './+state/feedback-templates.effects';

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature(feedbackTemplateFeatureKey, feedbackTemplateReducer),
		EffectsModule.forFeature([FeedbackTemplateEffects]),
	],
})
export class NgArchFeedbackTemplatesDataAccessModule {}
