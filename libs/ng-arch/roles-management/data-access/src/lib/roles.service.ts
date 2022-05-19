import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '@ng-arch/ng-arch/roles-management/types';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class RolesService {
	private baseUrl: string = 'http://127.0.0.1:3000/roles';

	constructor(private http: HttpClient) {}

	public deleteRole(roleId: string): Observable<any> {
		return this.http.delete(`${this.baseUrl}/${roleId}`);
	}

	public getAllRoles(): Observable<Role[]> {
		return this.http.get<Role[]>(this.baseUrl);
	}

	public postRole(role: Role): Observable<Role> {
		return this.http.post<Role>(this.baseUrl, { ...role });
	}
}
