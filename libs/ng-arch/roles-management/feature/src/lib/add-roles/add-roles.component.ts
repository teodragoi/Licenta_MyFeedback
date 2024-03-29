import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RolesFacade } from '@ng-arch/ng-arch/roles-management/data-access';
import { RoleType } from '@ng-arch/ng-arch/roles-management/types';
import { SelectData } from '@ng-arch/shared/types';

@Component({
	selector: 'ng-arch-add-roles',
	templateUrl: './add-roles.component.html',
	styleUrls: ['./add-roles.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddRolesComponent implements OnInit {
	public form: FormGroup;

	public selectTypeOptions: SelectData[] = [
		{
			name: RoleType.ADMIN,
			value: RoleType.ADMIN,
		},
		{
			name: RoleType.MANAGER,
			value: RoleType.MANAGER,
		},
		{
			name: RoleType.EMPLOYEE,
			value: RoleType.EMPLOYEE,
		},
	];

	public get addButtonDisabled(): boolean {
		return !this.form.valid;
	}

	constructor(private fb: FormBuilder, private rolesFacade: RolesFacade) {}

	public ngOnInit(): void {
		this.form = this.fb.group({
			roleName: this.fb.control('', Validators.required),
			roleType: this.fb.control('', Validators.required),
		});
	}

	public addRole(): void {
		this.rolesFacade.dispatchAddRole({
			name: this.form.controls['roleName'].value,
			type: this.form.controls['roleType'].value,
		});
	}
}
