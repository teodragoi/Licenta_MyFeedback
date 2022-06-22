import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RoleType } from '@ng-arch/ng-arch/roles-management/types';
import { UserDetailsFacade } from '@ng-arch/ng-arch/user-details/data-access';
import { User } from '@ng-arch/ng-arch/users/types';
import { TranslateService } from '@ngx-translate/core';
import {
	LocalStorageService,
	LOCAL_STORAGE_ITEMS,
	ThemeMode,
	ThemeService,
} from '@shared/services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'ng-arch-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
	public isDarkTheme$ = this.themeService.isDarkTheme$;
	public userName$: Observable<string> = this.userDetailsFacade.user$.pipe(
		map((user: User | null) => user?.name ?? 'Test Name')
	);
	public get theme(): typeof ThemeMode {
		return ThemeMode;
	}

	public currentLanguage: string = 'en';

	public readonly roleType = RoleType;

	public get userId(): string {
		return this.localStorageService.getItem(LOCAL_STORAGE_ITEMS.USER_ID) ?? '';
	}

	constructor(
		private localStorageService: LocalStorageService,
		private userDetailsFacade: UserDetailsFacade,
		private themeService: ThemeService,
		private translateService: TranslateService
	) {}

	public ngOnInit(): void {
		this.userDetailsFacade.dispatchGetUserDetails(this.userId);
	}

	public changeTranslation(event: MouseEvent): void {
		event.stopPropagation();

		this.currentLanguage = this.currentLanguage === 'en' ? 'ro' : 'en';
		this.translateService.use(this.currentLanguage);
	}

	public isAvailable(role: RoleType): boolean {
		const userRole: string = this.localStorageService.getItem(
			LOCAL_STORAGE_ITEMS.ROLE
		);

		return userRole === RoleType.ADMIN ? true : userRole === role.valueOf();
	}

	public logout(): void {
		this.localStorageService.removeItem(LOCAL_STORAGE_ITEMS.IS_AUTHENTICATED);
		this.localStorageService.removeItem(LOCAL_STORAGE_ITEMS.USER_ID);
	}

	public setTheme(event: MouseEvent, theme: ThemeMode): void {
		event.stopPropagation();
		this.themeService.setTheme(theme);
	}
}
