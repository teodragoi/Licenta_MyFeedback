import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
	ChangeDetectionStrategy,
	Component,
	forwardRef,
	Input,
	ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { ListData } from '@ng-arch/shared/types';

@Component({
	selector: 'shared-selection-list',
	templateUrl: './selection-list.component.html',
	styleUrls: ['./selection-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => SelectionListComponent),
			multi: true,
		},
	],
})
export class SelectionListComponent implements ControlValueAccessor {
	@Input()
	public get isSingleSelection(): BooleanInput {
		return this._isSingleSelection;
	}
	public set isSingleSelection(isSingle: BooleanInput) {
		this._isSingleSelection = coerceBooleanProperty(isSingle);
	}
	private _isSingleSelection: BooleanInput;

	@Input()
	public get listData(): ListData[] | null {
		return this._listData;
	}
	public set listData(data: ListData[] | null) {
		if (!data?.length || !this.selectedValues) {
			return;
		}

		this._listData = data.map((item: ListData) =>
			this.selectedValues.includes(item.value ?? '')
				? { ...item, selected: true }
				: { ...item }
		);
	}
	private _listData: ListData[] | null;

	@ViewChild(MatSelectionList) private matSelectionList: MatSelectionList;

	public selectedValues: (string | number)[];

	public onChange: Function;
	public onTouched: Function;

	public onSelectionChange(): void {
		this.onChange(
			this.matSelectionList.selectedOptions.selected.map(
				(item: MatListOption) => item.value
			)
		);
	}

	public registerOnChange(fn: Function): void {
		this.onChange = fn;
	}

	public registerOnTouched(fn: Function): void {
		this.onTouched = fn;
	}

	public uniqueIdentifier(index: number): number {
		return index;
	}

	public writeValue(selectedValues: any): void {
		this.selectedValues = selectedValues;
		console.log('in write', selectedValues);
	}
}
