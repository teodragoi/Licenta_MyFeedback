import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'shared-rating',
	templateUrl: './rating.component.html',
	styleUrls: ['./rating.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => RatingComponent),
			multi: true,
		},
	],
})
export class RatingComponent implements ControlValueAccessor {
	public selectedRating: number;

	public onChange: Function;
	public onTouched: Function;

	public onRatingSelected(rating: number): void {
		this.selectedRating = rating + 1;
		this.onChange(this.selectedRating);
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

	public writeValue(value: number): void {
		if (!value) {
			return;
		}

		this.selectedRating = value;
	}
}
