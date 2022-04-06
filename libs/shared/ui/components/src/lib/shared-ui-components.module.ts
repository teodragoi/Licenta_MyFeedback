import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiMaterialModule } from '@ng-arch/shared/ui/material';
import { AvatarComponent } from './avatar/avatar.component';

@NgModule({
	declarations: [AvatarComponent],
	exports: [AvatarComponent],
	imports: [CommonModule, SharedUiMaterialModule],
})
export class SharedUiComponentsModule {}
