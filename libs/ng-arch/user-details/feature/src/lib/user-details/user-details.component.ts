import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { EmployeeDetailsFacade } from '@ng-arch/ng-arch/employee-details/data-access';
import { ProjectsFacade } from '@ng-arch/ng-arch/projects-management/data-access';
import { UserDetailsFacade } from '@ng-arch/ng-arch/user-details/data-access';
import { User, UserDetailsVmData } from '@ng-arch/ng-arch/users/types';
import { ListData } from '@ng-arch/shared/types';
import { Observable } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';
import { ChangePasswordModalComponent } from '../change-password-modal/change-password-modal.component';
import { UserDetailsPageService } from '../user-details-page.service';

@Component({
	selector: 'ng-arch-user-details',
	templateUrl: './user-details.component.html',
	styleUrls: ['./user-details.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent implements OnInit {
	public vmData$: Observable<UserDetailsVmData> =
		this.userDetailsPageService.vmData$.pipe(
			filter((data: UserDetailsVmData) => !!data.user),
			tap((data: UserDetailsVmData) => {
				this.user = data.user;
				this.formGroup.patchValue({
					name: this.user?.name,
					email: this.user?.email,
				});

				this.cd.detectChanges();

				this.employeeDetailsFacade.dispatchGetEmployeeDetails(
					this.user?.employee?._id ?? ''
				);

				this.projectsFacade.dispatchGetProjectsByEmployee(
					this.user?.employee?._id ?? ''
				);
			})
		);
	public rolesData$: Observable<ListData[] | undefined> =
		this.userDetailsPageService.rolesData$;

	public projectsData$: Observable<ListData[] | undefined> =
		this.userDetailsPageService.projectsData$;

	public editNameEnabled = false;
	public formGroup: FormGroup;

	private user: User | null;

	constructor(
		private cd: ChangeDetectorRef,
		private dialog: MatDialog,
		private employeeDetailsFacade: EmployeeDetailsFacade,
		private fb: FormBuilder,
		private projectsFacade: ProjectsFacade,
		private route: ActivatedRoute,
		private userDetailsFacade: UserDetailsFacade,
		private userDetailsPageService: UserDetailsPageService
	) {}

	public ngOnInit(): void {
		this.userDetailsFacade.dispatchGetUserDetails(
			this.route.snapshot.params['userId']
		);

		this.formGroup = this.fb.group({
			name: this.fb.control(''),
			email: this.fb.control('', Validators.email),
		});
	}

	public onChangePasswordClick(): void {
		const dialogRef: MatDialogRef<ChangePasswordModalComponent> =
			this.dialog.open(ChangePasswordModalComponent, { width: '500px' });

		dialogRef
			.afterClosed()
			.pipe(take(1))
			.subscribe((password: string) => {
				this.userDetailsFacade.dispatchEditUserPassword(
					this.user?._id ?? '',
					password
				);
			});
	}

	public onEditNameClick(): void {
		if (this.editNameEnabled) {
			this.userDetailsFacade.dispatchEditUserDetails(this.user?._id ?? '', {
				name: this.formGroup.get('name')?.value,
			});
		}

		this.editNameEnabled = !this.editNameEnabled;
	}
}
