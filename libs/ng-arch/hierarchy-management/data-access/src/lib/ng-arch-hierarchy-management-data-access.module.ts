import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromReducer from './+state/hierarchy-reducers';

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature(
			fromReducer.hierarchyFeatureKey,
			fromReducer.hierarchyReducer
		),
	],
})
export class NgArchHierarchyManagementDataAccessModule {}
