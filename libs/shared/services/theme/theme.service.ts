import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LOCAL_STORAGE_ITEMS, LocalStorageService } from '../local-storage';
import { ThemeMode } from './theme.constants';

@Injectable({
	providedIn: 'root',
})
export class ThemeService {
	public theme$: BehaviorSubject<ThemeMode> = new BehaviorSubject<ThemeMode>(
		ThemeMode.SYSTEM
	);
	public isDarkTheme$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
		false
	);

	constructor(private localStorageService: LocalStorageService) {
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', () => {
				this.isDarkTheme$.next(this.isDarkTheme);
			});
	}

	public setThemeOnStart(): void {
		this.setTheme(
			(this.localStorageService.getItem(
				LOCAL_STORAGE_ITEMS.THEME
			) as ThemeMode) || ThemeMode.LIGHT
		);
	}

	public setTheme(theme: ThemeMode): void {
		switch (theme) {
			case ThemeMode.DARK: {
				document.body.classList.remove(ThemeMode.SYSTEM);
				document.body.classList.add(ThemeMode.DARK);
				break;
			}
			case ThemeMode.SYSTEM: {
				document.body.classList.remove(ThemeMode.DARK);
				document.body.classList.add(ThemeMode.SYSTEM);
				break;
			}
			case ThemeMode.LIGHT:
			default: {
				document.body.classList.remove(ThemeMode.DARK);
				document.body.classList.remove(ThemeMode.SYSTEM);
				break;
			}
		}
		this.localStorageService.setItem(LOCAL_STORAGE_ITEMS.THEME, theme);
		this.theme$.next(theme);
		this.isDarkTheme$.next(this.isDarkTheme);
	}

	private get isDarkTheme(): boolean {
		return (
			this.theme$.getValue() === ThemeMode.DARK ||
			(this.theme$.getValue() === ThemeMode.SYSTEM &&
				window.matchMedia &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		);
	}
}
