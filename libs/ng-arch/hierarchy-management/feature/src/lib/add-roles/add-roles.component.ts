import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HierarchyFacade } from '@ng-arch/ng-arch/hierarchy-management/data-access';
import { RoleType } from '@ng-arch/ng-arch/hierarchy-management/types';
import { SelectData } from '@ng-arch/shared/types';
import { RolesService } from '../roles.service';

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

	constructor(private fb: FormBuilder, private rolesService: RolesService) {}

	public ngOnInit(): void {
		this.form = this.fb.group({
			roleName: this.fb.control('', Validators.required),
			roleType: this.fb.control('', Validators.required),
		});
	}

	public addRole(): void {
		this.rolesService.addRole({
			name: this.form.controls['roleName'].value,
			type: this.form.controls['roleType'].value,
		});
	}
}
