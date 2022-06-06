import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NgArchUserDetailsDataAccessModule } from '@ng-arch/ng-arch/user-details/data-access';
import { SharedUiMaterialModule } from '@ng-arch/shared/ui/material';
import { SharedUiComponentsModule } from '@ng-arch/shared/ui/components';
import { TranslateModule } from '@ngx-translate/core';
import { NgArchLoginFeatureRoutingModule } from './ng-arch-login-feature-routing.module';

@NgModule({
	imports: [
		CommonModule,
		NgArchLoginFeatureRoutingModule,
		NgArchUserDetailsDataAccessModule,
		SharedUiMaterialModule,
		SharedUiComponentsModule,
		TranslateModule,
	],
	declarations: [LoginComponent],
})
export class NgArchLoginFeatureModule {}
