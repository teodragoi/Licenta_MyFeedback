import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbacksFacade } from '@ng-arch/ng-arch/feedback/data-access';
import { Feedback } from '@ng-arch/ng-arch/feedback/types';

@Component({
	selector: 'ng-arch-request-card',
	templateUrl: './request-card.component.html',
	styleUrls: ['./request-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestCardComponent {
	@Input() public feedbackRequest: Feedback;

	constructor(
		private feedbacksFacade: FeedbacksFacade,
		private router: Router
	) {}

	public onDismissRequestClick(): void {
		this.feedbacksFacade.dispatchDismissFeedback(
			this.feedbackRequest._id ?? ''
		);
	}

	public onOpenRequestClick(): void {
		this.router.navigate([`/feedback-details/${this.feedbackRequest._id}`]);
	}
}
