import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	ValidationErrors,
	Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {
	FeedbackTemplate,
	Question,
	QuestionTypes,
} from '@ng-arch/ng-arch/feedback-templates/types';
import { SelectData } from '@ng-arch/shared/types';

@Component({
	selector: 'ng-arch-add-template-modal',
	templateUrl: './add-template-modal.component.html',
	styleUrls: ['./add-template-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTemplateModalComponent implements OnInit {
	public formGroup: FormGroup;
	public numberOfQuestions = 0;

	public typeSelectData: SelectData[] = [
		{
			name: 'feedbackTemplates.rating',
			value: QuestionTypes.RATING,
		},
		{
			name: 'feedbackTemplates.text',
			value: QuestionTypes.TEXT,
		},
	];

	public get disableAddQuestionButton(): boolean {
		return this.numberOfQuestions >= 10;
	}

	public get noQuestionsAdded(): boolean {
		return this.numberOfQuestions === 0;
	}

	public get formIsValid(): boolean {
		return this.formGroup.valid;
	}

	constructor(
		private dialogRef: MatDialogRef<AddTemplateModalComponent>,
		private fb: FormBuilder
	) {}

	public ngOnInit(): void {
		this.formGroup = this.fb.group({
			name: this.fb.control('', Validators.required),
		});
	}

	public getError(controlName: string): ValidationErrors | null | undefined {
		if (!this.formGroup.get(controlName)?.dirty) {
			return null;
		}

		return this.formGroup.get(controlName)?.errors;
	}

	public getFormControlName(index: number, type: 'question' | 'type'): string {
		return type === 'question' ? `question${index}` : `type${index}`;
	}

	public onAddQuestionClicked(): void {
		this.formGroup.addControl(
			`question${this.numberOfQuestions}`,
			this.fb.control('', Validators.required)
		);

		this.formGroup.addControl(
			`type${this.numberOfQuestions}`,
			this.fb.control(QuestionTypes.RATING, Validators.required)
		);
		this.numberOfQuestions = this.numberOfQuestions + 1;
	}

	public onConfirmButtonClicked(): void {
		if (!this.formGroup.get('name')?.value) {
			return;
		}

		const feedbackTemplate: FeedbackTemplate = {
			name: this.formGroup.get('name')?.value,
			questions: this.buildQuestionsArray(),
		};

		this.dialogRef.close(feedbackTemplate);
	}

	public onRemoveLastQuestionClicked(): void {
		this.formGroup.removeControl(`question${this.numberOfQuestions}`);
		this.formGroup.removeControl(`type${this.numberOfQuestions}`);
		this.numberOfQuestions = this.numberOfQuestions - 1;
	}

	public uniqueIdentifier(index: number): number {
		return index;
	}

	private buildQuestionsArray(): Question[] {
		const questions: Question[] = [];
		for (let index = 0; index < this.numberOfQuestions; index++) {
			questions.push({
				question: this.formGroup.get(`question${index}`)?.value,
				type: this.formGroup.get(`type${index}`)?.value,
			});
		}

		return questions;
	}
}
