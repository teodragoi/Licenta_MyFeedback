import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromReducer from './+state/roles.reducers';
import { EffectsModule } from '@ngrx/effects';
import { RolesEffects } from './+state/roles.effects';

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature(
			fromReducer.rolesFeatureKey,
			fromReducer.rolesReducer
		),
		EffectsModule.forFeature([RolesEffects]),
	],
})
export class NgArchRolesManagementDataAccessModule {}
