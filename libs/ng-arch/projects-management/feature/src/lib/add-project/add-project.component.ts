import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'ng-arch-add-project',
	templateUrl: './add-project.component.html',
	styleUrls: ['./add-project.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProjectComponent implements OnInit {
	public formGroup: FormGroup;

	constructor(private fb: FormBuilder) {}

	public ngOnInit(): void {
		this.formGroup = this.fb.group({
			projectName: this.fb.control(''),
		});
	}

	public addProject(): void {
		console.log('add');
	}
}
