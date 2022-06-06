import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserDetailsState } from './user-details.reducers';

import * as UserDetailsActions from './user-details.actions';
import * as UserDetailsSelectors from './user-details.selectors';
import { Observable } from 'rxjs';
import { User } from '@ng-arch/ng-arch/users/types';

@Injectable({
	providedIn: 'root',
})
export class UserDetailsFacade {
	public isLoading$: Observable<boolean> = this.store.select(
		UserDetailsSelectors.selectIsLoading
	);

	public user$: Observable<User | null> = this.store.select(
		UserDetailsSelectors.selectUser
	);

	constructor(private store: Store<UserDetailsState>) {}

	public dispatchGetUserDetails(userId: string): void {
		this.store.dispatch(UserDetailsActions.getUserDetails({ userId }));
	}

	public dispatchEditUserDetails(userId: string, user: Partial<User>): void {
		this.store.dispatch(UserDetailsActions.editUserDetails({ userId, user }));
	}

	public dispatchEditUserPassword(userId: string, password: string): void {
		this.store.dispatch(
			UserDetailsActions.editUserPassword({ userId, password })
		);
	}
}
