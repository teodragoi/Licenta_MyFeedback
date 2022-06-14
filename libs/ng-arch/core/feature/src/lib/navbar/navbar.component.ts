import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
	LocalStorageService,
	LOCAL_STORAGE_ITEMS,
	ThemeMode,
	ThemeService,
} from '@shared/services';

@Component({
	selector: 'ng-arch-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
	public isDarkTheme$ = this.themeService.isDarkTheme$;
	public get theme(): typeof ThemeMode {
		return ThemeMode;
	}

	public currentLanguage: string = 'en';
	
	public get userId(): string {
		return this.localStorageService.getItem(LOCAL_STORAGE_ITEMS.USER_ID) ?? '';
	}

	constructor(
		private localStorageService: LocalStorageService,
		private themeService: ThemeService,
		private translateService: TranslateService
	) {}

	public changeTranslation(event: MouseEvent): void {
		event.stopPropagation();

		this.currentLanguage = this.currentLanguage === 'en' ? 'ro' : 'en';
		this.translateService.use(this.currentLanguage);
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
