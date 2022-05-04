import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Role, RoleVmData } from '@ng-arch/ng-arch/roles-management/types';
import { TableActions } from '@ng-arch/shared/types';
import { Observable } from 'rxjs';
import { RolesService } from '../roles.service';

@Component({
	selector: 'ng-arch-manage-roles',
	templateUrl: './manage-roles.component.html',
	styleUrls: ['./manage-roles.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageRolesComponent {
	public vmData$: Observable<RoleVmData> = this.rolesService.roleData$;

	constructor(private rolesService: RolesService) {}

	public onActionSelected(event: {
		action: TableActions;
		element: Role;
	}): void {
		console.log(event);
		if (event.action === TableActions.DELETE) {
			this.rolesService.removeRole(event.element);
		}
	}
}
