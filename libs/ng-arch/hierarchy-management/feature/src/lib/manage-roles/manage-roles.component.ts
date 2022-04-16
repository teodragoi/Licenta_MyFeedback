import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RoleVmData } from '@ng-arch/ng-arch/hierarchy-management/types';
import { Observable } from 'rxjs';
import { RolesService } from '../roles.service';

@Component({
	selector: 'ng-arch-manage-roles',
	templateUrl: './manage-roles.component.html',
	styleUrls: ['./manage-roles.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageRolesComponent implements OnInit {
	public vmData$: Observable<RoleVmData> = this.rolesService.roleData$;

	constructor(private rolesService: RolesService) {}

	public ngOnInit(): void {
		this.vmData$.subscribe((res) => {
			console.log(res);
		});
	}
}
