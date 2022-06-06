import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import {
	userDetailsFeatureKey,
	userDetailsReducer,
} from './+state/user-details.reducers';
import { EffectsModule } from '@ngrx/effects';
import { UserDetailsEffects } from './+state/user-details.effects';

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature(userDetailsFeatureKey, userDetailsReducer),
		EffectsModule.forFeature([UserDetailsEffects]),
	],
})
export class NgArchUserDetailsDataAccessModule {}
