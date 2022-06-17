import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { RoleType } from '../../../ng-arch/roles-management/types/src';
import { LocalStorageService, LOCAL_STORAGE_ITEMS } from '../local-storage';

@Injectable({
	providedIn: 'root',
})
export class ManagerGuardService implements CanActivate {
	constructor(
		public localStorageService: LocalStorageService,
		public router: Router
	) {}

	public canActivate(): boolean {
		return [RoleType.MANAGER.valueOf(), RoleType.ADMIN.valueOf()].includes(
			this.localStorageService.getItem(LOCAL_STORAGE_ITEMS.ROLE)
		);
	}
}
