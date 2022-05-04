import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromReducer from './+state/roles.reducers';

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature(
			fromReducer.rolesFeatureKey,
			fromReducer.rolesReducer
		),
	],
})
export class NgArchRolesManagementDataAccessModule {}
