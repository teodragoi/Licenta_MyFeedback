import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from '@ng-arch/ng-arch/users/types';
import { UsersFacade } from 'libs/ng-arch/users/data-access/src';
import { take } from 'rxjs/operators';
import { AddUserModalComponent } from '../add-user-modal/add-user-modal.component';

@Component({
	selector: 'ng-arch-manage-users',
	templateUrl: './manage-users.component.html',
	styleUrls: ['./manage-users.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageUsersComponent implements OnInit {
	constructor(private dialog: MatDialog, private usersFacade: UsersFacade) {}

	public ngOnInit(): void {
		this.usersFacade.dispatchGetUsers();
	}

	public openAddUserModal(): void {
		const dialogRef: MatDialogRef<AddUserModalComponent> = this.dialog.open(
			AddUserModalComponent,
			{ width: '500px' }
		);

		dialogRef
			.afterClosed()
			.pipe(take(1))
			.subscribe((user: User) => {
				this.usersFacade.dispatchAddUser(user);
			});
	}
}
