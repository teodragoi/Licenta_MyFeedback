import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromReducer from './+state/projects.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProjectsEffects } from './+state/projects.effects';

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature(
			fromReducer.projectsFeatureKey,
			fromReducer.projectsReducer
		),
		EffectsModule.forFeature([ProjectsEffects]),
	],
})
export class NgArchProjectsManagementDataAccessModule {}
