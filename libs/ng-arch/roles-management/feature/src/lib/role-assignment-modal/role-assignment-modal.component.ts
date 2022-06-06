import {
	ChangeDetectionStrategy,
	Component,
	Inject,
	OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RolesFacade } from '@ng-arch/ng-arch/roles-management/data-access';
import { AssignmentRolesVmData } from '@ng-arch/ng-arch/roles-management/types';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ManageRolesService } from '../manage-roles.service';

@Component({
	selector: 'ng-arch-role-assignment-modal',
	templateUrl: './role-assignment-modal.component.html',
	styleUrls: ['./role-assignment-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoleAssignmentModalComponent implements OnInit {
	public vmData$: Observable<AssignmentRolesVmData> =
		this.manageRolesService.assignmentRolesData$;
	public formGroup: FormGroup;

	public get disabledConfirmButton(): boolean {
		return !this.formGroup.dirty;
	}

	constructor(
		@Inject(MAT_DIALOG_DATA)
		public data: { roles: string[] | undefined },
		private dialogRef: MatDialogRef<RoleAssignmentModalComponent>,
		private fb: FormBuilder,
		private manageRolesService: ManageRolesService,
		private rolesFacade: RolesFacade
	) {}

	public ngOnInit(): void {
		this.formGroup = this.fb.group({
			selectedRoles: this.fb.control(this.data.roles),
		});

		this.rolesFacade.dispatchGetAllRoles();
	}

	public onConfirmClick(event: Event): void {
		event.stopPropagation();
		this.dialogRef.close({
			roles: this.formGroup.get('selectedRoles')?.value,
		});
	}
}
