import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromReducer from './+state/projects.reducers';

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature(
			fromReducer.projectsFeatureKey,
			fromReducer.projectsReducer
		),
	],
})
export class NgArchProjectsManagementDataAccessModule {}
