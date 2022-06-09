import {
	ChangeDetectionStrategy,
	Component,
	Inject,
	OnInit,
} from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	ValidationErrors,
	Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FeedbackTemplateFacade } from '@ng-arch/ng-arch/feedback-templates/data-access';
import {
	FeedbackTemplate,
	Question,
	QuestionTypes,
} from '@ng-arch/ng-arch/feedback-templates/types';
import { SelectData } from '@ng-arch/shared/types';
import { combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
	selector: 'ng-arch-edit-template-modal',
	templateUrl: './edit-template-modal.component.html',
	styleUrls: ['./edit-template-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditTemplateModalComponent implements OnInit {
	public data$: Observable<{ isLoading: boolean }> = combineLatest([
		this.feedbackTemplateFacade.isLoading$,
		this.feedbackTemplateFacade.feedbackTemplate$,
	]).pipe(
		tap(([isLoading, feedbackTemplate]) => {
			if (!isLoading) {
				this.numberOfQuestions = feedbackTemplate?.questions.length ?? 0;

				this.formGroup = this.fb.group({
					name: this.fb.control(feedbackTemplate?.name, Validators.required),
				});

				feedbackTemplate?.questions.forEach(
					(question: Question, index: number) => {
						this.formGroup.addControl(
							`question${index}`,
							this.fb.control(question.question, Validators.required)
						);

						this.formGroup.addControl(
							`type${index}`,
							this.fb.control(question.type, Validators.required)
						);
					}
				);
			}
		}),
		map(([isLoading, _]) => ({ isLoading }))
	);

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
		@Inject(MAT_DIALOG_DATA) private data: { feedbackTemplateId: string },
		private dialogRef: MatDialogRef<EditTemplateModalComponent>,
		private fb: FormBuilder,
		private feedbackTemplateFacade: FeedbackTemplateFacade
	) {}

	public ngOnInit(): void {
		this.feedbackTemplateFacade.dispatchGetFeedbackTemplate(
			this.data.feedbackTemplateId
		);
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
