import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { usersFeatureKey, usersReducer } from './+state/users.reducers';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './+state/users.effects';

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature(usersFeatureKey, usersReducer),
		EffectsModule.forFeature([UsersEffects]),
	],
})
export class NgArchUsersDataAccessModule {}
