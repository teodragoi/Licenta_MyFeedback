import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SharedUiComponentsModule } from '@ng-arch/shared/ui/components';
import { SharedUiMaterialModule } from '@ng-arch/shared/ui/material';
import { NgArchCoreDataAccessModule } from '@ng-arch/ng-arch/core/data-access';
import { CoreComponent } from './core/core.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgArchCoreFeatureRoutingModule } from './ng-arch-core-feature-routing.module';

@NgModule({
	declarations: [CoreComponent, NavbarComponent],
	exports: [CoreComponent],
	imports: [
		CommonModule,
		NgArchCoreDataAccessModule,
		NgArchCoreFeatureRoutingModule,
		SharedUiComponentsModule,
		SharedUiMaterialModule,
		TranslateModule,
	],
})
export class NgArchCoreFeatureModule {}
