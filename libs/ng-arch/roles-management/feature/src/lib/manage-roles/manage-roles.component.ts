import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RolesFacade } from '@ng-arch/ng-arch/roles-management/data-access';
import { Role, RoleVmData } from '@ng-arch/ng-arch/roles-management/types';
import { TableActions } from '@ng-arch/shared/types';
import { Observable } from 'rxjs';
import { ManageRolesService } from '../manage-roles.service';

@Component({
	selector: 'ng-arch-manage-roles',
	templateUrl: './manage-roles.component.html',
	styleUrls: ['./manage-roles.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageRolesComponent implements OnInit {
	public vmData$: Observable<RoleVmData> = this.manageRolesService.roleData$;

	constructor(
		private manageRolesService: ManageRolesService,
		private rolesFacade: RolesFacade
	) {}

	public ngOnInit(): void {
		this.rolesFacade.dispatchGetAllRoles();
	}

	public onActionSelected(event: {
		action: TableActions;
		element: Role;
	}): void {
		if (event.action === TableActions.DELETE) {
			this.rolesFacade.dispatchDeleteRole(event.element._id ?? '');
		}
	}
}
