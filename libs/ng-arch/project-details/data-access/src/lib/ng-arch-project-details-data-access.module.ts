import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProjectDetailsEffects } from './+state/project-details.effects';
import * as fromReducer from './+state/project-details.reducers';

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature(
			fromReducer.projectDetailsFeatureKey,
			fromReducer.projectDetailsReducer
		),
		EffectsModule.forFeature([ProjectDetailsEffects]),
	],
})
export class NgArchProjectDetailsDataAccessModule {}
