import { Injectable } from '@angular/core';
import { User } from '@ng-arch/ng-arch/users/types';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as UsersActions from './users.actions';
import * as UsersSelectors from './users.selectors';
import { UsersState } from './users.reducers';

@Injectable({
	providedIn: 'root',
})
export class UsersFacade {
	public isLoading$: Observable<boolean> = this.store.select(
		UsersSelectors.selectIsLoading
	);

	public users$: Observable<User[]> = this.store.select(
		UsersSelectors.selectUsers
	);

	constructor(private store: Store<UsersState>) {}

	public dispatchGetUsers(): void {
		this.store.dispatch(UsersActions.getUsers());
	}

	public dispatchAddUser(user: User): void {
		this.store.dispatch(UsersActions.addUser({ user }));
	}

	public dispatchDeleteUser(userId: string): void {
		this.store.dispatch(UsersActions.deleteUser({ userId }));
	}
}
