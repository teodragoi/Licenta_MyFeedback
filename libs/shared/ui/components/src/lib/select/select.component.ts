import {
	ChangeDetectionStrategy,
	Component,
	forwardRef,
	Input,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { SelectData } from '@ng-arch/shared/types';

@Component({
	selector: 'shared-select',
	templateUrl: './select.component.html',
	styleUrls: ['./select.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => SelectComponent),
			multi: true,
		},
	],
})
export class SelectComponent implements ControlValueAccessor {
	@Input() public label: string;
	@Input() public title: string;
	@Input() public selectOptions: SelectData[] | null;

	public isDisabled: boolean;
	public selectedValue: string | number;

	public onChange: Function;
	public onTouched: Function;

	public onSelectionChange(selection: MatSelectChange): void {
		this.onChange(selection.value);
	}

	public registerOnChange(fn: Function): void {
		this.onChange = fn;
	}

	public registerOnTouched(fn: Function): void {
		this.onTouched = fn;
	}

	public setDisabledState(disabled: boolean): void {
		this.isDisabled = disabled;
	}

	public uniqueIdentifier(index: number): number {
		return index;
	}

	public writeValue(value: string | number): void {
		this.selectedValue = value;
	}
}
