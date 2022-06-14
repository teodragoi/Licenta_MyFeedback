import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import {
	feedbacksFeatureKey,
	feedbacksReducer,
} from './+state/feedbacks.reducers';
import { EffectsModule } from '@ngrx/effects';
import { FeedbacksEffects } from './+state/feedbacks.effects';

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature(feedbacksFeatureKey, feedbacksReducer),
		EffectsModule.forFeature([FeedbacksEffects]),
	],
})
export class NgArchFeedbackDataAccessModule {}
