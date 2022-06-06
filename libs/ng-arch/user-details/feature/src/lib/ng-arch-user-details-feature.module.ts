import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NgArchUserDetailsFeatureRoutingModule } from './ng-arch-user-details-feature-routing.module';
import { NgArchUserDetailsDataAccessModule } from '@ng-arch/ng-arch/user-details/data-access';

@NgModule({
	imports: [
		CommonModule,
		NgArchUserDetailsFeatureRoutingModule,
		NgArchUserDetailsDataAccessModule,
	],
	declarations: [UserDetailsComponent],
})
export class NgArchUserDetailsFeatureModule {}
