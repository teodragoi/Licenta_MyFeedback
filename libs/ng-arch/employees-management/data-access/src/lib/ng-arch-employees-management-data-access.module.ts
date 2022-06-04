import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import {
	employeesFeatureKey,
	employeesReducer,
} from './+state/employees.reducers';
import { EffectsModule } from '@ngrx/effects';
import { EmployeesEffects } from './+state/employees.effects';

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature(employeesFeatureKey, employeesReducer),
		EffectsModule.forFeature([EmployeesEffects]),
	],
})
export class NgArchEmployeesManagementDataAccessModule {}
