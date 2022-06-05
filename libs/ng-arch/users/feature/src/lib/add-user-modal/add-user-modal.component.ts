import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	ValidationErrors,
	Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UsersFacade } from '@ng-arch/ng-arch/users/data-access';
import { PasswordValidators } from '@shared/services';
import { debounceTime } from 'rxjs/operators';

@Component({
	selector: 'ng-arch-add-user-modal',
	templateUrl: './add-user-modal.component.html',
	styleUrls: ['./add-user-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddUserModalComponent implements OnInit {
	public formGroup: FormGroup;

	constructor(
		private dialogRef: MatDialogRef<AddUserModalComponent>,
		private fb: FormBuilder
	) {}

	public ngOnInit(): void {
		this.formGroup = this.fb.group(
			{
				name: this.fb.control('', Validators.required),
				email: this.fb.control('', [Validators.required, Validators.email]),
				password: this.fb.control('', Validators.required),
				confirmPassword: this.fb.control('', Validators.required),
			},
			{
				validators: PasswordValidators.mustMatch('password', 'confirmPassword'),
			}
		);
	}

	public onConfirmClick(event: Event): void {
		event.stopPropagation();

		this.dialogRef.close({
			name: this.formGroup.get('name')?.value,
			email: this.formGroup.get('email')?.value,
			password: this.formGroup.get('password')?.value,
		});
	}

	public getError(controlName: string): ValidationErrors | null | undefined {
		if (!this.formGroup.get(controlName)?.dirty) {
			return null;
		}

		return this.formGroup.get(controlName)?.errors;
	}
}
