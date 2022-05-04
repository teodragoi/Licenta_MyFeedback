import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiMaterialModule } from '@ng-arch/shared/ui/material';
import { AvatarComponent } from './avatar/avatar.component';
import { SelectComponent } from './select/select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { TableComponent } from './table/table.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [
		AvatarComponent,
		InputComponent,
		SelectComponent,
		TableComponent,
	],
	exports: [AvatarComponent, InputComponent, SelectComponent, TableComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		SharedUiMaterialModule,
		TranslateModule,
	],
})
export class SharedUiComponentsModule {}
