import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	ValidationErrors,
	Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PasswordValidators } from '@shared/services';

@Component({
	selector: 'ng-arch-change-password-modal',
	templateUrl: './change-password-modal.component.html',
	styleUrls: ['./change-password-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangePasswordModalComponent implements OnInit {
	public formGroup: FormGroup;

	constructor(
		private dialogRef: MatDialogRef<ChangePasswordModalComponent>,
		private fb: FormBuilder
	) {}

	public ngOnInit(): void {
		this.formGroup = this.fb.group(
			{
				password: this.fb.control('', Validators.required),
				confirmPassword: this.fb.control('', Validators.required),
			},
			{
				validators: PasswordValidators.mustMatch('password', 'confirmPassword'),
			}
		);
	}

	public getError(controlName: string): ValidationErrors | null | undefined {
		if (!this.formGroup.get(controlName)?.dirty) {
			return null;
		}

		return this.formGroup.get(controlName)?.errors;
	}

	public onConfirmClick(event: Event): void {
		event.stopPropagation();

		this.dialogRef.close(this.formGroup.get('password')?.value);
	}
}
