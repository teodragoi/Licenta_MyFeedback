import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeMode, ThemeService } from '@shared/services';

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

	constructor(
		private themeService: ThemeService,
		private translateService: TranslateService
	) {}

	public changeTranslation(event: MouseEvent): void {
		event.stopPropagation();

		this.currentLanguage = this.currentLanguage === 'en' ? 'chi' : 'en';
		this.translateService.use(this.currentLanguage);
	}

	public setTheme(event: MouseEvent, theme: ThemeMode): void {
		event.stopPropagation();
		this.themeService.setTheme(theme);
	}
}
