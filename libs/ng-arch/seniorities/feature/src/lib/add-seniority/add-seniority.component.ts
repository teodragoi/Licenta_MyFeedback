import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'ng-arch-add-seniority',
	templateUrl: './add-seniority.component.html',
	styleUrls: ['./add-seniority.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddSeniorityComponent implements OnInit {
	public form: FormGroup;

	public get addButtonDisabled(): boolean {
		return !this.form.valid;
	}

	constructor(private fb: FormBuilder) {}

	public ngOnInit(): void {
		this.form = this.fb.group({
			seniorityName: this.fb.control('', Validators.required),
		});
	}

	public addSeniority(): void {}
}
