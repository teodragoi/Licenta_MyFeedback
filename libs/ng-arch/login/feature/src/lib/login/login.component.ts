import { HttpErrorResponse } from '@angular/common/http';
import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnInit,
} from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	ValidationErrors,
	Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@ng-arch/ng-arch/login/data-access';
import { User } from '@ng-arch/ng-arch/users/types';
import { LOCAL_STORAGE_ITEMS, LocalStorageService } from '@shared/services';
import { take } from 'rxjs/operators';

@Component({
	selector: 'ng-arch-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
	public formGroup: FormGroup;

	constructor(
		private cd: ChangeDetectorRef,
		private fb: FormBuilder,
		private localStorageService: LocalStorageService,
		private loginService: LoginService,
		private router: Router
	) {}

	public ngOnInit(): void {
		this.formGroup = this.fb.group({
			email: this.fb.control('', [Validators.required, Validators.email]),
			password: this.fb.control('', Validators.required),
		});
	}

	public getError(controlName: string): ValidationErrors | null | undefined {
		if (!this.formGroup.get(controlName)?.dirty) {
			return null;
		}

		return this.formGroup.get(controlName)?.errors;
	}

	public login(event: Event): void {
		event.stopPropagation();

		this.loginService
			.login({
				email: this.formGroup.get('email')?.value,
				password: this.formGroup.get('password')?.value,
			})
			.pipe(take(1))
			.subscribe(
				(user: User) => {
					this.localStorageService.setItem(
						LOCAL_STORAGE_ITEMS.IS_AUTHENTICATED,
						'true'
					);

					this.localStorageService.setItem(
						LOCAL_STORAGE_ITEMS.USER_ID,
						user._id ?? ''
					);

					this.router.navigate(['dashboard']);
				},
				(error: HttpErrorResponse) => {
					if (!!error.error['user']) {
						this.formGroup.get('email')?.setErrors({ user: true });
						console.log(this.formGroup.get('email')?.errors);
					}

					if (!!error.error['password']) {
						this.formGroup.get('password')?.setErrors({ password: true });
					}
					this.cd.detectChanges();
				}
			);
	}
}
