import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeService } from '@shared/services';
import { Observable, of } from 'rxjs';

@Component({
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
	public stats$: Observable<boolean> = of(false);
	public isDarkTheme$ = this.themeService.isDarkTheme$;

	constructor(private themeService: ThemeService) {}
}
