import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import {
	employeeDetailsFeatureKey,
	employeeDetailsReducer,
} from './+state/employee-details.reducers';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeDetailsEffects } from './+state/employee-details.effects';

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature(employeeDetailsFeatureKey, employeeDetailsReducer),
		EffectsModule.forFeature([EmployeeDetailsEffects]),
	],
})
export class NgArchEmployeeDetailsDataAccessModule {}
