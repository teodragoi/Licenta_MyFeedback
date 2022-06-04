import {
	ChangeDetectionStrategy,
	Component,
	Inject,
	OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeesFacade } from '@ng-arch/ng-arch/employees-management/data-access';
import { Employee } from '@ng-arch/ng-arch/employees-management/types';
import { Project } from '@ng-arch/ng-arch/projects-management/types';
import { Role } from '@ng-arch/ng-arch/roles-management/types';
import { ListData } from '@ng-arch/shared/types';
import { Observable } from 'rxjs';
import { ManageProjectsService } from '../manage-projects.service';

@Component({
	selector: 'ng-arch-employee-assignment-modal',
	templateUrl: './employee-assignment-modal.component.html',
	styleUrls: ['./employee-assignment-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeAssignmentModalComponent implements OnInit {
	public employeesData$: Observable<ListData[]> =
		this.manageProjectsService.availableEmployeesData$;

	public formGroup: FormGroup;

	public get disabledConfirmButton(): boolean {
		return !this.formGroup.get('selectedEmployees')?.value.length;
	}

	constructor(
		@Inject(MAT_DIALOG_DATA)
		public data: {
			project: Project;
		},
		private fb: FormBuilder,
		private dialogRef: MatDialogRef<EmployeeAssignmentModalComponent>,
		private employeesFacade: EmployeesFacade,
		private manageProjectsService: ManageProjectsService
	) {}

	public ngOnInit(): void {
		this.employeesFacade.dispatchGetEmployeesByRole(
			this.data.project.availableRoles?.map((role: Role) => role._id ?? '') ??
				[]
		);

		this.formGroup = this.fb.group({
			selectedEmployees: this.fb.control(
				this.data.project.employees?.map((employee: Employee) => employee._id)
			),
		});
	}

	public onConfirmClick(event: Event): void {
		event.stopPropagation();
		this.dialogRef.close({
			employees: this.formGroup.get('selectedEmployees')?.value,
		});
	}
}
