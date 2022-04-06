import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeService } from '@shared/services';

@Component({
	selector: 'ng-arch-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	constructor(private themeService: ThemeService) {
		this.themeService.setThemeOnStart();
	}
}
