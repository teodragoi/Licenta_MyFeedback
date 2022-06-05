import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@ng-arch/ng-arch/users/types';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class UsersService {
	private baseUrl = 'http://127.0.0.1:3000/users';

	constructor(private httpClient: HttpClient) {}

	public getUsers(): Observable<User[]> {
		return this.httpClient.get<User[]>(this.baseUrl);
	}

	public getUserDetails(userId: string): Observable<User> {
		return this.httpClient.get<User>(`${this.baseUrl}/${userId}`);
	}

	public addUser(user: User): Observable<User> {
		return this.httpClient.post<User>(this.baseUrl, user);
	}

	public editUserDetails(
		userId: string,
		user: Partial<User>
	): Observable<User> {
		return this.httpClient.patch<User>(
			`${this.baseUrl}/${userId}/details`,
			user
		);
	}

	public editUserPassword(userId: string, password: string): Observable<User> {
		return this.httpClient.patch<User>(`${this.baseUrl}/${userId}/password`, {
			password,
		});
	}

	public deleteUser(userId: string): Observable<{ success: boolean }> {
		return this.httpClient.delete<{ success: boolean }>(
			`${this.baseUrl}/${userId}`
		);
	}
}
