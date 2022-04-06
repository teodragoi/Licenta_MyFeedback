import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import {
	ErrorStateMatcher,
	MatNativeDateModule,
	MatOptionModule,
	MatRippleModule,
	ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
	MatDialogModule,
	MAT_DIALOG_DATA,
	MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import {
	MatExpansionModule,
	MAT_EXPANSION_PANEL_DEFAULT_OPTIONS,
} from '@angular/material/expansion';
import {
	MatFormFieldModule,
	MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule, MAT_MENU_PANEL } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {
	MatProgressSpinnerModule,
	MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,
} from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import {
	MatSnackBar,
	MatSnackBarModule,
	MAT_SNACK_BAR_DATA,
	MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
	MatTooltipModule,
	MAT_TOOLTIP_DEFAULT_OPTIONS,
} from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';

@NgModule({
	exports: [
		CdkStepperModule,
		CdkTableModule,
		CdkTreeModule,
		ClipboardModule,
		DragDropModule,
		MatAutocompleteModule,
		MatBadgeModule,
		MatBottomSheetModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatCardModule,
		MatCheckboxModule,
		MatChipsModule,
		MatDatepickerModule,
		MatDialogModule,
		MatDividerModule,
		MatExpansionModule,
		MatFormFieldModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatMenuModule,
		MatNativeDateModule,
		MatOptionModule,
		MatPaginatorModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatRadioModule,
		MatRippleModule,
		MatSelectModule,
		MatSidenavModule,
		MatSliderModule,
		MatSlideToggleModule,
		MatSnackBarModule,
		MatSortModule,
		MatStepperModule,
		MatTableModule,
		MatTabsModule,
		MatToolbarModule,
		MatTooltipModule,
		MatTreeModule,
		OverlayModule,
		ScrollingModule,
	],
	providers: [
		MatSnackBar,
		{
			provide: ErrorStateMatcher,
			useClass: ShowOnDirtyErrorStateMatcher,
		},
		{
			provide: MAT_DIALOG_DATA,
			useValue: [],
		},
		{
			provide: MAT_DIALOG_DEFAULT_OPTIONS,
			useValue: {
				autoFocus: false,
				hasBackdrop: true,
			},
		},
		{
			provide: MAT_EXPANSION_PANEL_DEFAULT_OPTIONS,
			useValue: {
				expandedHeight: '4.5rem',
				collapsedHeight: '4.5rem',
			},
		},
		{
			provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
			useValue: {
				appearance: 'outline',
				floatLabel: 'always',
				hideRequiredMarker: true,
			},
		},
		{
			provide: MAT_MENU_PANEL,
			useValue: {
				lazyContent: false,
			},
		},
		{
			provide: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,
			useValue: {
				diameter: 40,
			},
		},
		{
			provide: MAT_SNACK_BAR_DATA,
			useValue: [],
		},
		{
			provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
			useValue: {
				horizontalPosition: 'center',
				verticalPosition: 'bottom',
			},
		},
		{
			provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
			useValue: {
				showDelay: 1000,
			},
		},
	],
})
export class MaterialModule {}
