import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import {
	feedbackDetailsFeatureKey,
	feedbackDetailsReducer,
} from './+state/feedback-details.reducers';
import { EffectsModule } from '@ngrx/effects';
import { FeedbackDetailsEffects } from './+state/feedback-details.effects';

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature(feedbackDetailsFeatureKey, feedbackDetailsReducer),
		EffectsModule.forFeature([FeedbackDetailsEffects]),
	],
})
export class NgArchFeedbackDetailsDataAccessModule {}
