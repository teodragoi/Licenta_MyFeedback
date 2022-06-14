import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackDetailsFacade } from '@ng-arch/ng-arch/feedback-details/data-access';
import { FeedbackDetailsVmData } from '@ng-arch/ng-arch/feedback-details/types';
import {
	FeedbackTemplate,
	Question,
	QuestionTypes,
} from '@ng-arch/ng-arch/feedback-templates/types';
import { Answer } from '@ng-arch/ng-arch/feedback/types';
import { combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
	selector: 'ng-arch-feedback-details',
	templateUrl: './feedback-details.component.html',
	styleUrls: ['./feedback-details.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedbackDetailsComponent implements OnInit {
	public formGroup: FormGroup;
	public readonly QuestionTypes = QuestionTypes;
	public vmData$: Observable<FeedbackDetailsVmData> = combineLatest([
		this.feedbackDetailsFacade.isLoading$,
		this.feedbackDetailsFacade.feedback$,
	]).pipe(
		map(([isLoading, feedback]) => ({ isLoading, feedback })),
		tap((data: FeedbackDetailsVmData) => {
			if (!!data.feedback && !data.feedback.requestCompleted) {
				this.formGroup = this.fb.group({});

				data.feedback.template.questions.forEach((question: Question) => {
					this.formGroup.addControl(
						question.question,
						this.fb.control(
							question.type === QuestionTypes.RATING ? 10 : '',
							Validators.required
						)
					);
				});
			}
		})
	);

	constructor(
		private fb: FormBuilder,
		private feedbackDetailsFacade: FeedbackDetailsFacade,
		private route: ActivatedRoute,
		private router: Router
	) {}

	public ngOnInit(): void {
		this.feedbackDetailsFacade.dispatchGetFeedbackDetails(
			this.route.snapshot.params['feedbackId']
		);
	}

	public getQuestionTitle(
		template: FeedbackTemplate | undefined,
		index: number
	): string {
		if (!template) {
			return '';
		}
		return template.questions[index].question;
	}

	public onSendFeedbackClicked(questions: Question[]): void {
		if (!questions.length) {
			return;
		}

		this.feedbackDetailsFacade.dispatchSendFeedback(
			this.route.snapshot.params['feedbackId'],
			this.buildAnswers(questions)
		);

		this.router.navigate(['dashboard']);
	}

	public uniqueIdentifier(index: number): number {
		return index;
	}

	private buildAnswers(questions: Question[]): Answer[] {
		return questions.map((question: Question) => ({
			question,
			response: this.formGroup.get(question.question)?.value,
		}));
	}
}
