import { Injectable } from '@angular/core';
import { LOCAL_STORAGE_ITEMS } from './local-storage.constants';

@Injectable({
	providedIn: 'root',
})
export class LocalStorageService {
	public getItem(itemKey: LOCAL_STORAGE_ITEMS): string {
		return localStorage.getItem(itemKey) ?? '';
	}

	public removeItem(itemKey: LOCAL_STORAGE_ITEMS): void {
		localStorage.removeItem(itemKey);
	}

	public setItem(itemKey: LOCAL_STORAGE_ITEMS, itemValue: string): void {
		localStorage.setItem(itemKey, itemValue);
	}
}
