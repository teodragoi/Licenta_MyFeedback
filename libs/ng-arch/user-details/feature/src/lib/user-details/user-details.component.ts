import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDetailsFacade } from '@ng-arch/ng-arch/user-details/data-access';

@Component({
	selector: 'ng-arch-user-details',
	templateUrl: './user-details.component.html',
	styleUrls: ['./user-details.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent implements OnInit {
	constructor(
		private route: ActivatedRoute,
		private userDetailsFacade: UserDetailsFacade
	) {}

	public ngOnInit(): void {
		console.log(this.route.snapshot.params['userId']);
		this.userDetailsFacade.dispatchGetUserDetails(
			this.route.snapshot.params['userId']
		);
	}
}
