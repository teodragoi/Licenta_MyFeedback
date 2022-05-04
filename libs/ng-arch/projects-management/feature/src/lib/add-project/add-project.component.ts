import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProjectsFacade } from '@ng-arch/ng-arch/projects-management/data-access';

@Component({
	selector: 'ng-arch-add-project',
	templateUrl: './add-project.component.html',
	styleUrls: ['./add-project.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProjectComponent implements OnInit {
	public form: FormGroup;

	constructor(
		private fb: FormBuilder,
		private projectsFacade: ProjectsFacade
	) {}

	public ngOnInit(): void {
		this.form = this.fb.group({
			projectName: this.fb.control(''),
		});
	}

	public addProject(): void {
		this.projectsFacade.dispatchAddProject({
			name: this.form.controls['projectName'].value,
		});
	}
}
