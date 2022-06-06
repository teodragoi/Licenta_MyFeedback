import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@ng-arch/ng-arch/users/types';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class LoginService {
	private baseUrl = 'http://127.0.0.1:3000/login';

	constructor(private httpClient: HttpClient) {}

	public login(payload: { email: string; password: string }): Observable<User> {
		return this.httpClient.post<User>(this.baseUrl, payload);
	}
}
