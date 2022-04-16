import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiMaterialModule } from '@ng-arch/shared/ui/material';
import { AvatarComponent } from './avatar/avatar.component';
import { SelectComponent } from './select/select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';

@NgModule({
	declarations: [AvatarComponent, InputComponent, SelectComponent],
	exports: [AvatarComponent, InputComponent, SelectComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		SharedUiMaterialModule,
	],
})
export class SharedUiComponentsModule {}
