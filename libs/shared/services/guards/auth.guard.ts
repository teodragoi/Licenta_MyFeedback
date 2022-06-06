import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { take } from 'rxjs/operators';
import { LocalStorageService, LOCAL_STORAGE_ITEMS } from '../local-storage';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {
	constructor(
		public localStorageService: LocalStorageService,
		public router: Router
	) {}

	public canActivate(): boolean {
		const isAuthenticated: boolean =
			this.localStorageService.getItem(LOCAL_STORAGE_ITEMS.IS_AUTHENTICATED) ===
			'true';

		if (!isAuthenticated) {
			this.router.navigate(['login']);
			return false;
		}

		return true;
	}
}
