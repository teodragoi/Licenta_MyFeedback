import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiComponentsModule } from '@ng-arch/shared/ui/components';
import { MaterialModule } from 'libs/shared/ui/material/src/lib/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialModule,
		SharedUiComponentsModule,
	],
})
export class NgArchSenioritiesFeatureModule {}
