import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FeedbacksFacade } from '@ng-arch/ng-arch/feedback/data-access';
import { Feedback } from '@ng-arch/ng-arch/feedback/types';
import {
	LocalStorageService,
	LOCAL_STORAGE_ITEMS,
	ThemeService,
} from '@shared/services';
import { combineLatest, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
	public stats$: Observable<boolean> = of(false);
	public isDarkTheme$ = this.themeService.isDarkTheme$;

	public vmData$: Observable<{
		isLoading: boolean;
		feedbackRequests: Feedback[];
		myFeedbacks: Feedback[];
	}> = combineLatest([
		this.feedbacksFacade.isLoading$,
		this.feedbacksFacade.feedbackRequests$,
		this.feedbacksFacade.myFeedbacks$,
	]).pipe(
		map(([isLoading, feedbackRequests, myFeedbacks]) => ({
			isLoading,
			feedbackRequests,
			myFeedbacks,
		}))
	);

	constructor(
		private feedbacksFacade: FeedbacksFacade,
		private localStorageService: LocalStorageService,
		private themeService: ThemeService
	) {}

	public ngOnInit(): void {
		this.feedbacksFacade.dispatchGetFeedbackRequests(
			this.localStorageService.getItem(LOCAL_STORAGE_ITEMS.EMPLOYEE_ID)
		);

		this.feedbacksFacade.dispatchGetMyFeedbacks(
			this.localStorageService.getItem(LOCAL_STORAGE_ITEMS.EMPLOYEE_ID)
		);
	}

	public uniqueIdentifier(index: number): number {
		return index;
	}
}
