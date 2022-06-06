import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedUiMaterialModule } from '@ng-arch/shared/ui/material';
import { TranslateModule } from '@ngx-translate/core';
import { AvatarComponent } from './avatar/avatar.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { SelectComponent } from './select/select.component';
import { SelectionListComponent } from './selection-list/selection-list.component';
import { TableComponent } from './table/table.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
	declarations: [
		AvatarComponent,
		InputComponent,
		SelectComponent,
		TableComponent,
		SelectionListComponent,
		ListComponent,
		SpinnerComponent,
	],
	exports: [
		AvatarComponent,
		InputComponent,
		ListComponent,
		SelectComponent,
		SelectionListComponent,
		SpinnerComponent,
		TableComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		SharedUiMaterialModule,
		TranslateModule,
	],
})
export class SharedUiComponentsModule {}
