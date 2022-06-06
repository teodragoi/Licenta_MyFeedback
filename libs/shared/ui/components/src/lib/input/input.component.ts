import {
	ChangeDetectionStrategy,
	Component,
	forwardRef,
	Input,
} from '@angular/core';
import {
	ControlValueAccessor,
	NG_VALUE_ACCESSOR,
	ValidationErrors,
} from '@angular/forms';

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
	@Input() type: string;
	@Input() public error: ValidationErrors | null | undefined;

	public get errorMessage(): string {
		if (!this.error) {
			return '';
		}

		if (this.error['email']) {
			return 'validationErrors.email';
		}

		if (this.error['required']) {
			return 'validationErrors.required';
		}

		if (this.error['mustMatch']) {
			return 'validationErrors.mustMatch';
		}

		if (this.error['user']) {
			return 'validationErrors.user';
		}

		if (this.error['password']) {
			return 'validationErrors.password';
		}

		return '';
	}

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
