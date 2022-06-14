import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from '@ng-arch/ng-arch/feedback/types';

@Component({
	selector: 'ng-arch-feedback-card',
	templateUrl: './feedback-card.component.html',
	styleUrls: ['./feedback-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedbackCardComponent {
	@Input() feedback: Feedback;

	constructor(private router: Router) {}

	public onOpenFeedbackClick(): void {
		this.router.navigate([`/feedback-details/${this.feedback._id}`]);
	}
}
