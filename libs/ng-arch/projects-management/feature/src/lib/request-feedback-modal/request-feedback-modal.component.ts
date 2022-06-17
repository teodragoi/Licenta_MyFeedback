import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SelectData } from '@ng-arch/shared/types';
import { combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ManageProjectsService } from '../manage-projects.service';

@Component({
	templateUrl: './request-feedback-modal.component.html',
	styleUrls: ['./request-feedback-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestFeedbackModalComponent implements OnInit {
	public vmData$: Observable<{
		employees: SelectData[];
		templates: SelectData[];
	}> = combineLatest([
		this.manageProjectsService.assignedEmployeesSelectData$,
		this.manageProjectsService.feedbackTemplatesData$,
	]).pipe(
		map(([employees, templates]) => ({
			employees,
			templates,
		}))
	);

	public formGroup: FormGroup;

	constructor(
		private dialogRef: MatDialogRef<RequestFeedbackModalComponent>,
		private fb: FormBuilder,
		private manageProjectsService: ManageProjectsService
	) {}

	public ngOnInit(): void {
		this.formGroup = this.fb.group({
			employee: this.fb.control('', Validators.required),
			template: this.fb.control('', Validators.required),
		});
	}

	public onConfirmClick(employees: SelectData[]): void {
		this.dialogRef.close({
			employeeId: this.formGroup.get('employee')?.value ?? '',
			templateId: this.formGroup.get('template')?.value ?? '',
			fromEmployeeIds: this.generateEmployeeIds(employees),
		});
	}

	private generateEmployeeIds(employees: SelectData[]): string[] {
		return employees
			.filter(
				(employee) => employee.value !== this.formGroup.get('employee')?.value
			)
			.map((employee) => employee.value.toString());
	}
}
