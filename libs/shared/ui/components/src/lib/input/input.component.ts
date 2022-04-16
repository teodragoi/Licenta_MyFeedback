import {
	ChangeDetectionStrategy,
	Component,
	forwardRef,
	Input,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'shared-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => InputComponent),
			multi: true,
		},
	],
})
export class InputComponent implements ControlValueAccessor {
	@Input() label: string;
	@Input() placeholder = '';

	public inputValue: string;
	public isDisabled: boolean;

	public onChange: Function;
	public onTouched: Function;

	constructor() {}

	public onInputChange(val: any) {
		this.onChange(val);
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

	public writeValue(value: string): void {
		this.inputValue = value;
	}
}
